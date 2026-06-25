// ============================================================
//  MATH APP — script.js
//  Class 9 & 10 Pakistan Board Mathematics PWA
// ============================================================

/* ── DATA ── */
const CLASS9_CHAPTERS = [
  {
    id: 'ch9-1', num: 'باب 1', icon: '▦',
    title: 'میٹرکسز',
    sub: 'Matrices',
    class: 'کلاس 9',
    desc: 'میٹرکس کی تعریف، اقسام، جمع، تفریق اور ضرب',
    topics: ['میٹرکس کی تعریف اور اقسام', 'میٹرکسز کی جمع اور تفریق', 'اسکیلر اور میٹرکس کی ضرب', 'ٹرانسپوز میٹرکس', 'سٹمریک اور اسکیو سٹمریک'],
    formulas: [
      { name: 'میٹرکس کی ترتیب', math: 'A = [aᵢⱼ]ₘₓₙ' },
      { name: 'میٹرکس کی جمع', math: 'A + B = [aᵢⱼ + bᵢⱼ]' },
      { name: 'اسکیلر ضرب', math: 'kA = [k·aᵢⱼ]' },
      { name: 'ٹرانسپوز', math: 'Aᵀ = [aⱼᵢ]' },
    ]
  },
  {
    id: 'ch9-2', num: 'باب 2', icon: '√',
    title: 'اصلی اعداد',
    sub: 'Real Numbers',
    class: 'کلاس 9',
    desc: 'حسابی، جذری اور غیر عقلی اعداد کا مطالعہ',
    topics: ['عقلی اعداد', 'غیر عقلی اعداد', 'اعداد کی درجہ بندی', 'حقیقی اعداد کی خصوصیات', 'مطلق قدر'],
    formulas: [
      { name: 'عقلی عدد', math: 'p/q جہاں q ≠ 0' },
      { name: 'مربع جذر', math: '√(a·b) = √a · √b' },
      { name: 'مطلق قدر', math: '|a| = a if a≥0, -a if a<0' },
    ]
  },
  {
    id: 'ch9-3', num: 'باب 3', icon: 'log',
    title: 'لوگارتھم',
    sub: 'Logarithm',
    class: 'کلاس 9',
    desc: 'لوگارتھم کی بنیادی قواعد اور ان کا استعمال',
    topics: ['لوگارتھم کی تعریف', 'کامن لوگارتھم', 'لوگارتھم کی قوانین', 'اینٹی لوگارتھم', 'لوگارتھم جدول'],
    formulas: [
      { name: 'لوگارتھم کی تعریف', math: 'logₐ N = x ⟺ aˣ = N' },
      { name: 'حاصل ضرب قاعدہ', math: 'log(mn) = log m + log n' },
      { name: 'حاصل تقسیم قاعدہ', math: 'log(m/n) = log m - log n' },
      { name: 'قوت قاعدہ', math: 'log(mⁿ) = n·log m' },
      { name: 'تبدیلی قاعدہ', math: 'logₐ b = log b / log a' },
    ]
  },
  {
    id: 'ch9-4', num: 'باب 4', icon: 'x²',
    title: 'الجبرائی اظہار',
    sub: 'Algebraic Expressions',
    class: 'کلاس 9',
    desc: 'الجبرائی اظہار، توسیع اور تحلیل',
    topics: ['الجبرائی اظہار', 'مشہور یکساں', 'تحلیل عوامل', 'HCF اور LCM', 'الجبرائی کسر'],
    formulas: [
      { name: 'مربع مجموع', math: '(a+b)² = a² + 2ab + b²' },
      { name: 'مربع فرق', math: '(a-b)² = a² - 2ab + b²' },
      { name: 'مربعوں کا فرق', math: 'a² - b² = (a+b)(a-b)' },
      { name: 'مکعب مجموع', math: '(a+b)³ = a³ + 3a²b + 3ab² + b³' },
      { name: 'مکعبوں کا مجموع', math: 'a³ + b³ = (a+b)(a²-ab+b²)' },
    ]
  },
  {
    id: 'ch9-5', num: 'باب 5', icon: '=',
    title: 'خطی معادلات',
    sub: 'Linear Equations',
    class: 'کلاس 9',
    desc: 'دو متغیر والی خطی معادلات کا نظام',
    topics: ['خطی معادلہ', 'حل کے طریقے', 'حذف طریقہ', 'تبدیل طریقہ', 'گراف طریقہ'],
    formulas: [
      { name: 'خطی معادلہ', math: 'ax + by + c = 0' },
      { name: 'حل (کریمر)', math: 'x = D₁/D, y = D₂/D' },
      { name: 'تعین کنندہ', math: 'D = |a₁ b₁; a₂ b₂| = a₁b₂ - a₂b₁' },
    ]
  },
];

const CLASS10_CHAPTERS = [
  {
    id: 'ch10-1', num: 'باب 1', icon: '▦',
    title: 'میٹرکسز و تعین کنندہ',
    sub: 'Matrices & Determinants',
    class: 'کلاس 10',
    desc: 'میٹرکسز کا تعین کنندہ اور الٹا میٹرکس',
    topics: ['تعین کنندہ کی تعریف', '2×2 تعین کنندہ', '3×3 تعین کنندہ', 'الٹا میٹرکس', 'کرامر قاعدہ'],
    formulas: [
      { name: '2×2 تعین کنندہ', math: 'det(A) = ad - bc' },
      { name: 'الٹا میٹرکس', math: 'A⁻¹ = adj(A) / det(A)' },
      { name: 'کرامر قاعدہ', math: 'x = Dₓ/D, y = D_y/D' },
    ]
  },
  {
    id: 'ch10-2', num: 'باب 2', icon: '01',
    title: 'ثنائی نظام',
    sub: 'Binary System',
    class: 'کلاس 10',
    desc: 'عشری اور ثنائی نظام اعداد کے درمیان تبدیلی',
    topics: ['ثنائی نظام', 'عشری سے ثنائی تبدیلی', 'ثنائی سے عشری تبدیلی', 'ثنائی جمع اور تفریق', 'آکٹل اور ہیکساڈیسیمل'],
    formulas: [
      { name: 'ثنائی سے عشری', math: '(1011)₂ = 1×2³+0×2²+1×2¹+1×2⁰' },
      { name: 'عشری سے ثنائی', math: 'مسلسل 2 سے تقسیم کریں' },
    ]
  },
  {
    id: 'ch10-3', num: 'باب 3', icon: '∝',
    title: 'تناسب و تناسبات',
    sub: 'Variations',
    class: 'کلاس 10',
    desc: 'براہ راست، الٹا اور مشترک تناسب',
    topics: ['براہ راست تناسب', 'الٹا تناسب', 'مشترک تناسب', 'k کا تعین', 'متناسب مقدار'],
    formulas: [
      { name: 'براہ راست تناسب', math: 'y ∝ x ⟹ y = kx' },
      { name: 'الٹا تناسب', math: 'y ∝ 1/x ⟹ y = k/x' },
      { name: 'مشترک تناسب', math: 'z ∝ xy ⟹ z = kxy' },
    ]
  },
  {
    id: 'ch10-4', num: 'باب 4', icon: 'sin',
    title: 'مثلثیات',
    sub: 'Trigonometry',
    class: 'کلاس 10',
    desc: 'مثلثیاتی تناسبات، زاویے اور یکساں',
    topics: ['مثلثیاتی تناسبات', 'خاص زاویوں کی قدریں', 'باہمی تناسبات', 'مثلثیاتی یکساں', 'بلندی و گہرائی'],
    formulas: [
      { name: 'فیثاغورث', math: 'sin²θ + cos²θ = 1' },
      { name: 'tan قاعدہ', math: 'tan θ = sin θ / cos θ' },
      { name: 'sec قاعدہ', math: '1 + tan²θ = sec²θ' },
      { name: 'cosec قاعدہ', math: '1 + cot²θ = cosec²θ' },
      { name: 'دوگنا زاویہ', math: 'sin 2θ = 2 sin θ cos θ' },
      { name: 'cos دوگنا', math: 'cos 2θ = cos²θ - sin²θ' },
    ]
  },
  {
    id: 'ch10-5', num: 'باب 5', icon: '⊕',
    title: 'کوآرڈینیٹ ہندسہ',
    sub: 'Coordinate Geometry',
    class: 'کلاس 10',
    desc: 'خط، فاصلہ، نقطہ وسط اور ڈھلوان',
    topics: ['کارٹیزی نظام', 'دو نقاط کا فاصلہ', 'نقطہ وسط', 'ڈھلوان', 'خط کی معادلہ'],
    formulas: [
      { name: 'فاصلہ فارمولہ', math: 'd = √[(x₂-x₁)² + (y₂-y₁)²]' },
      { name: 'نقطہ وسط', math: 'M = ((x₁+x₂)/2 , (y₁+y₂)/2)' },
      { name: 'ڈھلوان', math: 'm = (y₂-y₁)/(x₂-x₁)' },
      { name: 'خط کی معادلہ', math: 'y - y₁ = m(x - x₁)' },
    ]
  },
];

const FORMULAS_DATA = {
  algebra: [
    { name: 'مربع مجموع', math: '(a+b)² = a² + 2ab + b²' },
    { name: 'مربع فرق', math: '(a-b)² = a² - 2ab + b²' },
    { name: 'مربعوں کا فرق', math: 'a² - b² = (a+b)(a-b)' },
    { name: 'مکعب مجموع', math: '(a+b)³ = a³+3a²b+3ab²+b³' },
    { name: 'مکعب فرق', math: '(a-b)³ = a³-3a²b+3ab²-b³' },
    { name: 'مکعبوں کا مجموع', math: 'a³+b³ = (a+b)(a²-ab+b²)' },
    { name: 'مکعبوں کا فرق', math: 'a³-b³ = (a-b)(a²+ab+b²)' },
    { name: 'ربیعی فارمولہ', math: 'x = (-b ± √(b²-4ac)) / 2a' },
  ],
  geometry: [
    { name: 'دائرہ کا رقبہ', math: 'A = πr²' },
    { name: 'دائرہ کا محیط', math: 'C = 2πr' },
    { name: 'مربع کا رقبہ', math: 'A = s²' },
    { name: 'مستطیل کا رقبہ', math: 'A = l × w' },
    { name: 'مثلث کا رقبہ', math: 'A = ½ × b × h' },
    { name: 'متوازی اضلاع', math: 'A = b × h' },
    { name: 'فیثاغورث', math: 'a² + b² = c²' },
    { name: 'کرہ کا حجم', math: 'V = (4/3)πr³' },
    { name: 'بیلنڈر کا حجم', math: 'V = πr²h' },
  ],
  trig: [
    { name: 'بنیادی یکساں', math: 'sin²θ + cos²θ = 1' },
    { name: 'tan یکساں', math: '1 + tan²θ = sec²θ' },
    { name: 'cot یکساں', math: '1 + cot²θ = cosec²θ' },
    { name: 'sin دوگنا', math: 'sin 2θ = 2 sinθ cosθ' },
    { name: 'cos دوگنا', math: 'cos 2θ = cos²θ - sin²θ' },
    { name: 'tan دوگنا', math: 'tan 2θ = 2tanθ/(1-tan²θ)' },
    { name: 'sin مجموع', math: 'sin(A+B) = sinA cosB + cosA sinB' },
    { name: 'cos مجموع', math: 'cos(A+B) = cosA cosB - sinA sinB' },
  ],
  log: [
    { name: 'لوگارتھم تعریف', math: 'logₐ N = x ⟺ aˣ = N' },
    { name: 'حاصل ضرب', math: 'log(mn) = log m + log n' },
    { name: 'حاصل تقسیم', math: 'log(m/n) = log m - log n' },
    { name: 'قوت', math: 'log(mⁿ) = n · log m' },
    { name: 'تبدیلی', math: 'logₐ b = log b / log a' },
    { name: 'log 1', math: 'log₁₀ 1 = 0' },
    { name: 'log 10', math: 'log₁₀ 10 = 1' },
    { name: 'ln e', math: 'ln e = 1' },
  ]
};

const QUIZ_QUESTIONS = {
  9: [
    { q: 'ایک میٹرکس A = [aᵢⱼ]₂ₓ₃ میں کتنے عناصر ہیں؟', opts: ['4', '6', '5', '8'], ans: 1 },
    { q: 'log₁₀ 100 = ?', opts: ['1', '10', '2', '0'], ans: 2 },
    { q: '(a+b)² کا توسیع کیا ہے؟', opts: ['a²+b²', 'a²+2ab+b²', 'a²-2ab+b²', '2a+2b'], ans: 1 },
    { q: '√2 کس قسم کا عدد ہے؟', opts: ['عقلی', 'صحیح', 'غیر عقلی', 'منفی'], ans: 2 },
    { q: 'log(mn) برابر ہے؟', opts: ['log m × log n', 'log m + log n', 'log m - log n', 'log m / log n'], ans: 1 },
    { q: 'a² - b² برابر ہے؟', opts: ['(a-b)²', '(a+b)(a-b)', '(a-b)(a-b)', '(a+b)²'], ans: 1 },
    { q: 'میٹرکس A کا ٹرانسپوز کیا ہوتا ہے؟', opts: ['Aᵀ', 'A⁻¹', 'kA', 'A+B'], ans: 0 },
    { q: 'خطی معادلہ ax + by + c = 0 میں کتنے متغیر ہیں؟', opts: ['1', '3', '2', '4'], ans: 2 },
  ],
  10: [
    { q: 'sin²θ + cos²θ = ?', opts: ['0', '2', '1', 'sinθ'], ans: 2 },
    { q: 'دو نقاط (3,4) اور (0,0) کا فاصلہ کیا ہے؟', opts: ['3', '4', '7', '5'], ans: 3 },
    { q: 'y ∝ x کا مطلب ہے؟', opts: ['y = k/x', 'y = k+x', 'y = kx', 'y = kx²'], ans: 2 },
    { q: '(1010)₂ کو عشری میں تبدیل کریں؟', opts: ['8', '10', '12', '14'], ans: 1 },
    { q: 'det(A) = ad - bc کس سائز کے میٹرکس کے لیے ہے؟', opts: ['3×3', '1×1', '2×2', '4×4'], ans: 2 },
    { q: 'sin 2θ = ?', opts: ['2sin²θ', '2sinθcosθ', 'sin²θ-cos²θ', '2cos²θ'], ans: 1 },
    { q: 'نقطہ وسط فارمولہ کیا ہے؟', opts: ['(x₁+y₁)/2', '((x₁+x₂)/2,(y₁+y₂)/2)', '(x₂-x₁, y₂-y₁)', 'x₁·x₂'], ans: 1 },
    { q: '1 + tan²θ = ?', opts: ['cosec²θ', 'cot²θ', 'sec²θ', 'cos²θ'], ans: 2 },
  ]
};

/* ── STATE ── */
let currentPage = 'home';
let calcExpr = '';
let quizState = { class: null, questions: [], current: 0, score: 0, answered: false };

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  // Splash
  setTimeout(() => {
    document.getElementById('splash').style.opacity = '0';
    document.getElementById('splash').style.transition = 'opacity 0.5s';
    setTimeout(() => {
      document.getElementById('splash').remove();
      document.getElementById('app').classList.remove('hidden');
    }, 500);
  }, 2200);

  buildChapterGrids();
  setupNav();
  setupSidebar();
  setupTheme();
  setupCalculator();
  setupFormulas();
  setupQuiz();
  setupOffline();
  registerSW();
});

/* ── BUILD CHAPTER GRIDS ── */
function buildChapterGrids() {
  const g9 = document.getElementById('class9Grid');
  const g10 = document.getElementById('class10Grid');
  CLASS9_CHAPTERS.forEach(ch => g9.appendChild(makeChapterCard(ch)));
  CLASS10_CHAPTERS.forEach(ch => g10.appendChild(makeChapterCard(ch)));
}

function makeChapterCard(ch) {
  const div = document.createElement('div');
  div.className = 'chapter-card';
  div.innerHTML = `
    <div class="ch-num">${ch.sub}</div>
    <div class="ch-title">${ch.title}</div>
    <div class="ch-sub">${ch.num}</div>
    <span class="ch-icon">${ch.icon}</span>
  `;
  div.addEventListener('click', () => showChapter(ch));
  return div;
}

/* ── SHOW CHAPTER ── */
function showChapter(ch) {
  const html = `
    <div class="chapter-hero">
      <div class="class-tag">${ch.class} — ${ch.sub}</div>
      <h2>${ch.title}</h2>
      <p>${ch.desc}</p>
    </div>

    <div class="content-block">
      <h3>📚 موضوعات</h3>
      <ul>${ch.topics.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>

    <div class="content-block">
      <h3>📐 اہم فارمولے</h3>
      ${ch.formulas.map(f => `
        <p>${f.name}</p>
        <div class="formula-box">${f.math}</div>
      `).join('')}
    </div>

    <div class="content-block">
      <h3>💡 یاد رکھیں</h3>
      <p>اس باب کے تمام فارمولے ذہن نشین کریں اور روزانہ مشق کریں۔ امتحان میں ہر سوال کو مرحلہ وار حل کریں۔</p>
    </div>
  `;

  document.getElementById('chapterContent').innerHTML = `
    <div class="page-header">
      <button class="back-btn" id="chapterBack">← واپس</button>
      <h2>${ch.title}</h2>
    </div>
    ${html}
  `;
  document.getElementById('chapterBack').addEventListener('click', () => navigate('home'));
  navigate('chapter');
}

/* ── NAVIGATION ── */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pageMap = {
    home: 'page-home',
    chapter: 'page-chapter',
    calculator: 'page-calculator',
    formulas: 'page-formulas',
    quiz: 'page-quiz',
  };
  const target = pageMap[page] || 'page-home';
  const el = document.getElementById(target);
  if (el) el.classList.add('active');
  currentPage = page;
  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // update sidebar active
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
}

function setupNav() {
  // sidebar nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      const chId = page;
      const allCh = [...CLASS9_CHAPTERS, ...CLASS10_CHAPTERS];
      const ch = allCh.find(c => c.id === chId);
      if (ch) showChapter(ch);
      else navigate(page);
    });
  });

  // tool cards
  document.querySelectorAll('.tool-card').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page || 'home'));
  });
}

/* ── SIDEBAR ── */
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  document.getElementById('menuBtn').addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });
  overlay.addEventListener('click', closeSidebar);
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
}

/* ── THEME ── */
function setupTheme() {
  const saved = localStorage.getItem('math-theme') || 'dark';
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
  document.getElementById('themeBtn').addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
    localStorage.setItem('math-theme', isLight ? 'dark' : 'light');
  });
}

/* ── CALCULATOR ── */
function setupCalculator() {
  const expr = document.getElementById('calcExpr');
  const result = document.getElementById('calcResult');

  document.querySelectorAll('.calc-btn[data-val]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (calcExpr === '0' && !isNaN(btn.dataset.val) && btn.dataset.val !== '.') {
        calcExpr = btn.dataset.val;
      } else {
        calcExpr += btn.dataset.val;
      }
      expr.textContent = calcExpr || '0';
      // live preview
      try {
        const r = evalSafe(calcExpr);
        if (r !== undefined) result.textContent = '= ' + (+r.toFixed(8));
        else result.textContent = '';
      } catch { result.textContent = ''; }
    });
  });

  document.getElementById('calcClear').addEventListener('click', () => {
    calcExpr = '';
    expr.textContent = '0';
    result.textContent = '';
  });

  document.getElementById('calcDel').addEventListener('click', () => {
    calcExpr = calcExpr.slice(0, -1);
    expr.textContent = calcExpr || '0';
  });

  document.getElementById('calcEq').addEventListener('click', () => {
    try {
      const r = evalSafe(calcExpr);
      result.textContent = '= ' + r;
      calcExpr = String(r);
      expr.textContent = calcExpr;
    } catch {
      result.textContent = 'خطا — دوبارہ کوشش کریں';
    }
  });
}

function evalSafe(expr) {
  // Replace math functions
  const safe = expr
    .replace(/sin\(/g, 'Math.sin(Math.PI/180*')
    .replace(/cos\(/g, 'Math.cos(Math.PI/180*')
    .replace(/tan\(/g, 'Math.tan(Math.PI/180*')
    .replace(/sqrt\(/g, 'Math.sqrt(')
    .replace(/log\(/g, 'Math.log10(')
    .replace(/Math\.PI/g, 'Math.PI');
  // eslint-disable-next-line no-new-func
  return Function('"use strict"; return (' + safe + ')')();
}

/* ── FORMULAS ── */
function setupFormulas() {
  renderFormulaTab('algebra');
  document.querySelectorAll('.ftab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFormulaTab(tab.dataset.tab);
    });
  });
}

function renderFormulaTab(key) {
  const data = FORMULAS_DATA[key] || [];
  const html = `<div class="formula-list">${data.map(f => `
    <div class="formula-item">
      <div class="formula-name">${f.name}</div>
      <div class="formula-math">${f.math}</div>
    </div>
  `).join('')}</div>`;
  document.getElementById('formulaContent').innerHTML = html;
}

/* ── QUIZ ── */
function setupQuiz() {
  renderQuizStart();
}

function renderQuizStart() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = `
    <div class="quiz-start">
      <h3>🎯 ریاضی کوئز</h3>
      <p>اپنی کلاس منتخب کریں اور کوئز شروع کریں</p>
      <div class="class-select">
        <button class="class-btn" id="q9btn">کلاس 9</button>
        <button class="class-btn" id="q10btn">کلاس 10</button>
      </div>
      <button class="start-quiz-btn" id="startQuiz">کوئز شروع کریں</button>
    </div>
  `;
  let selectedClass = null;
  document.getElementById('q9btn').addEventListener('click', () => {
    selectedClass = 9;
    document.getElementById('q9btn').classList.add('selected');
    document.getElementById('q10btn').classList.remove('selected');
  });
  document.getElementById('q10btn').addEventListener('click', () => {
    selectedClass = 10;
    document.getElementById('q10btn').classList.add('selected');
    document.getElementById('q9btn').classList.remove('selected');
  });
  document.getElementById('startQuiz').addEventListener('click', () => {
    if (!selectedClass) {
      document.querySelector('.class-select').style.outline = '2px solid var(--accent)';
      return;
    }
    startQuiz(selectedClass);
  });
}

function startQuiz(cls) {
  quizState = {
    class: cls,
    questions: [...QUIZ_QUESTIONS[cls]].sort(() => Math.random() - 0.5),
    current: 0, score: 0, answered: false
  };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { questions, current, score } = quizState;
  if (current >= questions.length) { renderQuizResult(); return; }
  const q = questions[current];
  const pct = (current / questions.length * 100).toFixed(0);

  document.getElementById('quizContainer').innerHTML = `
    <div class="quiz-card">
      <div class="quiz-progress">
        <div class="quiz-num">${current + 1}/${questions.length}</div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="quiz-num">🏆 ${score}</div>
      </div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((o, i) => `
          <button class="quiz-opt" data-i="${i}">${o}</button>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      if (quizState.answered) return;
      quizState.answered = true;
      const chosen = +btn.dataset.i;
      const correct = q.ans;
      document.querySelectorAll('.quiz-opt').forEach(b => {
        if (+b.dataset.i === correct) b.classList.add('correct');
        else if (+b.dataset.i === chosen) b.classList.add('wrong');
      });
      if (chosen === correct) quizState.score++;
      setTimeout(() => {
        quizState.current++;
        quizState.answered = false;
        renderQuizQuestion();
      }, 1200);
    });
  });
}

function renderQuizResult() {
  const { score, questions } = quizState;
  const pct = Math.round(score / questions.length * 100);
  const msg = pct >= 80 ? '🎉 شاندار! آپ نے بہترین کارکردگی دکھائی!' :
               pct >= 60 ? '👍 اچھا! مزید مشق کریں' : '📚 مزید پڑھنے کی ضرورت ہے';
  document.getElementById('quizContainer').innerHTML = `
    <div class="quiz-result">
      <div class="result-score">${score}/${questions.length}</div>
      <div style="font-size:1.5rem;margin-bottom:8px">${pct}%</div>
      <div class="result-msg">${msg}</div>
  
