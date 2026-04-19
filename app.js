document.addEventListener('DOMContentLoaded', () => {
    // State Management
    const state = {
        currentPage: 'dashboard',
        currentSubject: null,
        currentQuestionIndex: 0,
        quizQuestions: [],
        answers: [],
        submitted: [],
        flagged: [],
        score: 0,
        timer: null,
        secondsElapsed: 0,
        userProgress: JSON.parse(localStorage.getItem('mechquest_progress')) || {}
    };

    // DOM Elements
    const navItems = document.querySelectorAll('.nav-links li');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('page-title');
    const subjectList = document.getElementById('subject-list');
    
    // Quiz View Elements
    const quizView = document.getElementById('quiz-view');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionMeta = document.getElementById('question-meta');
    const quizProgressInner = document.getElementById('quiz-progress-inner');
    const quizTimer = document.getElementById('quiz-timer');
    const explanationContainer = document.getElementById('explanation-container');
    const explanationText = document.getElementById('explanation-text');
    const questionMap = document.getElementById('question-map');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const flagBtn = document.getElementById('flag-btn');
    const finishBtn = document.getElementById('finish-btn');
    const closeResultsBtn = document.getElementById('close-results');
    const resetDataBtn = document.getElementById('reset-data-btn');
    const exitQuizBtn = document.getElementById('exit-quiz');

    // Result Elements
    const resTotal = document.getElementById('res-total');
    const resAttempted = document.getElementById('res-attempted');
    const resCorrect = document.getElementById('res-correct');
    const resAccuracy = document.getElementById('res-accuracy');
    const resultsSubjectName = document.getElementById('results-subject-name');

    // Mobile Elements
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    // Initialization
    function init() {
        renderSubjects();
        setupNavigation();
        setupQuizListeners();
        setupMobileMenu();
    }

    // Mobile Menu Toggle
    function setupMobileMenu() {
        if (!menuToggle) return;

        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Navigation Logic
    function setupNavigation() {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const pageId = item.getAttribute('data-page');
                navigateTo(pageId);
                
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                // Close sidebar on mobile after navigation
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            });
        });
    }

    function navigateTo(pageId) {
        state.currentPage = pageId;
        
        // Update Title
        const titles = {
            'dashboard': 'Dashboard',
            'study': 'Study Topics',
            'exam': 'Mock Exam',
            'formulas': 'Formula Reference',
            'settings': 'Settings',
            'quiz-view': 'Practice Session'
        };
        pageTitle.textContent = titles[pageId] || 'MechQuest';

        // Toggle Pages
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
            }
        });

        // Specific Page Logic
        if (pageId === 'study') {
            renderSubjects();
        }
    }

    // Render Subjects in Study Tab
    function renderSubjects() {
        if (!subjectList) return;
        
        subjectList.innerHTML = SUBJECTS.map(subject => {
            const progressData = state.userProgress[subject.id] || { completed: 0 };
            const progressPercent = Math.round((progressData.completed / subject.count) * 100);
            
            return `
                <div class="subject-card" data-id="${subject.id}">
                    <div class="subject-header">
                        <span class="subject-icon">${subject.icon}</span>
                        <span class="subject-progress">${progressPercent}% Complete</span>
                    </div>
                    <h3>${subject.name}</h3>
                    <p>${subject.count} Questions</p>
                    <div class="mini-progress-bar">
                        <div class="mini-progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                </div>
            `;
        }).join('');

        // Add Click Listeners to Subject Cards
        document.querySelectorAll('.subject-card').forEach(card => {
            card.addEventListener('click', () => {
                const subjectId = card.getAttribute('data-id');
                startQuiz(subjectId);
            });
        });
    }

    // Quiz Engine
    function startQuiz(subjectId) {
        const subject = SUBJECTS.find(s => s.id === subjectId);
        const questions = QUESTIONS[subjectId];

        if (!questions || questions.length === 0) {
            alert("No questions available for this topic yet. We're adding more soon!");
            return;
        }

        state.currentSubject = subject;
        state.quizQuestions = [...questions];
        state.currentQuestionIndex = 0;
        state.answers = new Array(questions.length).fill(null);
        state.submitted = new Array(questions.length).fill(false);
        state.flagged = new Array(questions.length).fill(false);
        state.score = 0;
        state.secondsElapsed = 0;

        navigateTo('quiz-view');
        renderQuestionMap();
        loadQuestion();
        startTimer();
    }

    function loadQuestion() {
        const question = state.quizQuestions[state.currentQuestionIndex];
        questionMeta.textContent = `Question ${state.currentQuestionIndex + 1} of ${state.quizQuestions.length} • ${question.topic}`;
        
        questionText.innerHTML = `<p>${question.question}</p>`;
        
        if (question.image) {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'question-image-container';
            imgDiv.innerHTML = `<img src="${question.image}" alt="Question Diagram" class="quiz-image">`;
            questionText.appendChild(imgDiv);
        } else if (question.tikz) {
            const tikzDiv = document.createElement('div');
            tikzDiv.className = 'tikz-container';
            const script = document.createElement('script');
            script.type = 'text/tikz';
            script.textContent = question.tikz;
            tikzDiv.appendChild(script);
            questionText.appendChild(tikzDiv);
            
            // Re-trigger TikZJax with multiple attempts
            const trigger = () => window.dispatchEvent(new Event('load'));
            setTimeout(trigger, 50);
            setTimeout(trigger, 200);
            setTimeout(trigger, 500);
        }
        
        // Update Progress Bar
        const progress = ((state.currentQuestionIndex + 1) / state.quizQuestions.length) * 100;
        quizProgressInner.style.width = `${progress}%`;

        // Reset explanation
        explanationContainer.classList.add('hidden');
        explanationText.innerHTML = '';

        // Render Options
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            if (state.answers[state.currentQuestionIndex] === index) {
                div.classList.add('selected');
            }
            
            div.innerHTML = `
                <span class="option-prefix">${option.label}</span>
                <span class="option-text">${option.text}</span>
            `;
            
            div.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(div);
        });

        // Trigger MathJax Typeset
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }

        updateMapVisuals();

        // Button States
        prevBtn.disabled = state.currentQuestionIndex === 0;
        
        // Update Flag Button
        if (state.flagged[state.currentQuestionIndex]) {
            flagBtn.classList.add('active');
        } else {
            flagBtn.classList.remove('active');
        }

        if (state.submitted[state.currentQuestionIndex]) {
            showFeedback();
        } else {
            submitBtn.classList.remove('hidden');
            nextBtn.classList.add('hidden');
        }
    }

    function selectOption(index) {
        if (state.submitted[state.currentQuestionIndex]) return; // Prevent changing after submit
        
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        options[index].classList.add('selected');
        
        state.answers[state.currentQuestionIndex] = index;
        updateMapVisuals();
    }

    function renderQuestionMap() {
        if (!questionMap) return;
        
        questionMap.innerHTML = state.quizQuestions.map((_, index) => `
            <button class="map-btn" data-index="${index}">${index + 1}</button>
        `).join('');

        document.querySelectorAll('.map-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.currentQuestionIndex = parseInt(btn.getAttribute('data-index'));
                loadQuestion();
            });
        });
        
        updateMapVisuals();
    }

    function updateMapVisuals() {
        const btns = document.querySelectorAll('.map-btn');
        btns.forEach((btn, index) => {
            btn.className = 'map-btn';
            if (index === state.currentQuestionIndex) btn.classList.add('current');
            else if (state.flagged[index]) btn.classList.add('flagged');
            else if (state.submitted[index]) btn.classList.add('answered');
        });
    }

    function showFeedback() {
        state.submitted[state.currentQuestionIndex] = true;
        const question = state.quizQuestions[state.currentQuestionIndex];
        const selectedIndex = state.answers[state.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        options.forEach((opt, idx) => {
            if (question.options[idx].is_correct) {
                opt.classList.add('correct');
            } else if (idx === selectedIndex) {
                opt.classList.add('wrong');
            }
        });

        // Show Structured Explanation
        explanationText.innerHTML = '';
        question.solution.steps.forEach((step, idx) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'solution-step';
            
            stepDiv.innerHTML = `
                <h5>Step ${idx + 1}: ${step.title}</h5>
                <p>${step.content}</p>
            `;
            if (step.image) {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'step-image-container';
                imgDiv.innerHTML = `<img src="${step.image}" alt="Step ${idx + 1} Diagram" class="quiz-image">`;
                stepDiv.appendChild(imgDiv);
            } else if (step.tikz) {
                const tikzDiv = document.createElement('div');
                tikzDiv.className = 'tikz-container';
                const script = document.createElement('script');
                script.type = 'text/tikz';
                script.textContent = step.tikz;
                tikzDiv.appendChild(script);
                stepDiv.appendChild(tikzDiv);
                
                // Re-trigger TikZJax with multiple attempts
                const trigger = () => window.dispatchEvent(new Event('load'));
                setTimeout(trigger, 50);
                setTimeout(trigger, 200);
                setTimeout(trigger, 500);
            }
            explanationText.appendChild(stepDiv);
        });

        const finalDiv = document.createElement('div');
        finalDiv.className = 'final-answer';
        finalDiv.innerHTML = `<strong>Final Answer:</strong> ${question.solution.final_answer}`;
        explanationText.appendChild(finalDiv);
        
        explanationContainer.classList.remove('hidden');

        // Trigger MathJax Typeset for solution
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }

        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    }

    function setupQuizListeners() {
        finishBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to finish the quiz and see your results?")) {
                finishQuiz();
            }
        });

        flagBtn.addEventListener('click', () => {
            state.flagged[state.currentQuestionIndex] = !state.flagged[state.currentQuestionIndex];
            flagBtn.classList.toggle('active');
            updateMapVisuals();
        });

        submitBtn.addEventListener('click', () => {
            if (state.answers[state.currentQuestionIndex] === null) {
                alert("Please select an option first.");
                return;
            }
            showFeedback();
        });

        nextBtn.addEventListener('click', () => {
            if (state.currentQuestionIndex < state.quizQuestions.length - 1) {
                state.currentQuestionIndex++;
                loadQuestion();
            }
        });

        closeResultsBtn.addEventListener('click', () => {
            navigateTo('study');
        });

        if (resetDataBtn) {
            resetDataBtn.addEventListener('click', () => {
                if (confirm("Are you sure you want to erase all your progress? This cannot be undone.")) {
                    localStorage.removeItem('mechquest_progress');
                    state.userProgress = {};
                    renderSubjects();
                    alert("All progress has been reset.");
                }
            });
        }

        const refreshTikzBtn = document.getElementById('refresh-tikz');
        if (refreshTikzBtn) {
            refreshTikzBtn.addEventListener('click', () => {
                window.dispatchEvent(new Event('load'));
            });
        }

        prevBtn.addEventListener('click', () => {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex--;
                loadQuestion();
            }
        });

        exitQuizBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to exit the quiz? Your progress won't be saved.")) {
                stopTimer();
                navigateTo('study');
            }
        });
    }

    function finishQuiz() {
        stopTimer();
        
        const total = state.quizQuestions.length;
        let attempted = 0;
        let correct = 0;

        state.quizQuestions.forEach((q, idx) => {
            if (state.submitted[idx]) {
                attempted++;
                const selectedIndex = state.answers[idx];
                if (selectedIndex !== null && q.options[selectedIndex].is_correct) {
                    correct++;
                }
            }
        });

        const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
        
        // Populate Results
        resTotal.textContent = total;
        resAttempted.textContent = attempted;
        resCorrect.textContent = correct;
        resAccuracy.textContent = `${accuracy}%`;
        resultsSubjectName.textContent = state.currentSubject.name;

        // Save Progress
        updateProgress(state.currentSubject.id, attempted);

        navigateTo('results-view');
    }

    function updateProgress(subjectId, newlyCompleted) {
        if (!state.userProgress[subjectId]) {
            state.userProgress[subjectId] = { completed: 0 };
        }
        
        // Add newly completed questions to cumulative total
        state.userProgress[subjectId].completed += newlyCompleted;
        
        // Cap at total questions
        const totalForSubject = SUBJECTS.find(s => s.id === subjectId).count;
        if (state.userProgress[subjectId].completed > totalForSubject) {
            state.userProgress[subjectId].completed = totalForSubject;
        }

        localStorage.setItem('mechquest_progress', JSON.stringify(state.userProgress));
        renderSubjects();
    }

    // Timer Utilities
    function startTimer() {
        state.secondsElapsed = 0;
        updateTimerDisplay();
        state.timer = setInterval(() => {
            state.secondsElapsed++;
            updateTimerDisplay();
        }, 1000);
    }

    function stopTimer() {
        clearInterval(state.timer);
    }

    function updateTimerDisplay() {
        quizTimer.textContent = formatTime(state.secondsElapsed);
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Run Init
    init();
});
