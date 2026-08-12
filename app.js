/**
 * Ứng dụng Ôn tập Trắc nghiệm Triết học Mác - Lênin
 * State Management, Confetti & Interaction Logic (Pure Visual & Professional UI)
 */

// --- Simple Confetti Generator ---
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#e11d48', '#f59e0b', '#06b6d4', '#10b981', '#a855f7', '#ec4899'];

  for (let i = 0; i < 75; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }

  let animId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.alpha -= 0.012;
      p.rotation += p.rotSpeed;

      if (p.alpha > 0) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (active) {
      animId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animId);
    }
  }

  animate();
}

// --- Main Application Controller ---
class QuizApp {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.alwaysShowAnswers = localStorage.getItem('alwaysShowAnswers') === 'true';
    this.shuffleOptions = localStorage.getItem('shuffleOptions') !== 'false'; // Default to true

    this.mode = 'practice'; // 'practice' | 'exam' | 'flashcard' | 'mistakes' | 'starred' | 'search'
    this.currentChapter = 'all';
    this.currentQuestionIdx = 0;

    // Load persisted state
    this.userAnswers = JSON.parse(localStorage.getItem('userAnswers') || '{}');
    this.starredIds = new Set(JSON.parse(localStorage.getItem('starredIds') || '[]'));
    this.mistakeIds = new Set(JSON.parse(localStorage.getItem('mistakeIds') || '[]'));
    this.streak = parseInt(localStorage.getItem('streak') || '0', 10);

    // Dynamic option shuffling map: questionId -> array of original indices [2, 0, 3, 1]
    this.optionOrders = {};

    // Exam state
    this.exam = {
      active: false,
      questions: [],
      answers: {},
      optionOrders: {},
      timeRemaining: 0,
      totalTime: 0,
      timerInterval: null,
      submitted: false,
      score: 0
    };

    // Flashcard state
    this.flashcardFlipped = false;

    // Filtered Question list
    this.activeQuestions = [];
    
    this.initElements();
    this.applyTheme(this.theme);
    this.updateToggleAnswerBtn();
    this.updateToggleShuffleBtn();
    this.bindEvents();
    this.populateChapterSelect();
    this.loadActiveQuestions();
  }

  initElements() {
    // Buttons & Toggles
    this.btnTheme = document.getElementById('btn-theme');
    this.streakCountEl = document.getElementById('streak-count');
    this.chapterSelect = document.getElementById('chapter-select');
    this.btnToggleAnswer = document.getElementById('btn-toggle-answer');
    this.toggleAnswerText = document.getElementById('toggle-answer-text');
    this.btnToggleShuffle = document.getElementById('btn-toggle-shuffle-options');
    this.toggleShuffleText = document.getElementById('toggle-shuffle-text');

    // Tabs
    this.tabButtons = document.querySelectorAll('.tab-btn');
    this.sections = {
      practice: document.getElementById('section-practice'),
      exam: document.getElementById('section-exam'),
      flashcard: document.getElementById('section-flashcard'),
      search: document.getElementById('section-search')
    };

    // Practice Elements
    this.statCorrect = document.getElementById('stat-correct');
    this.statWrong = document.getElementById('stat-wrong');
    this.statRemaining = document.getElementById('stat-remaining');
    this.badgeChapter = document.getElementById('badge-chapter');
    this.badgeTag = document.getElementById('badge-tag');
    this.currentQNum = document.getElementById('current-q-num');
    this.totalQNum = document.getElementById('total-q-num');
    this.btnStar = document.getElementById('btn-star');
    this.questionText = document.getElementById('question-text');
    this.optionsContainer = document.getElementById('options-container');
    this.explanationBox = document.getElementById('explanation-box');
    this.explanationText = document.getElementById('explanation-text');
    this.btnPrev = document.getElementById('btn-prev');
    this.btnNext = document.getElementById('btn-next');
    this.btnRestart = document.getElementById('btn-restart');
    this.btnShuffle = document.getElementById('btn-shuffle');
    this.btnClearHistory = document.getElementById('btn-clear-history');
    this.matrixGrid = document.getElementById('matrix-grid');

    // Modal & Toast Elements
    this.confirmModal = document.getElementById('confirm-modal');
    this.btnModalCancel = document.getElementById('btn-modal-cancel');
    this.btnModalConfirm = document.getElementById('btn-modal-confirm');
    this.toastContainer = document.getElementById('toast-container');

    // Exam Elements
    this.examSetup = document.getElementById('exam-setup');
    this.examRunning = document.getElementById('exam-running');
    this.examResults = document.getElementById('exam-results');
    this.examTimer = document.getElementById('exam-timer');
    this.timerText = document.getElementById('timer-text');
    this.examProgress = document.getElementById('exam-progress');
    this.btnStartExam = document.getElementById('btn-start-exam');
    this.btnSubmitExam = document.getElementById('btn-submit-exam');
    this.btnRetakeExam = document.getElementById('btn-retake-exam');
    this.examQuestionsContainer = document.getElementById('exam-questions-container');

    // Flashcard Elements
    this.flashcardEl = document.getElementById('flashcard-3d');
    this.fcChapter = document.getElementById('fc-chapter');
    this.fcCounter = document.getElementById('fc-counter');
    this.fcQuestion = document.getElementById('fc-question');
    this.fcAnswer = document.getElementById('fc-answer');
    this.fcExplanation = document.getElementById('fc-explanation');
    this.btnFcPrev = document.getElementById('btn-fc-prev');
    this.btnFcNext = document.getElementById('btn-fc-next');
    this.btnFcFlip = document.getElementById('btn-fc-flip');

    // Search Elements
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.searchCount = document.getElementById('search-count');

    // Badges in Tabs
    this.badgeMistakes = document.getElementById('badge-mistakes');
    this.badgeStarred = document.getElementById('badge-starred');
    this.updateBadges();
  }

  bindEvents() {
    // Theme toggle
    this.btnTheme.addEventListener('click', () => {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', this.theme);
      this.applyTheme(this.theme);
    });

    // Navigation Tabs
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetMode = btn.dataset.tab;
        this.switchMode(targetMode);
      });
    });

    // Chapter filter change
    this.chapterSelect.addEventListener('change', (e) => {
      this.currentChapter = e.target.value;
      this.currentQuestionIdx = 0;
      this.loadActiveQuestions();
    });

    // Toggle Always Show Answer Mode
    this.btnToggleAnswer.addEventListener('click', () => {
      this.alwaysShowAnswers = !this.alwaysShowAnswers;
      localStorage.setItem('alwaysShowAnswers', this.alwaysShowAnswers);
      this.updateToggleAnswerBtn();
      this.renderQuestion();
    });

    // Toggle Shuffle Options Mode
    if (this.btnToggleShuffle) {
      this.btnToggleShuffle.addEventListener('click', () => {
        this.shuffleOptions = !this.shuffleOptions;
        localStorage.setItem('shuffleOptions', this.shuffleOptions);
        this.optionOrders = {}; // Reset and re-shuffle options
        this.updateToggleShuffleBtn();
        this.renderQuestion();
        this.showToast(this.shuffleOptions ? 'Đã bật đảo đáp án (A, B, C, D ngẫu nhiên)' : 'Đã tắt đảo đáp án (thứ tự gốc)');
      });
    }

    // Star current question
    this.btnStar.addEventListener('click', () => {
      const curQ = this.getCurrentQuestion();
      if (!curQ) return;
      if (this.starredIds.has(curQ.id)) {
        this.starredIds.delete(curQ.id);
        this.btnStar.classList.remove('starred');
      } else {
        this.starredIds.add(curQ.id);
        this.btnStar.classList.add('starred');
      }
      this.updateStarButton();
      this.saveStarred();
      this.updateBadges();
      this.renderMatrix();
    });

    // Practice Next / Prev / Restart / Shuffle / Clear History
    this.btnPrev.addEventListener('click', () => this.navigateQuestion(-1));
    this.btnNext.addEventListener('click', () => this.navigateQuestion(1));
    this.btnRestart.addEventListener('click', () => this.restartToFirstQuestion());
    this.btnShuffle.addEventListener('click', () => this.shuffleQuestions());
    this.btnClearHistory.addEventListener('click', () => this.showConfirmModal());

    // Modal events
    this.btnModalCancel.addEventListener('click', () => this.hideConfirmModal());
    this.btnModalConfirm.addEventListener('click', () => this.executeClearHistory());
    this.confirmModal.addEventListener('click', (e) => {
      if (e.target === this.confirmModal) this.hideConfirmModal();
    });

    // Flashcard Controls
    this.flashcardEl.addEventListener('click', () => this.toggleFlashcardFlip());
    this.btnFcFlip.addEventListener('click', () => this.toggleFlashcardFlip());
    this.btnFcPrev.addEventListener('click', () => this.navigateFlashcard(-1));
    this.btnFcNext.addEventListener('click', () => this.navigateFlashcard(1));

    // Exam Controls
    this.btnStartExam.addEventListener('click', () => this.startExam());
    this.btnSubmitExam.addEventListener('click', () => this.submitExam());
    this.btnRetakeExam.addEventListener('click', () => this.resetExamSetup());

    // Exam options select
    document.querySelectorAll('.exam-option-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.exam-option-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });

    // Search Input
    this.searchInput.addEventListener('input', (e) => {
      this.renderSearchResults(e.target.value.trim());
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      if (this.mode === 'practice' || this.mode === 'mistakes' || this.mode === 'starred') {
        if (e.key === 'ArrowRight') this.navigateQuestion(1);
        if (e.key === 'ArrowLeft') this.navigateQuestion(-1);
        const curQ = this.getCurrentQuestion();
        if (curQ) {
          const order = this.getOptionOrder(curQ);
          if (['1', '2', '3', '4'].includes(e.key)) {
            const displayIdx = parseInt(e.key, 10) - 1;
            if (displayIdx < order.length) {
              this.handleOptionSelect(order[displayIdx]);
            }
          }
          if (['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D'].includes(e.key)) {
            const charMap = { a: 0, b: 1, c: 2, d: 3 };
            const displayIdx = charMap[e.key.toLowerCase()];
            if (displayIdx < order.length) {
              this.handleOptionSelect(order[displayIdx]);
            }
          }
        }
      } else if (this.mode === 'flashcard') {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          this.toggleFlashcardFlip();
        }
        if (e.key === 'ArrowRight') this.navigateFlashcard(1);
        if (e.key === 'ArrowLeft') this.navigateFlashcard(-1);
      }
    });
  }

  updateToggleAnswerBtn() {
    if (this.alwaysShowAnswers) {
      this.btnToggleAnswer.classList.add('active');
      this.toggleAnswerText.textContent = 'Đang hiện đáp án';
    } else {
      this.btnToggleAnswer.classList.remove('active');
      this.toggleAnswerText.textContent = 'Hiện đáp án';
    }
  }

  updateToggleShuffleBtn() {
    if (!this.btnToggleShuffle) return;
    if (this.shuffleOptions) {
      this.btnToggleShuffle.classList.add('active');
      if (this.toggleShuffleText) this.toggleShuffleText.textContent = 'Đang đảo đáp án';
      this.btnToggleShuffle.title = 'Đang bật đảo vị trí các đáp án A, B, C, D ngẫu nhiên (Nhấn để tắt)';
    } else {
      this.btnToggleShuffle.classList.remove('active');
      if (this.toggleShuffleText) this.toggleShuffleText.textContent = 'Đảo đáp án: Tắt';
      this.btnToggleShuffle.title = 'Đang hiển thị thứ tự gốc của đáp án (Nhấn để bật đảo đáp án)';
    }
  }

  getOptionOrder(q) {
    if (!q || !q.options) return [0, 1, 2, 3];
    if (!this.shuffleOptions) {
      return [0, 1, 2, 3].slice(0, q.options.length);
    }
    if (!this.optionOrders[q.id]) {
      const order = [];
      for (let i = 0; i < q.options.length; i++) order.push(i);
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      this.optionOrders[q.id] = order;
    }
    return this.optionOrders[q.id];
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    }
  }

  populateChapterSelect() {
    this.chapterSelect.innerHTML = '<option value="all">Tất cả các bài (381 câu hỏi)</option>';
    CHAPTERS_LIST.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.name;
      opt.textContent = `${c.name} (${c.count} câu)`;
      this.chapterSelect.appendChild(opt);
    });
  }

  updateBadges() {
    this.streakCountEl.textContent = this.streak;
    this.badgeMistakes.textContent = this.mistakeIds.size;
    this.badgeStarred.textContent = this.starredIds.size;
  }

  updateStarButton() {
    const curQ = this.getCurrentQuestion();
    if (!curQ) return;
    const isStarred = this.starredIds.has(curQ.id);
    if (isStarred) {
      this.btnStar.classList.add('starred');
      this.btnStar.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `;
    } else {
      this.btnStar.classList.remove('starred');
      this.btnStar.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `;
    }
  }

  saveAnswers() {
    localStorage.setItem('userAnswers', JSON.stringify(this.userAnswers));
  }

  saveStarred() {
    localStorage.setItem('starredIds', JSON.stringify([...this.starredIds]));
  }

  saveMistakes() {
    localStorage.setItem('mistakeIds', JSON.stringify([...this.mistakeIds]));
  }

  saveStreak() {
    localStorage.setItem('streak', this.streak.toString());
  }

  switchMode(newMode) {
    this.mode = newMode;
    this.tabButtons.forEach(btn => {
      if (btn.dataset.tab === newMode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Hide all sections
    Object.values(this.sections).forEach(sec => {
      if (sec) sec.style.display = 'none';
    });

    // Show appropriate section
    if (newMode === 'practice' || newMode === 'mistakes' || newMode === 'starred') {
      this.sections.practice.style.display = 'block';
      this.currentQuestionIdx = 0;
      this.loadActiveQuestions();
    } else if (newMode === 'exam') {
      this.sections.exam.style.display = 'block';
      if (!this.exam.active && !this.exam.submitted) {
        this.resetExamSetup();
      }
    } else if (newMode === 'flashcard') {
      this.sections.flashcard.style.display = 'block';
      this.currentQuestionIdx = 0;
      this.loadActiveQuestions();
      this.renderFlashcard();
    } else if (newMode === 'search') {
      this.sections.search.style.display = 'block';
      this.renderSearchResults(this.searchInput.value.trim());
    }
  }

  loadActiveQuestions() {
    if (this.mode === 'mistakes') {
      this.activeQuestions = QUIZ_DATA.filter(q => this.mistakeIds.has(q.id));
    } else if (this.mode === 'starred') {
      this.activeQuestions = QUIZ_DATA.filter(q => this.starredIds.has(q.id));
    } else {
      if (this.currentChapter === 'all') {
        this.activeQuestions = [...QUIZ_DATA];
      } else {
        this.activeQuestions = QUIZ_DATA.filter(q => q.chapter === this.currentChapter);
      }
    }

    if (this.activeQuestions.length === 0) {
      this.currentQuestionIdx = 0;
    } else if (this.currentQuestionIdx >= this.activeQuestions.length) {
      this.currentQuestionIdx = this.activeQuestions.length - 1;
    }

    this.updateStats();
    if (this.mode === 'flashcard') {
      this.renderFlashcard();
    } else {
      this.renderQuestion();
      this.renderMatrix();
    }
  }

  getCurrentQuestion() {
    if (!this.activeQuestions || this.activeQuestions.length === 0) return null;
    return this.activeQuestions[this.currentQuestionIdx];
  }

  updateStats() {
    let correct = 0;
    let wrong = 0;
    let answered = 0;

    this.activeQuestions.forEach(q => {
      const ans = this.userAnswers[q.id];
      if (ans !== undefined) {
        answered++;
        if (ans === q.answer) correct++;
        else wrong++;
      }
    });

    const remaining = this.activeQuestions.length - answered;
    this.statCorrect.textContent = correct;
    this.statWrong.textContent = wrong;
    this.statRemaining.textContent = remaining;
  }

  renderQuestion() {
    const q = this.getCurrentQuestion();
    if (!q) {
      this.questionText.textContent = 'Không có câu hỏi nào trong danh mục này.';
      this.optionsContainer.innerHTML = '';
      this.explanationBox.classList.remove('show');
      this.currentQNum.textContent = '0';
      this.totalQNum.textContent = '0';
      this.badgeChapter.textContent = 'Trống';
      this.badgeTag.style.display = 'none';
      return;
    }

    this.currentQNum.textContent = (this.currentQuestionIdx + 1).toString();
    this.totalQNum.textContent = this.activeQuestions.length.toString();
    this.badgeChapter.textContent = q.chapter;
    
    if (q.tag) {
      this.badgeTag.textContent = q.tag;
      this.badgeTag.style.display = 'inline-block';
    } else {
      this.badgeTag.style.display = 'none';
    }

    this.updateStarButton();

    this.questionText.textContent = q.question;
    this.optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    const chosenAnswer = this.userAnswers[q.id];
    const isAnswered = chosenAnswer !== undefined;
    const order = this.getOptionOrder(q);

    const checkSvg = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;
    const crossSvg = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;

    order.forEach((origIdx, displayIdx) => {
      const optText = q.options[origIdx];
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="opt-prefix">${letters[displayIdx]}</span>
        <span class="opt-text">${optText}</span>
        <span class="opt-icon"></span>
      `;

      if (isAnswered) {
        btn.classList.add('disabled');
        if (origIdx === q.answer) {
          btn.classList.add('correct');
          btn.querySelector('.opt-icon').innerHTML = checkSvg;
        } else if (origIdx === chosenAnswer) {
          btn.classList.add('wrong');
          btn.querySelector('.opt-icon').innerHTML = crossSvg;
        }
      } else if (this.alwaysShowAnswers) {
        // In Always Show Answers mode
        if (origIdx === q.answer) {
          btn.classList.add('correct');
          btn.querySelector('.opt-icon').innerHTML = checkSvg;
        }
        btn.addEventListener('click', () => this.handleOptionSelect(origIdx));
      } else {
        btn.addEventListener('click', () => this.handleOptionSelect(origIdx));
      }

      this.optionsContainer.appendChild(btn);
    });

    // Explanation Box
    if (isAnswered || this.alwaysShowAnswers) {
      this.explanationText.textContent = q.explanation || 'Đáp án đúng theo giáo trình chuẩn Triết học Mác - Lênin.';
      this.explanationBox.classList.add('show');
    } else {
      this.explanationBox.classList.remove('show');
    }

    // Navigation buttons state
    this.btnPrev.disabled = this.currentQuestionIdx === 0;
    this.btnNext.disabled = this.currentQuestionIdx === this.activeQuestions.length - 1;
  }

  handleOptionSelect(selectedIdx) {
    const q = this.getCurrentQuestion();
    if (!q || this.userAnswers[q.id] !== undefined) return;

    this.userAnswers[q.id] = selectedIdx;
    this.saveAnswers();

    const isCorrect = selectedIdx === q.answer;

    if (isCorrect) {
      this.streak++;
      if (this.streak > 0 && this.streak % 5 === 0) {
        launchConfetti();
      }
      if (this.mistakeIds.has(q.id)) {
        this.mistakeIds.delete(q.id);
        this.saveMistakes();
      }
    } else {
      this.streak = 0;
      this.mistakeIds.add(q.id);
      this.saveMistakes();
    }

    this.saveStreak();
    this.updateBadges();
    this.updateStats();
    this.renderQuestion();
    this.renderMatrix();
  }

  navigateQuestion(delta) {
    const newIdx = this.currentQuestionIdx + delta;
    if (newIdx >= 0 && newIdx < this.activeQuestions.length) {
      this.currentQuestionIdx = newIdx;
      this.renderQuestion();
      this.renderMatrix();
    }
  }

  restartToFirstQuestion() {
    // Về câu hỏi đầu tiên mà KHÔNG reset hoặc xóa bất kỳ đáp án đã chọn nào
    this.currentQuestionIdx = 0;
    this.renderQuestion();
    this.renderMatrix();
  }

  shuffleQuestions() {
    for (let i = this.activeQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.activeQuestions[i], this.activeQuestions[j]] = [this.activeQuestions[j], this.activeQuestions[i]];
    }
    this.optionOrders = {}; // Re-shuffle option orders on shuffle questions
    this.currentQuestionIdx = 0;
    this.renderQuestion();
    this.renderMatrix();
  }

  showConfirmModal() {
    if (this.confirmModal) {
      this.confirmModal.style.display = 'flex';
    }
  }

  hideConfirmModal() {
    if (this.confirmModal) {
      this.confirmModal.style.display = 'none';
    }
  }

  executeClearHistory() {
    // Xóa TOÀN BỘ lịch sử đã làm trên tất cả các câu hỏi
    this.userAnswers = {};
    this.mistakeIds.clear();
    this.streak = 0;
    
    // Lưu vào LocalStorage
    this.saveAnswers();
    this.saveMistakes();
    this.saveStreak();
    
    // Cập nhật UI
    this.updateBadges();
    this.updateStats();
    this.currentQuestionIdx = 0;
    this.renderQuestion();
    this.renderMatrix();
    this.hideConfirmModal();

    this.showToast('Đã xóa toàn bộ lịch sử các câu đã chọn!');
  }

  showToast(message) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast toast-success';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast && toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3000);
  }

  renderMatrix() {
    this.matrixGrid.innerHTML = '';
    this.activeQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'matrix-btn';
      btn.textContent = (idx + 1).toString();

      if (idx === this.currentQuestionIdx) {
        btn.classList.add('current');
      }

      const ans = this.userAnswers[q.id];
      if (ans !== undefined) {
        if (ans === q.answer) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
        }
      }

      if (this.starredIds.has(q.id)) {
        btn.classList.add('starred');
      }

      btn.addEventListener('click', () => {
        this.currentQuestionIdx = idx;
        this.renderQuestion();
        this.renderMatrix();
      });

      this.matrixGrid.appendChild(btn);
    });
  }

  // --- Flashcard Mode Logic ---
  renderFlashcard() {
    this.flashcardFlipped = false;
    this.flashcardEl.classList.remove('flipped');

    const q = this.getCurrentQuestion();
    if (!q) {
      this.fcQuestion.textContent = 'Không có câu hỏi nào để hiển thị flashcard.';
      this.fcAnswer.textContent = '';
      this.fcExplanation.textContent = '';
      this.fcChapter.textContent = 'Trống';
      this.fcCounter.textContent = '0 / 0';
      return;
    }

    this.fcChapter.textContent = q.chapter;
    this.fcCounter.textContent = `${this.currentQuestionIdx + 1} / ${this.activeQuestions.length}`;
    this.fcQuestion.textContent = q.question;

    const letters = ['A', 'B', 'C', 'D'];
    const correctOpt = q.options[q.answer];
    this.fcAnswer.textContent = `${letters[q.answer]}. ${correctOpt}`;
    this.fcExplanation.textContent = q.explanation || 'Kiến thức cốt lõi theo giáo trình Triết học Mác - Lênin.';

    this.btnFcPrev.disabled = this.currentQuestionIdx === 0;
    this.btnFcNext.disabled = this.currentQuestionIdx === this.activeQuestions.length - 1;
  }

  toggleFlashcardFlip() {
    this.flashcardFlipped = !this.flashcardFlipped;
    if (this.flashcardFlipped) {
      this.flashcardEl.classList.add('flipped');
    } else {
      this.flashcardEl.classList.remove('flipped');
    }
  }

  navigateFlashcard(delta) {
    const newIdx = this.currentQuestionIdx + delta;
    if (newIdx >= 0 && newIdx < this.activeQuestions.length) {
      this.currentQuestionIdx = newIdx;
      this.renderFlashcard();
    }
  }

  // --- Exam Mode Logic ---
  resetExamSetup() {
    this.exam.active = false;
    this.exam.submitted = false;
    if (this.exam.timerInterval) clearInterval(this.exam.timerInterval);

    this.examSetup.style.display = 'block';
    this.examRunning.style.display = 'none';
    this.examResults.style.display = 'none';
  }

  startExam() {
    const activeOptCard = document.querySelector('.exam-option-card.active');
    const qCount = parseInt(activeOptCard.dataset.count, 10);
    const durationMins = parseInt(activeOptCard.dataset.time, 10);

    // Pick random questions from QUIZ_DATA
    const shuffled = [...QUIZ_DATA].sort(() => 0.5 - Math.random());
    this.exam.questions = shuffled.slice(0, Math.min(qCount, shuffled.length));
    this.exam.answers = {};
    this.exam.optionOrders = {};

    // Shuffle option orders for exam questions if shuffleOptions is enabled
    this.exam.questions.forEach((q, qIdx) => {
      const order = [];
      for (let i = 0; i < q.options.length; i++) order.push(i);
      if (this.shuffleOptions) {
        for (let i = order.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [order[i], order[j]] = [order[j], order[i]];
        }
      }
      this.exam.optionOrders[qIdx] = order;
    });

    this.exam.totalTime = durationMins * 60;
    this.exam.timeRemaining = this.exam.totalTime;
    this.exam.active = true;
    this.exam.submitted = false;

    this.examSetup.style.display = 'none';
    this.examResults.style.display = 'none';
    this.examRunning.style.display = 'block';

    this.renderExamQuestions();
    this.startExamTimer();
  }

  startExamTimer() {
    this.updateExamTimerDisplay();
    this.exam.timerInterval = setInterval(() => {
      this.exam.timeRemaining--;
      this.updateExamTimerDisplay();

      if (this.exam.timeRemaining <= 0) {
        clearInterval(this.exam.timerInterval);
        this.submitExam(true);
      }
    }, 1000);
  }

  updateExamTimerDisplay() {
    const mins = Math.floor(this.exam.timeRemaining / 60);
    const secs = this.exam.timeRemaining % 60;
    const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    this.timerText.textContent = formatted;

    if (this.exam.timeRemaining <= 60) {
      this.examTimer.classList.add('warning');
    } else {
      this.examTimer.classList.remove('warning');
    }
  }

  renderExamQuestions() {
    this.examQuestionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    this.exam.questions.forEach((q, qIdx) => {
      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.style.marginBottom = '1.5rem';

      let optionsHtml = '';
      const order = this.exam.optionOrders[qIdx] || [0, 1, 2, 3].slice(0, q.options.length);
      order.forEach((origIdx, displayIdx) => {
        const optText = q.options[origIdx];
        optionsHtml += `
          <button class="option-btn exam-opt-btn" data-qidx="${qIdx}" data-origidx="${origIdx}">
            <span class="opt-prefix">${letters[displayIdx]}</span>
            <span class="opt-text">${optText}</span>
          </button>
        `;
      });

      card.innerHTML = `
        <div class="card-top-bar">
          <span class="badge-chapter">${q.chapter}</span>
          <span class="question-counter">Câu <span>${qIdx + 1}</span> / ${this.exam.questions.length}</span>
        </div>
        <div class="question-text">${q.question}</div>
        <div class="options-list">${optionsHtml}</div>
      `;

      this.examQuestionsContainer.appendChild(card);
    });

    // Attach click events for exam options
    this.examQuestionsContainer.querySelectorAll('.exam-opt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qIdx = parseInt(btn.dataset.qidx, 10);
        const origIdx = parseInt(btn.dataset.origidx, 10);

        // Deselect sibling buttons
        const parentList = btn.closest('.options-list');
        parentList.querySelectorAll('.exam-opt-btn').forEach(b => b.classList.remove('correct', 'active'));
        
        btn.classList.add('correct'); // Highlight selection
        this.exam.answers[qIdx] = origIdx;

        // Update progress count
        const answeredCount = Object.keys(this.exam.answers).length;
        this.examProgress.textContent = `Đã làm: ${answeredCount}/${this.exam.questions.length} câu`;
      });
    });
  }

  submitExam(isAuto = false) {
    if (!isAuto && Object.keys(this.exam.answers).length < this.exam.questions.length) {
      if (!confirm(`Bạn mới làm ${Object.keys(this.exam.answers).length}/${this.exam.questions.length} câu. Bạn có chắc chắn muốn nộp bài?`)) {
        return;
      }
    }

    if (this.exam.timerInterval) clearInterval(this.exam.timerInterval);
    this.exam.submitted = true;
    this.exam.active = false;

    // Calculate score
    let correctCount = 0;
    this.exam.questions.forEach((q, idx) => {
      if (this.exam.answers[idx] === q.answer) {
        correctCount++;
      } else {
        this.mistakeIds.add(q.id);
      }
    });

    this.saveMistakes();
    this.updateBadges();

    const percentage = Math.round((correctCount / this.exam.questions.length) * 100);
    const score10 = ((correctCount / this.exam.questions.length) * 10).toFixed(1);

    // Show results view
    this.examRunning.style.display = 'none';
    this.examResults.style.display = 'block';

    document.getElementById('exam-res-score').textContent = score10;
    document.getElementById('exam-res-correct').textContent = `${correctCount}/${this.exam.questions.length}`;
    document.getElementById('exam-res-percent').textContent = `${percentage}%`;

    const timeSpentSecs = this.exam.totalTime - this.exam.timeRemaining;
    const spentMins = Math.floor(timeSpentSecs / 60);
    const spentSecs = timeSpentSecs % 60;
    document.getElementById('exam-res-time').textContent = `${spentMins}p ${spentSecs}s`;

    if (percentage >= 80) {
      launchConfetti();
    }
  }

  // --- Search Mode Logic ---
  renderSearchResults(query) {
    this.searchResults.innerHTML = '';
    if (!query) {
      this.searchCount.textContent = `Hiển thị toàn bộ ${QUIZ_DATA.length} câu hỏi`;
      this.renderSearchItems(QUIZ_DATA);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const matches = QUIZ_DATA.filter(q => {
      return q.question.toLowerCase().includes(lowerQuery) ||
             q.options.some(o => o.toLowerCase().includes(lowerQuery)) ||
             q.chapter.toLowerCase().includes(lowerQuery);
    });

    this.searchCount.textContent = `Tìm thấy ${matches.length} câu hỏi phù hợp`;
    this.renderSearchItems(matches, lowerQuery);
  }

  renderSearchItems(items, highlightQuery = '') {
    const letters = ['A', 'B', 'C', 'D'];
    items.forEach(q => {
      const card = document.createElement('div');
      card.className = 'search-item-card';

      let qText = q.question;
      if (highlightQuery) {
        const regex = new RegExp(`(${highlightQuery})`, 'gi');
        qText = qText.replace(regex, '<span class="highlight">$1</span>');
      }

      let optionsListHtml = '';
      q.options.forEach((opt, idx) => {
        const isCorrect = idx === q.answer;
        let optText = opt;
        if (highlightQuery) {
          const regex = new RegExp(`(${highlightQuery})`, 'gi');
          optText = optText.replace(regex, '<span class="highlight">$1</span>');
        }

        optionsListHtml += `
          <div style="margin: 0.35rem 0; font-size: 0.9rem; color: ${isCorrect ? 'var(--success)' : 'var(--text-secondary)'}; font-weight: ${isCorrect ? '700' : '400'}; display: flex; align-items: baseline; gap: 0.4rem;">
            <strong>${letters[idx]}.</strong>
            <span>${optText}</span>
            ${isCorrect ? '<span style="color: var(--success); font-weight: 700; margin-left: 0.5rem;">✓ (Đáp án đúng)</span>' : ''}
          </div>
        `;
      });

      card.innerHTML = `
        <div class="search-item-header">
          <span class="badge-chapter">${q.chapter}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">ID: #${q.id}</span>
        </div>
        <div style="font-weight: 600; margin-bottom: 0.75rem; line-height: 1.5;">${qText}</div>
        <div style="margin-bottom: 0.75rem;">${optionsListHtml}</div>
        <div style="font-size: 0.85rem; color: var(--accent-cyan); line-height: 1.5; background: rgba(6, 182, 212, 0.08); padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid rgba(6, 182, 212, 0.2); display: flex; align-items: flex-start; gap: 0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
            <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7Z"></path>
            <path d="M9 21h6"></path>
          </svg>
          <div><strong>Giải thích:</strong> ${q.explanation}</div>
        </div>
      `;

      this.searchResults.appendChild(card);
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.app = new QuizApp();
});
