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
        userProgress: JSON.parse(localStorage.getItem('mechquest_progress')) || {},
        isFinished: false
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
    const reviewResultsBtn = document.getElementById('review-results');
    const resultsQuestionMap = document.getElementById('results-question-map');
    const resultsDetailedList = document.getElementById('results-detailed-list');
    const resetDataBtn = document.getElementById('reset-data-btn');
    const exitQuizBtn = document.getElementById('exit-quiz');
    const quizLegendActive = document.getElementById('quiz-legend-active');
    const quizLegendReview = document.getElementById('quiz-legend-review');

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
        subjectList.innerHTML = '';
        
        SUBJECTS.forEach(subject => {
            const subjectHeader = document.createElement('div');
            subjectHeader.className = 'subject-section-header';
            subjectHeader.innerHTML = `
                <div class="subject-title">
                    <span class="subject-icon">${subject.icon}</span>
                    <h2>${subject.name}</h2>
                </div>
            `;
            subjectList.appendChild(subjectHeader);

            const topicGrid = document.createElement('div');
            topicGrid.className = 'topic-grid-study';
            
            subject.topics.forEach(topic => {
                const questionsCount = (QUESTIONS[subject.id] || []).filter(q => q.topic === topic).length;
                const topicCard = document.createElement('div');
                topicCard.className = 'topic-card-study';
                topicCard.innerHTML = `
                    <div class="topic-info">
                        <h3>${topic}</h3>
                        <p>${questionsCount} Questions</p>
                    </div>
                    <button class="btn-start-topic" data-subject="${subject.id}" data-topic="${topic}">Start Quiz</button>
                `;
                topicGrid.appendChild(topicCard);
            });
            
            subjectList.appendChild(topicGrid);
        });

        document.querySelectorAll('.btn-start-topic').forEach(btn => {
            btn.addEventListener('click', () => {
                const subjectId = btn.getAttribute('data-subject');
                const topicName = btn.getAttribute('data-topic');
                startQuiz(subjectId, topicName);
            });
        });
    }

    // Quiz Engine
    function startQuiz(subjectId, topicName) {
        const subject = SUBJECTS.find(s => s.id === subjectId);
        let questions = QUESTIONS[subjectId] || [];
        
        if (topicName) {
            questions = questions.filter(q => q.topic === topicName);
        }

        if (questions.length === 0) {
            alert("No questions available for this topic yet.");
            return;
        }

        state.currentSubject = subject;
        state.currentTopic = topicName;
        state.quizQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);
        state.currentQuestionIndex = 0;
        state.answers = new Array(state.quizQuestions.length).fill(null);
        state.submitted = new Array(state.quizQuestions.length).fill(false);
        state.flagged = new Array(state.quizQuestions.length).fill(false);
        state.score = 0;
        state.secondsElapsed = 0;
        state.isFinished = false;

        navigateTo('quiz-view');
        renderQuestionMap();
        loadQuestion();
        startTimer();
    }

    function loadQuestion() {
        const question = state.quizQuestions[state.currentQuestionIndex];
        questionMeta.textContent = `Question ${state.currentQuestionIndex + 1} of ${state.quizQuestions.length} • ${state.currentTopic || state.currentSubject.name}`;
        
        questionText.innerHTML = `<p>${question.question}</p>`;
        
        if (question.question_image) {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'question-image-container';
            imgDiv.innerHTML = `<img src="${question.question_image}" alt="Question Diagram" class="quiz-image">`;
            questionText.appendChild(imgDiv);
        } else if (question.image) {
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
            
            const trigger = () => window.dispatchEvent(new Event('load'));
            setTimeout(trigger, 50);
            setTimeout(trigger, 200);
            setTimeout(trigger, 500);
        }
        
        const progress = ((state.currentQuestionIndex + 1) / state.quizQuestions.length) * 100;
        quizProgressInner.style.width = `${progress}%`;

        explanationContainer.classList.add('hidden');
        explanationText.innerHTML = '';

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

        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }

        updateMapVisuals();

        if (state.isFinished) {
            quizLegendActive.classList.add('hidden');
            quizLegendReview.classList.remove('hidden');
        } else {
            quizLegendActive.classList.remove('hidden');
            quizLegendReview.classList.add('hidden');
        }

        prevBtn.disabled = state.currentQuestionIndex === 0;
        
        if (state.flagged[state.currentQuestionIndex]) {
            flagBtn.classList.add('active');
        } else {
            flagBtn.classList.remove('active');
        }

        nextBtn.disabled = state.currentQuestionIndex === state.quizQuestions.length - 1;
        nextBtn.classList.remove('hidden');
        prevBtn.classList.remove('hidden');

        if (state.isFinished) {
            showFeedback();
            submitBtn.classList.add('hidden');
        } else {
            if (state.submitted[state.currentQuestionIndex]) {
                submitBtn.classList.add('hidden');
            } else {
                submitBtn.classList.remove('hidden');
            }
        }
    }

    function selectOption(index) {
        if (state.submitted[state.currentQuestionIndex]) return; 
        
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
            
            if (state.isFinished) {
                if (state.submitted[index]) {
                    const q = state.quizQuestions[index];
                    const selectedIndex = state.answers[index];
                    if (selectedIndex !== null && q.options[selectedIndex].is_correct) {
                        btn.classList.add('correct-res');
                    } else {
                        btn.classList.add('wrong-res');
                    }
                }
                if (index === state.currentQuestionIndex) btn.classList.add('current');
            } else {
                if (index === state.currentQuestionIndex) btn.classList.add('current');
                else if (state.flagged[index]) btn.classList.add('flagged');
                else if (state.submitted[index]) btn.classList.add('answered');
            }
        });
    }

    function showFeedback() {
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

        explanationText.innerHTML = '';

        if (question.solution_image) {
            const globalImgDiv = document.createElement('div');
            globalImgDiv.className = 'solution-image-container';
            globalImgDiv.innerHTML = `<img src="${question.solution_image}" alt="Solution Overview" class="quiz-image">`;
            explanationText.appendChild(globalImgDiv);
        }

        question.solution.steps.forEach((step, idx) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'solution-step';
            
            stepDiv.innerHTML = `
                <h5>Step ${idx + 1}: ${step.title}</h5>
                <p>${step.content}</p>
            `;
            if (step.solution_image) {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'step-image-container';
                imgDiv.innerHTML = `<img src="${step.solution_image}" alt="Step ${idx + 1} Diagram" class="quiz-image">`;
                stepDiv.appendChild(imgDiv);
            } else if (step.image) {
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
            state.submitted[state.currentQuestionIndex] = true;
            state.flagged[state.currentQuestionIndex] = false;
            updateMapVisuals();
            
            if (state.currentQuestionIndex < state.quizQuestions.length - 1) {
                state.currentQuestionIndex++;
                loadQuestion();
            } else {
                loadQuestion();
                alert("Last question answered! Click 'Finish Session' to see results.");
            }
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

        reviewResultsBtn.addEventListener('click', () => {
            navigateTo('quiz-view');
            state.currentQuestionIndex = 0;
            loadQuestion();
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
        state.score = correct;

        const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
        
        resTotal.textContent = state.quizQuestions.length;
        resAttempted.textContent = attempted;
        resCorrect.textContent = state.score;
        resAccuracy.textContent = `${accuracy}%`;
        resultsSubjectName.textContent = state.currentTopic || state.currentSubject.name;

        resultsQuestionMap.innerHTML = state.quizQuestions.map((q, idx) => {
            let statusClass = '';
            if (state.submitted[idx]) {
                const selectedIndex = state.answers[idx];
                if (selectedIndex !== null && q.options[selectedIndex].is_correct) {
                    statusClass = 'correct-res';
                } else {
                    statusClass = 'wrong-res';
                }
            }
            return `<button class="map-btn ${statusClass}" data-index="${idx}">${idx + 1}</button>`;
        }).join('');

        document.querySelectorAll('.results-map .map-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.currentQuestionIndex = parseInt(btn.getAttribute('data-index'));
                state.isFinished = true;
                navigateTo('quiz-view');
                loadQuestion();
            });
        });

        // Populate Detailed List
        resultsDetailedList.innerHTML = state.quizQuestions.map((q, idx) => {
            let status = 'unanswered';
            let icon = '○';
            if (state.submitted[idx]) {
                const selectedIndex = state.answers[idx];
                if (selectedIndex !== null && q.options[selectedIndex].is_correct) {
                    status = 'correct';
                    icon = '✓';
                } else {
                    status = 'wrong';
                    icon = '✗';
                }
            }
            
            // Clean up LaTeX for summary if needed, or just show as is
            const shortText = q.question.replace(/\$/g, '').substring(0, 80) + '...';
            
            return `
                <div class="result-item" data-index="${idx}">
                    <div class="result-status-icon ${status}">${icon}</div>
                    <div class="result-text">${idx + 1}. ${shortText}</div>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.result-item').forEach(item => {
            item.addEventListener('click', () => {
                state.currentQuestionIndex = parseInt(item.getAttribute('data-index'));
                state.isFinished = true;
                navigateTo('quiz-view');
                loadQuestion();
            });
        });

        // Save Progress
        updateProgress(state.currentSubject.id, attempted);
        state.isFinished = true;

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
