document.addEventListener('DOMContentLoaded', () => {
    // State Management
    const state = {
        currentPage: 'dashboard',
        currentSubject: null,
        currentQuestionIndex: 0,
        quizQuestions: [],
        answers: [],
        score: 0,
        timer: null,
        secondsElapsed: 0
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
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const exitQuizBtn = document.getElementById('exit-quiz');

    // Initialization
    function init() {
        renderSubjects();
        setupNavigation();
        setupQuizListeners();
    }

    // Navigation Logic
    function setupNavigation() {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const pageId = item.getAttribute('data-page');
                navigateTo(pageId);
                
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
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
        
        subjectList.innerHTML = SUBJECTS.map(subject => `
            <div class="subject-card" data-id="${subject.id}">
                <div class="subject-header">
                    <span class="subject-icon">${subject.icon}</span>
                    <span class="subject-progress">${subject.progress}% Complete</span>
                </div>
                <h3>${subject.name}</h3>
                <p>${subject.count} Questions</p>
                <div class="mini-progress-bar">
                    <div class="mini-progress-fill" style="width: ${subject.progress}%"></div>
                </div>
            </div>
        `).join('');

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
        state.score = 0;
        state.secondsElapsed = 0;

        navigateTo('quiz-view');
        loadQuestion();
        startTimer();
    }

    function loadQuestion() {
        const question = state.quizQuestions[state.currentQuestionIndex];
        questionMeta.textContent = `Question ${state.currentQuestionIndex + 1} of ${state.quizQuestions.length} • ${state.currentSubject.name}`;
        questionText.textContent = question.text;
        
        // Update Progress Bar
        const progress = ((state.currentQuestionIndex + 1) / state.quizQuestions.length) * 100;
        quizProgressInner.style.width = `${progress}%`;

        // Render Options
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            if (state.answers[state.currentQuestionIndex] === index) {
                div.classList.add('selected');
            }
            
            div.innerHTML = `
                <span class="option-prefix">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            div.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(div);
        });

        // Button States
        prevBtn.disabled = state.currentQuestionIndex === 0;
        
        if (state.answers[state.currentQuestionIndex] !== null) {
            showFeedback();
        } else {
            submitBtn.classList.remove('hidden');
            nextBtn.classList.add('hidden');
        }
    }

    function selectOption(index) {
        if (state.answers[state.currentQuestionIndex] !== null) return; // Prevent changing after submit
        
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        options[index].classList.add('selected');
        
        state.answers[state.currentQuestionIndex] = index;
    }

    function showFeedback() {
        const question = state.quizQuestions[state.currentQuestionIndex];
        const selectedIndex = state.answers[state.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        options.forEach((opt, idx) => {
            if (idx === question.correct) {
                opt.classList.add('correct');
            } else if (idx === selectedIndex) {
                opt.classList.add('wrong');
            }
        });

        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        
        if (state.currentQuestionIndex === state.quizQuestions.length - 1) {
            nextBtn.textContent = 'Finish Quiz';
        } else {
            nextBtn.textContent = 'Next Question';
        }
    }

    function setupQuizListeners() {
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
            } else {
                finishQuiz();
            }
        });

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
        let correctCount = 0;
        state.quizQuestions.forEach((q, idx) => {
            if (state.answers[idx] === q.correct) correctCount++;
        });

        const percentage = Math.round((correctCount / state.quizQuestions.length) * 100);
        
        alert(`Quiz Finished!\nScore: ${correctCount}/${state.quizQuestions.length} (${percentage}%)\nTime: ${formatTime(state.secondsElapsed)}`);
        navigateTo('study');
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
