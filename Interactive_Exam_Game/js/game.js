const readingScreens = [
    { 
        type: 'reading_passage', 
        id: 'r1', 
        title: 'Crayons 🖍️', 
        img: 'assets/images/crayons.png',
        sentences: [
            { en: "Crayons were invented in 1903.", ar: "تم اختراع الألوان الشمعية في عام 1903.", pr: "كرايونز وير إنفينتيد إن ناينتين أو ثري" },
            { en: "The first box only had eight colors: black, brown, blue, red, purple, orange, yellow, and green.", ar: "العلبة الأولى كانت تحتوي على ثمانية ألوان فقط.", pr: "ذا فيرست بوكس أونلي هاد إيت كلورز: بلاك، براون، بلو، ريد، بيربل، أورانج، ييلو، أند جرين" },
            { en: "It cost five cents!", ar: "كان سعرها خمسة سنتات!", pr: "إت كوست فايف سينتس" },
            { en: "Today, you can get different kinds of crayons:", ar: "اليوم، يمكنك الحصول على أنواع مختلفة من الألوان الشمعية:", pr: "توداي، يو كان جيت ديفرينت كايندز أوف كرايونز" },
            { en: "crayons that you can see in the dark,", ar: "ألوان شمعية يمكنك رؤيتها في الظلام،", pr: "كرايونز ذات يو كان سي إن ذا دارك" },
            { en: "crayons that smell like fruit,", ar: "ألوان شمعية برائحة الفواكه،", pr: "كرايونز ذات سميل لايك فروت" },
            { en: "and crayons that change colors.", ar: "وألوان شمعية تغير لونها.", pr: "أند كرايونز ذات تشينج كلورز" },
            { en: "There are crayons that you can use to write on a wall, and then you can wash them off!", ar: "هناك ألوان شمعية يمكنك استخدامها للكتابة على الحائط، ثم يمكنك مسحها!", pr: "ذير آر كرايونز ذات يو كان يوز تو رايت أون أ وول، أند ذين يو كان ووش ذيم أوف" },
            { en: "Which is your favorite kind?", ar: "ما هو نوعك المفضل؟", pr: "ويتش إز يور فيفوريت كايند؟" }
        ],
        words: [
            { en: 'inventor', ar: 'مخترع', pr: 'إنفينتور', img: 'assets/images/inventor.png' },
            { en: 'crayons', ar: 'ألوان شمعية', pr: 'كرايونز', img: 'assets/images/crayons.png' },
            { en: 'dark', ar: 'ظلام', pr: 'دارك', icon: '🌙' },
            { en: 'wash', ar: 'يغسل', pr: 'ووش', icon: '🧼' }
        ]
    },
    { 
        type: 'reading_passage', 
        id: 'r2', 
        title: 'The Toaster 🍞', 
        img: 'assets/images/toaster.png',
        sentences: [
            { en: "Toast with butter is delicious. Yum!", ar: "الخبز المحمص مع الزبدة لذيذ!", pr: "توست ويث باتر إز ديليشوس. يام!" },
            { en: "The modern toaster was invented in 1926.", ar: "تم اختراع محمصة الخبز الحديثة في عام 1926.", pr: "ذا موديرن توستر واز إنفينتيد إن ناينتين توينتي سكس" },
            { en: "It heated both sides of the bread and then popped it out.", ar: "كانت تسخن جانبي الخبز ثم تُخرجه.", pr: "إت هيتيد بوث سايدز أوف ذا بريد أند ذين بوبد إت أوت" },
            { en: "The toast was ready to eat!", ar: "كان الخبز المحمص جاهزاً للأكل!", pr: "ذا توست واز ريدي تو إيت" },
            { en: "Before the invention of the toaster, people heated one side of the bread and then turned it over to heat the other side.", ar: "قبل اختراع المحمصة، كان الناس يسخنون جانباً واحداً من الخبز ثم يقلبونه لتسخين الجانب الآخر.", pr: "بيفور ذا إنفينشون أوف ذا توستر، بيبل هيتيد وان سايد أوف ذا بريد أند ذين تيرند إت أوفر تو هيت ذا أذر سايد" },
            { en: "The bread sometimes got burnt!", ar: "كان الخبز يحترق أحياناً!", pr: "ذا بريد صمتيمز جوت بيرنت" }
        ],
        words: [
            { en: 'toaster', ar: 'محمصة خبز', pr: 'توستر', img: 'assets/images/toaster.png' },
            { en: 'heat', ar: 'حرارة / يُسخّن', pr: 'هيت', img: 'assets/images/heat.png' },
            { en: 'cotton candy', ar: 'غزل البنات', pr: 'كوتون كاندي', img: 'assets/images/cotton_candy.png' },
            { en: 'chewing gum', ar: 'علكة', pr: 'تشوينج جام', img: 'assets/images/chewing_gum.png' },
            { en: 'telescope', ar: 'تلسكوب (مرقاب)', pr: 'تلسكوب', img: 'assets/images/telescope.png' },
            { en: 'printing press', ar: 'آلة طباعة', pr: 'برينتينج بريس', img: 'assets/images/printing_press.png' }
        ]
    }
];

const screensData = [
    // --- Bubble Screens (with Images/Icons) ---
    { type: 'bubble_pop', id: 'b1', sentence: "The _ees give us honey.", trans: "النحل (بييز) يعطينا العسل.", correct: "b", wrong: ["v", "f"], icon: '🐝' },
    { type: 'bubble_pop', id: 'b2', sentence: "Tala saw a dangerous _iper.", trans: "تالا رأت أفعى (فايبر) خطيرة.", correct: "v", wrong: ["b", "f"], icon: '🐍' },
    { type: 'bubble_pop', id: 'b3', sentence: "The chef prepared _abulous food.", trans: "الطاهي أعد طعاماً رائعاً (فابيولاس).", correct: "f", wrong: ["v", "b"], icon: '👨‍🍳' },
    { type: 'bubble_pop', id: 'b4', sentence: "I can put out a _ire.", trans: "أستطيع إخماد حريق (فاير).", correct: "f", wrong: ["b", "v"], icon: '🚒' },
    { type: 'bubble_pop', id: 'b5', sentence: "I'm a _ery brave hero.", trans: "أنا بطل شجاع جداً (فيري).", correct: "v", wrong: ["f", "b"], icon: '🦸' },
    { type: 'bubble_pop', id: 'b6', sentence: "The _armer plants seeds.", trans: "المزارع (فارمر) يزرع البذور.", correct: "f", wrong: ["v", "b"], icon: '🧑‍🌾' },
    { type: 'bubble_pop', id: 'b7', sentence: "I lost my red _all.", trans: "أضعت كرتي الحمراء (بول).", correct: "b", wrong: ["v", "f"], icon: '🏐' },
    { type: 'bubble_pop', id: 'b8', sentence: "Can you _ix the car?", trans: "هل يمكنك إصلاح (فيكس) السيارة؟", correct: "f", wrong: ["v", "b"], icon: '🛠️' },
    { type: 'bubble_pop', id: 'b9', sentence: "The _et helped my dog.", trans: "الطبيب البيطري (فيت) ساعد كلبي.", correct: "v", wrong: ["b", "f"], icon: '🧑‍⚕️' },
    { type: 'bubble_pop', id: 'b10', sentence: "The _oaster is hot.", trans: "المحمصة (توستر) ساخنة.", correct: "t", wrong: ["b", "v"], img: 'assets/images/toaster.png' },

    // --- Maze Screens ---
    { type: 'maze', id: 'm1', question: "What is the superlative form of 'smart'?", trans: "الـ Superlative من كلمة (smart)؟", correct: "smartest", wrong: ["smarter", "smart"], icon: '🧠' },
    { type: 'maze', id: 'm2', question: "What is the superlative form of 'heavy'?", trans: "الـ Superlative من كلمة (heavy)؟", correct: "heaviest", wrong: ["heavier", "heavyest"], icon: '🐘' },
    { type: 'maze', id: 'm3', question: "What is the opposite of 'dark'?", trans: "ما هو عكس كلمة (dark) ظلام؟", correct: "light", wrong: ["black", "night"], icon: '🌙' },
    { type: 'maze', id: 'm4', question: "What is the past tense of 'invent'?", trans: "ما هو الماضي من كلمة (invent) يخترع؟", correct: "invented", wrong: ["invents", "inventing"], icon: '💡' },
    { type: 'maze', id: 'm5', question: "What is the plural of 'bee'?", trans: "ما هو جمع كلمة (bee) نحلة؟", correct: "bees", wrong: ["beees", "beez"], icon: '🐝' },

    // --- Sentence Builder Screens ---
    { type: 'sentence_builder', id: 's1', words: [{w: "you", t: "يو"}, {w: "can", t: "كان"}, {w: "get", t: "جيت"}, {w: "crayons", t: "كرايونز"}], img: 'assets/images/crayons.png' },
    { type: 'sentence_builder', id: 's2', words: [{w: "I", t: "آي"}, {w: "use", t: "يوز"}, {w: "crayons", t: "كرايونز"}, {w: "to", t: "تو"}, {w: "draw", t: "درو"}], img: 'assets/images/crayons.png' },
    { type: 'sentence_builder', id: 's3', words: [{w: "the", t: "ذا"}, {w: "toaster", t: "توستر"}, {w: "is", t: "إز"}, {w: "very", t: "فيري"}, {w: "hot", t: "هوت"}], img: 'assets/images/toaster.png' },
    { type: 'sentence_builder', id: 's4', words: [{w: "a", t: "أ"}, {w: "vet", t: "فيت"}, {w: "helps", t: "هيلبس"}, {w: "sick", t: "سيك"}, {w: "animals", t: "أنيمالز"}], icon: '🧑‍⚕️' },
    { type: 'sentence_builder', id: 's5', words: [{w: "toast", t: "توست"}, {w: "with", t: "ويث"}, {w: "butter", t: "باتر"}, {w: "is", t: "إز"}, {w: "delicious", t: "ديليشوس"}], img: 'assets/images/toaster.png' },
    { type: 'sentence_builder', id: 's6', words: [{w: "I", t: "آي"}, {w: "like", t: "لايك"}, {w: "cotton", t: "كوتون"}, {w: "candy", t: "كاندي"}], img: 'assets/images/cotton_candy.png' },

    // --- Spelling Tiles ---
    { type: 'spelling_tiles', id: 'sp1', word: 'ball', trans: 'بول (كرة)', icon: '🏐' },
    { type: 'spelling_tiles', id: 'sp2', word: 'vet', trans: 'فيت (طبيب بيطري)', icon: '🧑‍⚕️' },
    { type: 'spelling_tiles', id: 'sp3', word: 'fire', trans: 'فاير (نار)', icon: '🔥' },
    { type: 'spelling_tiles', id: 'sp4', word: 'wash', trans: 'ووش (يغسل)', icon: '🧼' },
    { type: 'spelling_tiles', id: 'sp5', word: 'dark', trans: 'دارك (ظلام)', icon: '🌙' },
    { type: 'spelling_tiles', id: 'sp6', word: 'heat', trans: 'هيت (حرارة)', img: 'assets/images/heat.png' },
    
    // --- Pop It Spelling ---
    { type: 'pop_it_spelling', id: 'pop1', word: 'inventor', trans: 'مخترع (إنفينتور)', img: 'assets/images/inventor.png' },
    { type: 'pop_it_spelling', id: 'pop2', word: 'toaster', trans: 'محمصة (توستر)', img: 'assets/images/toaster.png' },
    { type: 'pop_it_spelling', id: 'pop3', word: 'crayons', trans: 'ألوان شمعية (كرايونز)', img: 'assets/images/crayons.png' },
    { type: 'pop_it_spelling', id: 'pop4', word: 'cotton', trans: 'غزل البنات (كوتون)', img: 'assets/images/cotton_candy.png' },
    { type: 'pop_it_spelling', id: 'pop5', word: 'press', trans: 'آلة طباعة (بريس)', img: 'assets/images/printing_press.png' },
    { type: 'pop_it_spelling', id: 'pop6', word: 'telescope', trans: 'تلسكوب (تلسكوب)', img: 'assets/images/telescope.png' },

    // --- Word Blocks (المكعبات الدوارة) ---
    { type: 'word_blocks', id: 'wb1', word: 'heat', trans: 'حرارة (هيت)', img: 'assets/images/heat.png' },
    { type: 'word_blocks', id: 'wb2', word: 'dark', trans: 'ظلام (دارك)', icon: '🌙' },
    { type: 'word_blocks', id: 'wb3', word: 'wash', trans: 'يغسل (ووش)', icon: '🧼' },
    { type: 'word_blocks', id: 'wb4', word: 'vet', trans: 'طبيب بيطري (فيت)', icon: '🧑‍⚕️' },
    { type: 'word_blocks', id: 'wb5', word: 'bee', trans: 'نحلة (بي)', icon: '🐝' },
    { type: 'word_blocks', id: 'wb6', word: 'van', trans: 'شاحنة (فان)', icon: '🚐' },
    { type: 'word_blocks', id: 'wb7', word: 'fix', trans: 'يصلح (فيكس)', icon: '🛠️' },
    { type: 'word_blocks', id: 'wb8', word: 'toast', trans: 'خبز محمص (توست)', img: 'assets/images/toaster.png' },

    // --- Word Wheel (عجلة الكلمات) ---
    { type: 'word_wheel', id: 'ww1', prefixOptions: ['b', 'v', 'f', 'p', 'm'], correctPrefix: 'v', suffix: 'an', fullWord: 'van', trans: 'شاحنة (فان)', icon: '🚐' },
    { type: 'word_wheel', id: 'ww2', prefixOptions: ['f', 'b', 'v', 's', 't'], correctPrefix: 'b', suffix: 'all', fullWord: 'ball', trans: 'كرة (بول)', icon: '🏐' },
    { type: 'word_wheel', id: 'ww3', prefixOptions: ['v', 'f', 'b', 'c', 'h'], correctPrefix: 'f', suffix: 'ire', fullWord: 'fire', trans: 'نار (فاير)', icon: '🔥' },
    { type: 'word_wheel', id: 'ww4', prefixOptions: ['b', 'v', 'f', 'r', 'l'], correctPrefix: 'v', suffix: 'et', fullWord: 'vet', trans: 'بيطري (فيت)', icon: '🧑‍⚕️' },
    { type: 'word_wheel', id: 'ww5', prefixOptions: ['f', 'v', 'b', 's', 'm'], correctPrefix: 'f', suffix: 'ix', fullWord: 'fix', trans: 'يصلح (فيكس)', icon: '🛠️' },
    { type: 'word_wheel', id: 'ww6', prefixOptions: ['b', 'v', 'f', 't', 'p'], correctPrefix: 'b', suffix: 'ee', fullWord: 'bee', trans: 'نحلة (بي)', icon: '🐝' },
    { type: 'word_wheel', id: 'ww7', prefixOptions: ['b', 'v', 'f', 'd', 'p'], correctPrefix: 'b', suffix: 'ounce', fullWord: 'bounce', trans: 'يرتد (باونس)', icon: '🏀' },
    { type: 'word_wheel', id: 'ww8', prefixOptions: ['f', 'v', 'b', 'c', 't'], correctPrefix: 'f', suffix: 'armer', fullWord: 'farmer', trans: 'مزارع (فارمر)', icon: '🧑‍🌾' },

    // --- True / False ---
    { type: 'true_false', id: 'tf1', text: "Crayons were invented in 2020.", trans: "تم اختراع الألوان الشمعية عام 2020.", answer: false, img: 'assets/images/crayons.png' },
    { type: 'true_false', id: 'tf2', text: "The first crayon box had 8 colors.", trans: "أول علبة ألوان شمعية كانت تحتوي على 8 ألوان.", answer: true, img: 'assets/images/crayons.png' },
    { type: 'true_false', id: 'tf3', text: "A toaster heats both sides of the bread.", trans: "المحمصة تسخن جانبي الخبز.", answer: true, img: 'assets/images/toaster.png' },
    { type: 'true_false', id: 'tf4', text: "Before the toaster, people heated one side at a time.", trans: "قبل المحمصة، كان الناس يسخنون جانباً واحداً في كل مرة.", answer: true, img: 'assets/images/toaster.png' },

    // --- Circle Sorting (عجلة الفرز) ---
    { type: 'circle_sorting', id: 'cs1', centerText: 'B b', correct: ['ball', 'bee', 'bounce', 'boy'], wrong: ['van', 'fire'], trans: 'استخرج الكلمات التي تبدأ بحرف B' },
    { type: 'circle_sorting', id: 'cs2', centerText: 'V v', correct: ['van', 'vet', 'viper', 'very'], wrong: ['fix', 'bee'], trans: 'استخرج الكلمات التي تبدأ بحرف V' },
    { type: 'circle_sorting', id: 'cs3', centerText: 'F f', correct: ['fire', 'fix', 'farmer', 'food'], wrong: ['ball', 'vet'], trans: 'استخرج الكلمات التي تبدأ بحرف F' },

    // --- Window Wheel (عجلة النافذة السحرية) ---
    { type: 'window_wheel', id: 'win1', centerText: 'Vv', targetWord: 'van', allWords: ['ball', 'bee', 'van', 'fire', 'fix'], icon: '🚐', trans: 'أدر النافذة لتجد الكلمة المطابقة للصورة' },
    { type: 'window_wheel', id: 'win2', centerText: 'Ff', targetWord: 'fire', allWords: ['van', 'fire', 'ball', 'vet', 'bounce'], icon: '🔥', trans: 'أدر النافذة لتجد الكلمة المطابقة للصورة' },
    { type: 'window_wheel', id: 'win3', centerText: 'Bb', targetWord: 'bee', allWords: ['fix', 'vet', 'van', 'bee', 'fire'], icon: '🐝', trans: 'أدر النافذة لتجد الكلمة المطابقة للصورة' },

    // --- Drag & Drop (Nouns & Verbs) - Page 59 ---
    { 
        type: 'drag_drop', id: 'dd1', title: "Nouns & Verbs (Page 59)", trans: "صنف الكلمات إلى اسم (Noun) وفعل (Verb)", icon: '🗂️',
        baskets: [{ id: 'noun', title: 'Noun (اسم)' }, { id: 'verb', title: 'Verb (فعل)' }],
        items: [{ word: 'inventor', target: 'noun' }, { word: 'heat', target: 'verb' }, { word: 'crayons', target: 'noun' }, { word: 'wash', target: 'verb' }, { word: 'farmer', target: 'noun' }, { word: 'fix', target: 'verb' }]
    },
    { 
        type: 'drag_drop', id: 'dd2', title: "Nouns & Verbs (Page 59)", trans: "صنف الكلمات إلى اسم (Noun) وفعل (Verb)", icon: '🗂️',
        baskets: [{ id: 'noun', title: 'Noun (اسم)' }, { id: 'verb', title: 'Verb (فعل)' }],
        items: [{ word: 'telescope', target: 'noun' }, { word: 'invent', target: 'verb' }, { word: 'fire', target: 'noun' }, { word: 'bounce', target: 'verb' }, { word: 'vet', target: 'noun' }, { word: 'help', target: 'verb' }]
    },
    { 
        type: 'drag_drop', id: 'dd3', title: "Nouns & Verbs (Page 59)", trans: "صنف الكلمات إلى اسم (Noun) وفعل (Verb)", icon: '🗂️',
        baskets: [{ id: 'noun', title: 'Noun (اسم)' }, { id: 'verb', title: 'Verb (فعل)' }],
        items: [{ word: 'toaster', target: 'noun' }, { word: 'see', target: 'verb' }, { word: 'van', target: 'noun' }, { word: 'smell', target: 'verb' }, { word: 'food', target: 'noun' }, { word: 'put', target: 'verb' }]
    }
];

let shuffledScreens = [...readingScreens];
// Slice 50 to get exactly 50 random screens
let randomQuestions = [...screensData].sort(() => Math.random() - 0.5).slice(0, 50);
shuffledScreens.push(...randomQuestions);

let currentScreenIndex = 0;
let score = 0;
let errorsCount = 0;

let maxScore = 0;
randomQuestions.forEach(q => {
    maxScore += 1;
});

let timeLeft = 50 * 60; // 50 minutes for 50 questions
let timerInterval;

const scoreEl = document.getElementById('score');
const maxScoreDisplayEl = document.getElementById('max-score-display');
const errorsEl = document.getElementById('errors');
const timerEl = document.getElementById('timer');
const timerBoard = document.querySelector('.timer-board');
const startBtn = document.getElementById('start-btn');
const helperControls = document.getElementById('helper-controls');
const showAnswerBtn = document.getElementById('show-answer-btn');
const skipBtn = document.getElementById('skip-btn');
const dynamicContent = document.getElementById('dynamic-content');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const progressContainer = document.getElementById('progress-container');
const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackIcon = document.getElementById('feedback-icon');

const happySound = new Audio('assets/sounds/happy.aac');
const sadSound = new Audio('assets/sounds/sad.aac');
const spinSound = new Audio('assets/sounds/happy.aac'); // fallback for spin

function showFeedbackOverlay(icon) {
    feedbackIcon.innerText = icon;
    feedbackOverlay.classList.remove('hidden');
    setTimeout(() => { feedbackOverlay.classList.add('hidden'); }, 1200);
}

function playSound(type) {
    if (type === 'success') {
        happySound.currentTime = 0;
        happySound.play().catch(e => console.log(e));
        showFeedbackOverlay('⭐');
    } else if (type === 'error') {
        sadSound.currentTime = 0;
        sadSound.play().catch(e => console.log(e));
        showFeedbackOverlay('😢');
    } else if (type === 'spin') {
        spinSound.currentTime = 0;
        spinSound.play().catch(e => console.log(e));
    }
}

let currentUtterance = null;
let currentPlayingBtn = null;

function toggleTTS(text, btnEl) {
    if (!('speechSynthesis' in window)) {
        alert("متصفحك لا يدعم النطق الصوتي.");
        return;
    }
    if (window.speechSynthesis.speaking && currentPlayingBtn === btnEl) {
        window.speechSynthesis.cancel();
        if (currentPlayingBtn) currentPlayingBtn.classList.remove('playing');
        currentPlayingBtn = null;
        return;
    }
    window.speechSynthesis.cancel();
    if (currentPlayingBtn) currentPlayingBtn.classList.remove('playing');
    
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'en-US';
    currentUtterance.rate = 0.6; 
    
    currentPlayingBtn = btnEl;
    if (btnEl) btnEl.classList.add('playing');
    
    currentUtterance.onend = () => {
        if (btnEl) btnEl.classList.remove('playing');
        currentPlayingBtn = null;
    };
    window.speechSynthesis.speak(currentUtterance);
}

function addScore(points) {
    score += points;
    if(score > maxScore) maxScore = score; // If bonus points push it over max
    scoreEl.innerText = score;
    scoreEl.parentElement.classList.add('shake');
    setTimeout(() => scoreEl.parentElement.classList.remove('shake'), 400);
}

function addError() {
    errorsCount++;
    errorsEl.innerText = errorsCount;
    errorsEl.parentElement.classList.add('shake');
    setTimeout(() => errorsEl.parentElement.classList.remove('shake'), 400);
}

function updateProgress() {
    progressText.innerText = `${score} / ${maxScore}`;
    progressBar.style.width = `${Math.min((score / maxScore) * 100, 100)}%`;
    if(maxScoreDisplayEl) maxScoreDisplayEl.innerText = maxScore;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        if (seconds < 10) seconds = "0" + seconds;
        timerEl.innerText = `${minutes}:${seconds}`;
        if (timeLeft <= 60) timerBoard.classList.add('warning');
        if (timeLeft <= 0) { clearInterval(timerInterval); endGame(); }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    helperControls.classList.add('hidden');
    progressContainer.classList.add('hidden');
    document.getElementById('final-score-val').innerText = score;
    showScreen('screen-end');
    if (score >= (maxScore * 0.7)) {
        playSound('success');
        document.getElementById('end-title').innerText = "You are a real Hero! 🎉";
        startConfetti();
    } else {
        document.getElementById('end-title').innerText = "Good job, try again to improve your score! 💪";
    }
}

let hintCurrentScreen = null;

function loadNextScreen() {
    updateProgress();
    if (currentScreenIndex >= shuffledScreens.length) { endGame(); return; }

    const screenData = shuffledScreens[currentScreenIndex];
    
    dynamicContent.innerHTML = '';
    dynamicContent.style.animation = 'none';
    dynamicContent.offsetHeight;
    dynamicContent.style.animation = 'fadeIn 0.5s ease-out';
    showAnswerBtn.disabled = false;
    skipBtn.disabled = false;
    
    showAnswerBtn.style.display = 'block';
    skipBtn.innerHTML = '⏭ Skip';
    skipBtn.classList.remove('primary-btn');
    
    switch(screenData.type) {
        case 'reading_passage': renderReadingPassage(screenData); break;
        case 'bubble_pop': renderBubblePop(screenData); break;
        case 'maze': renderMaze(screenData); break;
        case 'true_false': renderTrueFalse(screenData); break;
        case 'sentence_builder': renderSentenceBuilder(screenData); break;
        case 'spelling_tiles': renderSpellingTiles(screenData); break;
        case 'pop_it_spelling': renderPopItSpelling(screenData); break;
        case 'word_blocks': renderWordBlocks(screenData); break;
        case 'word_wheel': renderWordWheel(screenData); break;
        case 'circle_sorting': renderCircleSorting(screenData); break;
        case 'window_wheel': renderWindowWheel(screenData); break;
        case 'drag_drop': renderDragDrop(screenData); break;
    }
}

function processItemAnswer(isCorrect, elementToShake = null) {
    if (isCorrect) {
        playSound('success');
        addScore(1);
        updateProgress();
        showAnswerBtn.disabled = true;
        skipBtn.disabled = true;
        setTimeout(() => { currentScreenIndex++; loadNextScreen(); }, 1500);
    } else {
        playSound('error');
        addError();
        if (elementToShake) {
            elementToShake.classList.add('shake');
            setTimeout(() => elementToShake.classList.remove('shake'), 400);
        }
    }
}

// =======================
// Games Render Functions
// =======================

function renderReadingPassage(q) {
    let sentencesHtml = q.sentences.map((s, index) => `
        <div class="sentence-line" id="sent-${index}">
            <span class="sentence-en">${s.en}</span>
            <span class="sentence-ar">${s.ar}</span>
            <span class="transliteration" style="color: #e1b12c; font-size: 0.95rem; margin-top: 3px;">${s.pr}</span>
        </div>
    `).join('');

    const html = `
        <h2>Reading & Vocabulary 📖</h2>
        <p>اضغط على أي جملة لتستمع لنطقها (اضغط مرة أخرى للإيقاف)</p>
        <div class="reading-container">
            <div class="reading-text-box">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 2px dashed #ccc; padding-bottom: 10px;">
                    <h3 style="color: var(--primary); margin: 0; font-size: 1.8rem;">${q.title}</h3>
                    ${q.img ? `<img src="${q.img}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px;">` : ''}
                </div>
                ${sentencesHtml}
            </div>
            
            <h3 style="color: var(--primary); margin-top: 20px;">Key Words (كلمات مهمة)</h3>
            <div class="vocab-grid" id="vocab-grid"></div>
        </div>
    `;
    dynamicContent.innerHTML = html;
    
    q.sentences.forEach((s, index) => {
        const sentEl = document.getElementById(`sent-${index}`);
        sentEl.onclick = function() { toggleTTS(s.en, this); };
    });
    
    const vocabGrid = document.getElementById('vocab-grid');
    q.words.forEach((word) => {
        const card = document.createElement('div');
        card.classList.add('flashcard');
        let iconHtml = word.img ? `<img src="${word.img}" class="flashcard-img">` : `<div class="flashcard-icon">${word.icon}</div>`;
        card.innerHTML = `
            ${iconHtml}
            <div class="flashcard-text">
                <span class="flashcard-en">${word.en}</span>
                <span class="flashcard-ar">${word.ar}</span>
                <span class="transliteration" style="color:#e1b12c; font-size: 0.85rem;">${word.pr}</span>
            </div>
            <button class="speak-btn" style="margin-left: auto;">🔊</button>
        `;
        card.onclick = function() { toggleTTS(word.en, card.querySelector('.speak-btn')); };
        vocabGrid.appendChild(card);
    });
    
    showAnswerBtn.style.display = 'none';
    skipBtn.innerHTML = 'التالي ▶️';
    skipBtn.classList.add('primary-btn');
    hintCurrentScreen = null;
}

function renderWordBlocks(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">` : `<div style="font-size: 5rem;">${q.icon}</div>`;
    
    const wordArr = q.word.toLowerCase().split('');
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    let blocksData = wordArr.map(correctChar => {
        let options = [correctChar];
        while(options.length < 4) {
            let randChar = alphabet[Math.floor(Math.random() * alphabet.length)];
            if(!options.includes(randChar)) options.push(randChar);
        }
        return options.sort(() => Math.random() - 0.5);
    });

    let blocksHtml = blocksData.map((options, index) => `
        <div class="word-block-col" id="wb-col-${index}" data-options='${JSON.stringify(options)}' data-current="0">
            <button class="block-btn up-btn">⬆️</button>
            <div class="word-block">${options[0]}</div>
            <button class="block-btn down-btn">⬇️</button>
        </div>
    `).join('');

    const html = `
        <h2>Word Blocks</h2>
        <p>إقلّب المكعبات لتكوين الكلمة الصحيحة!</p>
        <div class="spelling-container" style="margin-top: 10px;">
            <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 10px;">
                ${visualHtml}
                <button class="speak-btn" id="wb-speak" style="width: 50px; height: 50px; font-size: 1.5rem;">🔊</button>
            </div>
            <div class="question-box" style="margin: 0; padding: 10px 20px;">${q.trans}</div>
        </div>
        <div class="word-blocks-container" id="wb-container">
            ${blocksHtml}
        </div>
        <button class="btn check-btn" id="wb-check">Check Answer ✔️</button>
    `;
    dynamicContent.innerHTML = html;
    
    document.getElementById('wb-speak').onclick = function() { toggleTTS(q.word, this); };
    
    let solved = false;

    blocksData.forEach((_, index) => {
        const col = document.getElementById(`wb-col-${index}`);
        const opts = JSON.parse(col.dataset.options);
        const block = col.querySelector('.word-block');
        
        col.querySelector('.up-btn').onclick = () => {
            if(solved) return;
            let curr = parseInt(col.dataset.current);
            curr = (curr - 1 + opts.length) % opts.length;
            col.dataset.current = curr;
            block.classList.remove('flip-up-anim', 'flip-down-anim');
            void block.offsetWidth;
            block.classList.add('flip-up-anim');
            block.innerText = opts[curr];
        };
        
        col.querySelector('.down-btn').onclick = () => {
            if(solved) return;
            let curr = parseInt(col.dataset.current);
            curr = (curr + 1) % opts.length;
            col.dataset.current = curr;
            block.classList.remove('flip-up-anim', 'flip-down-anim');
            void block.offsetWidth;
            block.classList.add('flip-down-anim');
            block.innerText = opts[curr];
        };
    });

    const checkBtn = document.getElementById('wb-check');
    checkBtn.onclick = () => {
        if(solved) return;
        let spelledWord = "";
        blocksData.forEach((_, index) => {
            const col = document.getElementById(`wb-col-${index}`);
            const opts = JSON.parse(col.dataset.options);
            const curr = parseInt(col.dataset.current);
            spelledWord += opts[curr];
        });
        
        if (spelledWord === q.word.toLowerCase()) {
            solved = true;
            checkBtn.style.display = 'none';
            document.querySelectorAll('.word-block').forEach(b => {
                b.style.borderColor = 'var(--success)';
                b.style.background = 'rgba(120, 224, 143, 0.2)';
            });
            processItemAnswer(true);
        } else {
            processItemAnswer(false, document.getElementById('wb-container'));
        }
    };

    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        let oldState = [];
        blocksData.forEach((opts, index) => {
            const col = document.getElementById(`wb-col-${index}`);
            oldState.push(col.dataset.current);
            const correctIndex = opts.indexOf(wordArr[index]);
            col.dataset.current = correctIndex;
            const block = col.querySelector('.word-block');
            block.classList.remove('flip-up-anim', 'flip-down-anim');
            void block.offsetWidth;
            block.classList.add('flip-up-anim');
            block.innerText = opts[correctIndex];
            block.style.background = '#f1c40f'; 
        });
        setTimeout(() => {
            if(solved) return;
            blocksData.forEach((opts, index) => {
                const col = document.getElementById(`wb-col-${index}`);
                col.dataset.current = oldState[index];
                const block = col.querySelector('.word-block');
                block.classList.remove('flip-up-anim', 'flip-down-anim');
                void block.offsetWidth;
                block.classList.add('flip-down-anim');
                block.innerText = opts[oldState[index]];
                block.style.background = 'white';
            });
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderWordWheel(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">` : `<div style="font-size: 5rem;">${q.icon}</div>`;
    
    const lettersCount = q.prefixOptions.length;
    const angleStep = 360 / lettersCount;
    
    let lettersHtml = q.prefixOptions.map((letter, i) => {
        let angle = i * angleStep;
        return `<div class="wheel-letter" style="transform: rotate(${angle}deg);">
                    <div class="wheel-letter-inner" data-angle="${angle}">${letter}</div>
                </div>`;
    }).join('');

    const html = `
        <h2>Word Wheel</h2>
        <p>لف العجلة لاختيار الحرف الأول الصحيح!</p>
        <div class="spelling-container" style="margin-top: 10px;">
            <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 10px;">
                ${visualHtml}
                <button class="speak-btn" id="ww-speak" style="width: 50px; height: 50px; font-size: 1.5rem;">🔊</button>
            </div>
            <div class="question-box" style="margin: 0; padding: 10px 20px;">${q.trans}</div>
        </div>
        
        <div class="wheel-game-wrapper" id="ww-wrapper">
            <div class="wheel-container">
                <div class="wheel" id="main-wheel" data-rotation="0">
                    <div class="wheel-center"></div>
                    ${lettersHtml}
                </div>
                <div class="wheel-pointer">▶</div>
            </div>
            <div class="wheel-suffix">${q.suffix}</div>
        </div>
        
        <div class="wheel-controls">
            <button class="wheel-btn" id="ww-left">🔄</button>
            <button class="wheel-btn" id="ww-right">🔃</button>
        </div>
        <button class="btn check-btn" id="ww-check" style="margin-top: 20px;">Check Answer ✔️</button>
    `;
    dynamicContent.innerHTML = html;
    
    document.getElementById('ww-speak').onclick = function() { toggleTTS(q.fullWord, this); };

    let currentRotation = 0;
    const wheelEl = document.getElementById('main-wheel');
    let solved = false;
    
    function updateLettersRotation() {
        // Counter rotate inner letters so they always appear straight
        document.querySelectorAll('.wheel-letter-inner').forEach(inner => {
            let angle = parseFloat(inner.dataset.angle);
            inner.style.transform = `rotate(${-(angle + currentRotation)}deg)`;
        });
    }
    
    // Initial upright rotation
    updateLettersRotation();

    // Fix for the center rotation: it's now perfectly centered because the wheel-letter is full size.
    document.getElementById('ww-left').onclick = () => {
        if(solved) return;
        currentRotation -= angleStep;
        wheelEl.style.transform = `rotate(${currentRotation}deg)`;
        updateLettersRotation();
    };
    document.getElementById('ww-right').onclick = () => {
        if(solved) return;
        currentRotation += angleStep;
        wheelEl.style.transform = `rotate(${currentRotation}deg)`;
        updateLettersRotation();
    };

    const checkBtn = document.getElementById('ww-check');
    checkBtn.onclick = () => {
        if(solved) return;
        
        let targetA = (90 - currentRotation) % 360;
        if(targetA < 0) targetA += 360;
        
        let closestDist = 999;
        let selectedLetter = '';
        
        q.prefixOptions.forEach((letter, i) => {
            let angle = i * angleStep;
            let dist = Math.abs(angle - targetA);
            if(dist > 180) dist = 360 - dist;
            if(dist < closestDist) {
                closestDist = dist;
                selectedLetter = letter;
            }
        });

        if (selectedLetter === q.correctPrefix) {
            solved = true;
            checkBtn.style.display = 'none';
            wheelEl.style.borderColor = 'var(--success)';
            document.querySelector('.wheel-suffix').style.color = 'var(--success)';
            processItemAnswer(true);
        } else {
            processItemAnswer(false, document.getElementById('ww-wrapper'));
        }
    };

    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        let oldRotation = currentRotation;
        let targetIndex = q.prefixOptions.indexOf(q.correctPrefix);
        let targetA = targetIndex * angleStep;
        currentRotation = 90 - targetA;
        wheelEl.style.transform = `rotate(${currentRotation}deg)`;
        updateLettersRotation();
        wheelEl.style.borderColor = '#f1c40f';
        
        setTimeout(() => {
            if(solved) return;
            currentRotation = oldRotation;
            wheelEl.style.transform = `rotate(${currentRotation}deg)`;
            updateLettersRotation();
            wheelEl.style.borderColor = 'var(--primary)';
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderPopItSpelling(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">` : `<div style="font-size: 5rem;">${q.icon}</div>`;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const lettersHtml = alphabet.map(l => `<div class="popit-bubble" data-char="${l.toLowerCase()}">${l}</div>`).join('');
    const targetLetters = q.word.toLowerCase().replace(/[^a-z]/g, '').split('');
    
    const html = `
        <h2>Pop It Spelling Game</h2>
        <p>Pop the letters in the correct order!</p>
        <div class="spelling-container" style="margin-top: 10px;">
            <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 10px;">
                ${visualHtml}
                <button class="speak-btn" id="pop-speak" style="width: 50px; height: 50px; font-size: 1.5rem;">🔊</button>
            </div>
            <div class="question-box" style="margin: 0; padding: 10px 20px;">${q.trans}</div>
            <div class="spelling-slots" id="p-slots">
                ${targetLetters.map(() => '<div class="spelling-slot"></div>').join('')}
            </div>
        </div>
        <div class="popit-board" id="popit-board">${lettersHtml}</div>
    `;
    dynamicContent.innerHTML = html;
    document.getElementById('pop-speak').onclick = function() { toggleTTS(q.word, this); };
    
    const slots = Array.from(document.querySelectorAll('#p-slots .spelling-slot'));
    const bubbles = document.querySelectorAll('.popit-bubble');
    let currentIndex = 0; let solved = false;
    bubbles.forEach(bubble => {
        bubble.onclick = () => {
            if (solved) return;
            const char = bubble.dataset.char;
            bubble.classList.add('popped'); setTimeout(() => { if(!solved) bubble.classList.remove('popped'); }, 200);
            if (char === targetLetters[currentIndex]) {
                slots[currentIndex].innerText = char.toUpperCase(); slots[currentIndex].classList.add('filled'); currentIndex++;
                if (currentIndex === targetLetters.length) { solved = true; slots.forEach(s => s.style.borderColor = 'var(--success)'); processItemAnswer(true); }
            } else processItemAnswer(false, document.getElementById('popit-board'));
        };
    });
    
    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        let originalText = slots.map(s => s.innerText);
        targetLetters.forEach((l, i) => { 
            slots[i].innerText = l.toUpperCase(); 
            slots[i].style.color = '#f1c40f'; 
            slots[i].style.borderColor = '#f1c40f';
        });
        setTimeout(() => {
            if(solved) return;
            slots.forEach((s, i) => { 
                s.innerText = originalText[i]; 
                s.style.color = 'var(--primary)'; 
                if(!s.classList.contains('filled')) s.style.borderColor = '#2c3e50';
            });
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderBubblePop(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">` : (q.icon ? `<div style="font-size: 4rem; margin-bottom: 10px;">${q.icon}</div>` : '');
    
    const html = `
        <h2>Missing Letters</h2>
        <p>Pop the bubble with the missing letter!</p>
        <div style="display:flex; flex-direction:column; align-items:center;">
            ${visualHtml}
            <div class="question-box" id="qbox" style="margin-top: 0;">${q.sentence}<span class="transliteration">${q.trans}</span></div>
        </div>
        <div class="bubbles-container" id="bubbles"></div>
    `;
    dynamicContent.innerHTML = html;
    const options = [q.correct, ...q.wrong].sort(() => Math.random() - 0.5);
    const container = document.getElementById('bubbles');
    let solved = false;
    options.forEach((opt) => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble'); bubble.innerText = opt;
        bubble.addEventListener('click', () => {
            if(solved) return;
            if (opt === q.correct) { bubble.classList.add('popped'); solved = true; processItemAnswer(true); } 
            else processItemAnswer(false, bubble);
        });
        container.appendChild(bubble);
    });
    
    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        const cb = Array.from(document.querySelectorAll('.bubble')).find(b => b.innerText === q.correct);
        if(cb) cb.style.background = '#f1c40f';
        setTimeout(() => {
            if(solved) return;
            if(cb) cb.style.background = '';
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderTrueFalse(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">` : (q.icon ? `<div style="font-size: 4rem; margin-bottom: 10px;">${q.icon}</div>` : '');
    const html = `
        <h2>True or False?</h2>
        <p>Is this sentence True 🟢 or False 🔴?</p>
        <div style="display:flex; flex-direction:column; align-items:center;">
            ${visualHtml}
            <div class="question-box" id="tfbox" style="margin-top: 0;">${q.text}<span class="transliteration">${q.trans}</span></div>
        </div>
        <div class="tf-buttons" id="tfbtn" style="justify-content: center; gap: 20px; margin-top: 15px;">
            <button class="tf-btn true-btn">🟢 True</button>
            <button class="tf-btn false-btn">🔴 False</button>
        </div>
    `;
    dynamicContent.innerHTML = html;
    const tBtn = document.querySelector('.true-btn'); const fBtn = document.querySelector('.false-btn');
    const qBox = document.getElementById('tfbox'); let solved = false;
    const checkAns = (uA, btn) => {
        if(solved) return;
        if (uA === q.answer) { btn.style.boxShadow = '0 0 20px var(--success)'; solved = true; processItemAnswer(true); } 
        else processItemAnswer(false, qBox);
    };
    tBtn.onclick = () => checkAns(true, tBtn); fBtn.onclick = () => checkAns(false, fBtn);
    
    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        const btn = q.answer ? tBtn : fBtn;
        let oldBg = btn.style.background;
        btn.style.background = '#f1c40f';
        setTimeout(() => {
            if(solved) return;
            btn.style.background = oldBg;
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderSentenceBuilder(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">` : (q.icon ? `<div style="font-size: 4rem; margin-bottom: 10px;">${q.icon}</div>` : '');
    const html = `
        <h2>Sentence Builder</h2>
        <p>Click the words to arrange them into a correct sentence!</p>
        <div style="display:flex; flex-direction:column; align-items:center;">
            ${visualHtml}
        </div>
        <div class="scrambled-words" id="sb-words"></div>
        <div class="sentence-dropzone" id="sb-dropzone"></div>
        <button class="btn check-btn" id="sb-check">Check Answer ✔️</button>
    `;
    dynamicContent.innerHTML = html;
    const wc = document.getElementById(`sb-words`); const dz = document.getElementById(`sb-dropzone`); const cb = document.getElementById(`sb-check`);
    let solved = false; let scrambled = [...q.words].sort(() => Math.random() - 0.5);
    
    scrambled.forEach((item, index) => {
        const el = document.createElement('div'); el.classList.add('sentence-word'); el.style.cursor = 'pointer'; el.id = `sw-${index}`;
        el.innerHTML = `${item.w} <span class="transliteration" style="color:#ffeaa7; font-size:0.8rem">${item.t}</span>`;
        el.dataset.word = item.w;
        el.onclick = () => {
            if(solved) return;
            if (el.parentElement === wc) dz.appendChild(el); else wc.appendChild(el);
        };
        wc.appendChild(el);
    });
    
    cb.addEventListener('click', () => {
        if(solved) return;
        const cW = Array.from(dz.children).map(el => el.dataset.word); const oW = q.words.map(item => item.w);
        if (cW.length === oW.length && cW.join(' ') === oW.join(' ')) { cb.style.display = 'none'; solved = true; processItemAnswer(true); } 
        else processItemAnswer(false, dz);
    });
    
    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        const hintEl = document.createElement('div');
        hintEl.style.color = '#f1c40f';
        hintEl.style.fontWeight = 'bold';
        hintEl.style.fontSize = '1.5rem';
        hintEl.style.width = '100%';
        hintEl.style.textAlign = 'center';
        hintEl.innerText = q.words.map(w => w.w).join(' ');
        
        Array.from(dz.children).forEach(c => c.style.display = 'none');
        dz.appendChild(hintEl);
        
        setTimeout(() => {
            if(solved) return;
            if(hintEl.parentElement) hintEl.remove();
            Array.from(dz.children).forEach(c => c.style.display = '');
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderMaze(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px; margin-bottom: 5px;">` : (q.icon ? `<div style="font-size: 3rem; margin-bottom: 5px;">${q.icon}</div>` : '');
    const html = `
        <h2>Bee Maze! 🐝</h2>
        <p>Help the bee find the correct answer!</p>
        <div style="display:flex; flex-direction:column; align-items:center;">
            ${visualHtml}
            <div class="question-box" id="mazebox" style="margin-top: 0; padding: 5px 15px;">${q.question}<span class="transliteration">${q.trans}</span></div>
        </div>
        <div class="maze-container">
            <div class="maze-grid" id="maze-grid"></div>
            <div class="maze-controls">
                <button class="maze-btn maze-up" id="btn-up">⬆️</button>
                <button class="maze-btn maze-left" id="btn-left">⬅️</button>
                <button class="maze-btn maze-down" id="btn-down">⬇️</button>
                <button class="maze-btn maze-right" id="btn-right">➡️</button>
            </div>
        </div>
    `;
    dynamicContent.innerHTML = html;
    const grid = document.getElementById('maze-grid'); const gridSize = 5;
    const walls = ['1,0', '1,2', '2,2', '3,4', '4,1'];
    const options = [q.correct, ...q.wrong].sort(() => Math.random() - 0.5);
    const goalPositions = ['0,4', '4,0', '4,4']; const goals = {};
    goalPositions.forEach((pos, i) => { if(options[i]) goals[pos] = options[i]; });
    let beePos = { x: 0, y: 0 }; let solved = false;
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const cell = document.createElement('div'); cell.classList.add('maze-cell'); cell.id = `cell-${x}-${y}`;
            const posKey = `${x},${y}`;
            if (walls.includes(posKey)) cell.classList.add('wall');
            else if (goals[posKey]) cell.innerHTML = `🍯<br><span class="maze-word">${goals[posKey]}</span>`;
            grid.appendChild(cell);
        }
    }
    const drawBee = () => { document.querySelectorAll('.maze-bee').forEach(el => el.remove()); const cell = document.getElementById(`cell-${beePos.x}-${beePos.y}`); if(cell) { const bee = document.createElement('div'); bee.classList.add('maze-bee'); bee.innerText = '🐝'; bee.style.position = 'absolute'; cell.appendChild(bee); } };
    drawBee();
    const moveBee = (dx, dy) => {
        if(solved) return;
        const nx = beePos.x + dx; const ny = beePos.y + dy;
        if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize) {
            if (!walls.includes(`${nx},${ny}`)) {
                beePos = { x: nx, y: ny }; drawBee();
                const currentPosKey = `${nx},${ny}`;
                if (goals[currentPosKey]) {
                    if (goals[currentPosKey] === q.correct) { solved = true; document.getElementById(`cell-${nx}-${ny}`).style.background = 'var(--success)'; processItemAnswer(true); } 
                    else { processItemAnswer(false, grid); beePos = { x: 0, y: 0 }; drawBee(); }
                }
            } else { grid.classList.add('shake'); setTimeout(() => grid.classList.remove('shake'), 300); }
        }
    };
    document.getElementById('btn-up').onclick = () => moveBee(0, -1); document.getElementById('btn-down').onclick = () => moveBee(0, 1);
    document.getElementById('btn-left').onclick = () => moveBee(-1, 0); document.getElementById('btn-right').onclick = () => moveBee(1, 0);
    const keyHandler = (e) => {
        if(solved) return;
        if(e.key === 'ArrowUp') moveBee(0, -1); if(e.key === 'ArrowDown') moveBee(0, 1);
        if(e.key === 'ArrowLeft') moveBee(-1, 0); if(e.key === 'ArrowRight') moveBee(1, 0);
    };
    document.addEventListener('keydown', keyHandler);
    
    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        let targetKey = null;
        for (const [key, val] of Object.entries(goals)) { if (val === q.correct) targetKey = key; }
        let cell = null;
        if(targetKey) {
            const [tx, ty] = targetKey.split(','); 
            cell = document.getElementById(`cell-${tx}-${ty}`);
            if(cell) cell.style.background = '#f1c40f';
        }
        setTimeout(() => {
            if(solved) return;
            if(cell) cell.style.background = '';
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderSpellingTiles(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">` : `<div class="spelling-word-icon">${q.icon}</div>`;
    
    const html = `
        <h2>Spelling Game</h2>
        <p>Click the letters to spell the word correctly!</p>
        <div class="spelling-container">
            ${visualHtml}
            <div class="question-box" style="margin: 0;">${q.trans}</div>
            <div class="spelling-slots" id="s-slots">
                ${Array(q.word.length).fill('<div class="spelling-slot"></div>').join('')}
            </div>
            <div class="spelling-tiles" id="s-tiles"></div>
        </div>
    `;
    dynamicContent.innerHTML = html;

    const slots = Array.from(document.querySelectorAll('.spelling-slot'));
    const tilesContainer = document.getElementById('s-tiles');
    let solved = false;
    let letters = q.word.split('').sort(() => Math.random() - 0.5);
    
    letters.forEach((l, index) => {
        const tile = document.createElement('div'); tile.classList.add('spelling-tile'); tile.innerText = l; tile.dataset.letter = l; tile.dataset.id = index;
        tile.onclick = () => {
            if(solved) return;
            const emptySlot = slots.find(s => !s.classList.contains('filled'));
            if (emptySlot) { emptySlot.innerText = l; emptySlot.classList.add('filled'); emptySlot.dataset.tileId = index; tile.classList.add('hidden'); checkAnswer(); }
        };
        tilesContainer.appendChild(tile);
    });

    slots.forEach(slot => {
        slot.onclick = () => {
            if(solved) return;
            if(slot.classList.contains('filled')) {
                const tile = document.querySelector(`.spelling-tile[data-id="${slot.dataset.tileId}"]`);
                if(tile) tile.classList.remove('hidden');
                slot.innerText = ''; slot.classList.remove('filled'); delete slot.dataset.tileId;
            }
        }
    });

    function checkAnswer() {
        if (slots.every(s => s.classList.contains('filled'))) {
            const currentWord = slots.map(s => s.innerText).join('');
            if (currentWord === q.word) { solved = true; slots.forEach(s => s.style.borderColor = 'var(--success)'); processItemAnswer(true); } 
            else {
                processItemAnswer(false, document.getElementById('s-slots'));
                setTimeout(() => {
                    if(solved) return;
                    slots.forEach(slot => {
                        if(slot.classList.contains('filled')) {
                            const tile = document.querySelector(`.spelling-tile[data-id="${slot.dataset.tileId}"]`);
                            if(tile) tile.classList.remove('hidden'); slot.innerText = ''; slot.classList.remove('filled'); delete slot.dataset.tileId;
                        }
                    });
                }, 800);
            }
        }
    }

    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        let originalText = slots.map(s => s.innerText);
        q.word.split('').forEach((correctL, i) => {
            slots[i].innerText = correctL;
            slots[i].style.color = '#f1c40f';
            slots[i].style.borderColor = '#f1c40f';
        });
        setTimeout(() => {
            if(solved) return;
            slots.forEach((s, i) => { 
                s.innerText = originalText[i]; 
                s.style.color = 'var(--primary)'; 
                if(!s.classList.contains('filled')) s.style.borderColor = '#2c3e50';
            });
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderCircleSorting(q) {
    const html = `
        <h2>Sorting Wheel 🎡</h2>
        <p>إملأ الدوائر الفارغة بالكلمات الصحيحة التي تبدأ بالحرف المطلوب!</p>
        <div class="question-box" style="margin-top: 0;">${q.trans}</div>
        
        <div class="sorting-wheel-container" id="sw-container">
            <div class="sorting-wheel-center">${q.centerText}</div>
            <div id="sw-nodes"></div>
        </div>
        
        <div class="sorting-tokens-bank" id="sw-bank"></div>
        <button class="btn check-btn" id="sw-check" style="margin-top: 20px;">Check Answer ✔️</button>
    `;
    dynamicContent.innerHTML = html;
    
    const nodesContainer = document.getElementById('sw-nodes');
    const bankContainer = document.getElementById('sw-bank');
    
    const slotsCount = q.correct.length;
    const angleStep = 360 / slotsCount;
    
    // Generate empty slots in a circle
    for(let i=0; i<slotsCount; i++) {
        let angle = i * angleStep;
        let node = document.createElement('div');
        node.className = 'sorting-node';
        node.style.transform = `rotate(${angle}deg)`;
        
        let slot = document.createElement('div');
        slot.className = 'sorting-slot';
        slot.dataset.id = i;
        slot.style.transform = `translate(-50%, -50%) translateY(-80px) rotate(-${angle}deg)`;
        
        node.appendChild(slot);
        nodesContainer.appendChild(node);
    }
    
    let allTokens = [...q.correct, ...q.wrong].sort(() => Math.random() - 0.5);
    
    allTokens.forEach((word, index) => {
        let token = document.createElement('div');
        token.className = 'sorting-token';
        token.innerText = word;
        token.dataset.word = word;
        token.dataset.id = index;
        
        token.onclick = () => {
            if(solved) return;
            const emptySlot = Array.from(document.querySelectorAll('.sorting-slot')).find(s => !s.classList.contains('filled'));
            if(emptySlot) {
                emptySlot.innerText = word;
                emptySlot.classList.add('filled');
                emptySlot.dataset.tokenId = index;
                token.classList.add('hidden');
            }
        };
        bankContainer.appendChild(token);
    });
    
    document.querySelectorAll('.sorting-slot').forEach(slot => {
        slot.onclick = () => {
            if(solved) return;
            if(slot.classList.contains('filled')) {
                let token = document.querySelector(`.sorting-token[data-id="${slot.dataset.tokenId}"]`);
                if(token) token.classList.remove('hidden');
                slot.innerText = '';
                slot.classList.remove('filled');
                delete slot.dataset.tokenId;
            }
        };
    });
    
    let solved = false;
    const checkBtn = document.getElementById('sw-check');
    checkBtn.onclick = () => {
        if(solved) return;
        const slots = Array.from(document.querySelectorAll('.sorting-slot'));
        if(slots.every(s => s.classList.contains('filled'))) {
            let userWords = slots.map(s => s.innerText);
            let isAllCorrect = userWords.every(w => q.correct.includes(w));
            if(isAllCorrect) {
                solved = true;
                checkBtn.style.display = 'none';
                document.querySelector('.sorting-wheel-center').style.background = 'var(--success)';
                processItemAnswer(true);
            } else {
                processItemAnswer(false, document.getElementById('sw-container'));
                setTimeout(() => {
                    if(solved) return;
                    slots.forEach(slot => {
                        let token = document.querySelector(`.sorting-token[data-id="${slot.dataset.tokenId}"]`);
                        if(token) token.classList.remove('hidden');
                        slot.innerText = '';
                        slot.classList.remove('filled');
                        delete slot.dataset.tokenId;
                    });
                }, 800);
            }
        }
    };
    
    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        const slots = document.querySelectorAll('.sorting-slot');
        let originalText = Array.from(slots).map(s => s.innerText);
        
        Array.from(slots).forEach((s, i) => {
            s.innerText = q.correct[i];
            s.style.color = '#f1c40f';
            s.style.borderColor = '#f1c40f';
        });
        
        setTimeout(() => {
            if(solved) return;
            Array.from(slots).forEach((s, i) => {
                s.innerText = originalText[i];
                s.style.color = 'var(--primary)';
                if(!s.classList.contains('filled')) s.style.borderColor = '#7f8fa6';
            });
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderWindowWheel(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">` : (q.icon ? `<div style="font-size: 4rem; margin-bottom: 10px;">${q.icon}</div>` : '');
    
    const html = `
        <h2>Window Wheel 🪟</h2>
        <p>أدر النافذة السحرية لتكشف عن الكلمة المطابقة للصورة!</p>
        <div style="display:flex; flex-direction:column; align-items:center;">
            ${visualHtml}
            <div class="question-box" style="margin-top: 0; padding: 5px 15px;">${q.trans}</div>
        </div>
        
        <div class="window-wheel-container" id="win-container">
            <div class="window-bottom-layer" id="win-bottom"></div>
            <div class="window-top-layer" id="win-top"></div>
            <div class="window-top-center">${q.centerText}</div>
        </div>
        
        <div class="window-controls">
            <button class="wheel-btn" id="win-left">🔄</button>
            <button class="wheel-btn" id="win-right">🔃</button>
        </div>
        <button class="btn check-btn" id="win-check" style="margin-top: 20px;">Check Answer ✔️</button>
    `;
    dynamicContent.innerHTML = html;
    
    const bottomLayer = document.getElementById('win-bottom');
    const topLayer = document.getElementById('win-top');
    
    const wordsCount = q.allWords.length;
    const angleStep = 360 / wordsCount;
    
    // Distribute words on the bottom layer
    q.allWords.forEach((word, index) => {
        let angle = index * angleStep;
        let wrapper = document.createElement('div');
        wrapper.className = 'window-word-wrapper';
        wrapper.style.transform = `rotate(${angle}deg)`;
        
        let wordEl = document.createElement('div');
        wordEl.className = 'window-word';
        wordEl.innerText = word;
        // Keep them upright or let them point to center? Pointing to center is better for a wheel!
        wordEl.style.transform = `rotate(-${angle}deg)`; // No, let's keep them upright for readability
        // Wait, if it rotates -angle, it's upright relative to screen.
        
        wrapper.appendChild(wordEl);
        bottomLayer.appendChild(wrapper);
    });
    
    let currentRotation = 0;
    let solved = false;
    
    document.getElementById('win-left').onclick = () => {
        if(solved) return;
        currentRotation -= angleStep;
        topLayer.style.transform = `rotate(${currentRotation}deg)`;
    };
    document.getElementById('win-right').onclick = () => {
        if(solved) return;
        currentRotation += angleStep;
        topLayer.style.transform = `rotate(${currentRotation}deg)`;
    };
    
    const checkBtn = document.getElementById('win-check');
    checkBtn.onclick = () => {
        if(solved) return;
        
        // Window is initially at 0deg (top).
        // Rotation R means the window is now at R.
        // We need to find which word is at R.
        // Word i is at i * angleStep.
        // So we check if R mod 360 == i * angleStep.
        let windowAngle = currentRotation % 360;
        if(windowAngle < 0) windowAngle += 360;
        
        let closestDist = 999;
        let selectedWord = '';
        
        q.allWords.forEach((word, i) => {
            let wordAngle = i * angleStep;
            let dist = Math.abs(wordAngle - windowAngle);
            if(dist > 180) dist = 360 - dist;
            if(dist < closestDist) {
                closestDist = dist;
                selectedWord = word;
            }
        });
        
        if (selectedWord === q.targetWord) {
            solved = true;
            checkBtn.style.display = 'none';
            document.querySelector('.window-top-center').style.borderColor = 'var(--success)';
            document.querySelector('.window-top-center').style.color = 'var(--success)';
            processItemAnswer(true);
        } else {
            processItemAnswer(false, document.getElementById('win-container'));
        }
    };
    
    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        let oldRotation = currentRotation;
        
        let targetIndex = q.allWords.indexOf(q.targetWord);
        let targetA = targetIndex * angleStep;
        currentRotation = targetA;
        topLayer.style.transform = `rotate(${currentRotation}deg)`;
        document.querySelector('.window-top-center').style.borderColor = '#f1c40f';
        
        setTimeout(() => {
            if(solved) return;
            currentRotation = oldRotation;
            topLayer.style.transform = `rotate(${currentRotation}deg)`;
            document.querySelector('.window-top-center').style.borderColor = '#f39c12';
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderDragDrop(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">` : (q.icon ? `<div style="font-size: 4rem; margin-bottom: 10px;">${q.icon}</div>` : '');
    
    const html = `
        <h2>${q.title}</h2>
        <p>اسحب الكلمات أو اضغط عليها لنقلها إلى السلة الصحيحة!</p>
        <div style="display:flex; flex-direction:column; align-items:center;">
            ${visualHtml}
            <div class="question-box" style="margin-top: 0;">${q.trans}</div>
        </div>
        
        <div class="drag-words-container" id="dd-words" style="min-height: 60px; padding: 10px; border: 2px dashed #ccc; border-radius: 10px; width: 100%;"></div>
        <div class="baskets-container" id="dd-baskets">
            ${q.baskets.map(b => `
                <div class="basket" data-basket="${b.id}">
                    <div class="basket-title">${b.title}</div>
                    <div class="basket-dropzone" id="basket-${b.id}"></div>
                </div>
            `).join('')}
        </div>
        <button class="btn check-btn" id="dd-check" style="margin-top: 20px;">Check Answer ✔️</button>
    `;
    dynamicContent.innerHTML = html;
    
    const wordsContainer = document.getElementById('dd-words');
    let solved = false;
    let shuffledItems = [...q.items].sort(() => Math.random() - 0.5);
    let selectedWord = null;
    
    shuffledItems.forEach((item, index) => {
        let wordEl = document.createElement('div');
        wordEl.className = 'drag-word';
        wordEl.draggable = true;
        wordEl.innerText = item.word;
        wordEl.dataset.target = item.target;
        wordEl.id = `dd-word-${index}`;
        
        wordEl.addEventListener('dragstart', (e) => {
            if(solved) return;
            wordEl.classList.add('dragging');
            e.dataTransfer.setData('text/plain', wordEl.id);
        });
        
        wordEl.addEventListener('dragend', () => {
            wordEl.classList.remove('dragging');
        });
        
        wordEl.onclick = (e) => {
            if(solved) return;
            e.stopPropagation();
            if (selectedWord) selectedWord.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            if (selectedWord === wordEl) {
                selectedWord = null;
            } else {
                selectedWord = wordEl;
                wordEl.style.boxShadow = '0 0 10px 5px var(--primary)';
            }
        };
        
        wordsContainer.appendChild(wordEl);
    });
    
    const baskets = document.querySelectorAll('.basket');
    baskets.forEach(basket => {
        basket.addEventListener('dragover', (e) => {
            if(solved) return;
            e.preventDefault();
            basket.classList.add('drag-over');
        });
        
        basket.addEventListener('dragleave', () => {
            basket.classList.remove('drag-over');
        });
        
        basket.addEventListener('drop', (e) => {
            if(solved) return;
            e.preventDefault();
            basket.classList.remove('drag-over');
            const id = e.dataTransfer.getData('text/plain');
            const draggableElement = document.getElementById(id);
            if (draggableElement) {
                basket.querySelector('.basket-dropzone').appendChild(draggableElement);
            }
        });
        
        basket.onclick = () => {
            if(solved) return;
            if (selectedWord) {
                basket.querySelector('.basket-dropzone').appendChild(selectedWord);
                selectedWord.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                selectedWord = null;
            }
        };
    });
    
    wordsContainer.addEventListener('dragover', (e) => {
        if(solved) return;
        e.preventDefault();
    });
    
    wordsContainer.addEventListener('drop', (e) => {
        if(solved) return;
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);
        if (draggableElement) {
            wordsContainer.appendChild(draggableElement);
        }
    });
    
    wordsContainer.onclick = () => {
        if(solved) return;
        if (selectedWord) {
            wordsContainer.appendChild(selectedWord);
            selectedWord.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            selectedWord = null;
        }
    };
    
    const checkBtn = document.getElementById('dd-check');
    checkBtn.onclick = () => {
        if(solved) return;
        let allCorrect = true;
        let anyUnplaced = false;
        
        shuffledItems.forEach((item, index) => {
            const wordEl = document.getElementById(`dd-word-${index}`);
            const parent = wordEl.parentElement;
            if (parent === wordsContainer) {
                anyUnplaced = true;
                allCorrect = false;
            } else {
                const basketId = parent.parentElement.dataset.basket;
                if (basketId !== item.target) {
                    allCorrect = false;
                }
            }
        });
        
        if (anyUnplaced) {
            processItemAnswer(false, document.getElementById('dd-words'));
            return;
        }
        
        if (allCorrect) {
            solved = true;
            checkBtn.style.display = 'none';
            document.querySelectorAll('.basket').forEach(b => b.style.borderColor = 'var(--success)');
            processItemAnswer(true);
        } else {
            processItemAnswer(false, document.getElementById('dd-baskets'));
        }
    };
    
    hintCurrentScreen = () => {
        if(solved) return;
        showAnswerBtn.disabled = true;
        
        shuffledItems.forEach((item, index) => {
            const wordEl = document.getElementById(`dd-word-${index}`);
            const targetBasket = document.getElementById(`basket-${item.target}`);
            targetBasket.appendChild(wordEl);
            wordEl.style.background = '#f1c40f';
        });
        
        setTimeout(() => {
            if(solved) return;
            shuffledItems.forEach((item, index) => {
                const wordEl = document.getElementById(`dd-word-${index}`);
                wordsContainer.appendChild(wordEl);
                wordEl.style.background = 'var(--accent)';
            });
            showAnswerBtn.disabled = false;
        }, 2500);
    };
}

showAnswerBtn.addEventListener('click', () => { if (hintCurrentScreen) hintCurrentScreen(); });
skipBtn.addEventListener('click', () => {
    if (shuffledScreens[currentScreenIndex].type !== 'reading_passage') {
        addError();
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    currentScreenIndex++; loadNextScreen();
});

startBtn.addEventListener('click', () => {
    startTimer(); helperControls.classList.remove('hidden'); progressContainer.classList.remove('hidden');
    showScreen('screen-dynamic'); loadNextScreen();
});

function startConfetti() {
    const canvas = document.getElementById('confetti-canvas'); const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const confetti = []; const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#2ECC71', '#9B59B6'];
    for (let i = 0; i < 150; i++) confetti.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height, size: Math.random() * 10 + 5, color: colors[Math.floor(Math.random() * colors.length)], speedY: Math.random() * 3 + 2, speedX: Math.random() * 2 - 1, rotation: Math.random() * 360, rotationSpeed: Math.random() * 10 - 5 });
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); let active = false;
        confetti.forEach(c => {
            c.y += c.speedY; c.x += c.speedX; c.rotation += c.rotationSpeed;
            if (c.y < canvas.height) { active = true; ctx.save(); ctx.translate(c.x, c.y); ctx.rotate(c.rotation * Math.PI / 180); ctx.fillStyle = c.color; ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size); ctx.restore(); }
        });
        if (active) requestAnimationFrame(animate);
    }
    animate();
}

document.getElementById('restart-btn').addEventListener('click', () => { location.reload(); });
