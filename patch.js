const fs = require('fs');
let content = fs.readFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', 'utf8');

// 1. Add typing questions to screensData
const typingQs = `
    // --- Typing Questions ---
    { type: 'typing', id: 't1', question: "How many colors were in the crayons box?", trans: "كم عدد الألوان في علبة التلوين؟", answers: ["16", "sixteen"], img: 'assets/images/crayons.png' },
    { type: 'typing', id: 't2', question: "What do we use to see the stars?", trans: "ماذا نستخدم لنرى النجوم؟", answers: ["telescope"], img: 'assets/images/telescope.png' },
    { type: 'typing', id: 't3', question: "Who makes inventions?", trans: "من يصنع الاختراعات؟", answers: ["inventor"], img: 'assets/images/inventor.png' },
    { type: 'typing', id: 't4', question: "What gets hot and makes toast?", trans: "ما الذي يسخن ويصنع الخبز المحمص؟", answers: ["toaster"], img: 'assets/images/toaster.png' },
    { type: 'typing', id: 't5', question: "What is pink, sweet, and sticky?", trans: "ما هو الشيء الوردي والحلو واللزج؟", answers: ["cotton candy"], img: 'assets/images/cotton_candy.png' },

    // --- Grammar Typing Questions ---
    { type: 'typing', id: 'tg1', question: "You shouldn't eat burnt toast. It isn't healthy for you! *The pronoun 'It' refers to ____.", trans: "الضمير 'It' يعود على ماذا؟", answers: ["burnt toast", "toast"], icon: '🍞' },
    { type: 'typing', id: 'tg2', question: "Super Turtle is the fastest. He always wins! *The pronoun 'He' refers to ____.", trans: "الضمير 'He' يعود على ماذا؟", answers: ["super turtle", "turtle"], icon: '🐢' },
    { type: 'typing', id: 'tg3', question: "My grandma gives me five cents every day. She is very nice! *The pronoun 'She' refers to ____.", trans: "الضمير 'She' يعود على ماذا؟", answers: ["grandma", "my grandma"], icon: '👵' },
    { type: 'typing', id: 'tg4', question: "The cookies were in the oven too long, so they burnt. *The pronoun 'they' refers to ____.", trans: "الضمير 'they' يعود على ماذا؟", answers: ["cookies", "the cookies"], icon: '🍪' },
    { type: 'typing', id: 'tf1', question: "Find a singular noun: The old inventor made a new machine.", trans: "استخرج اسماً مفرداً", answers: ["inventor", "machine"], icon: '🔎' },
    { type: 'typing', id: 'tf2', question: "Find a past regular verb: He played with his toys yesterday.", trans: "استخرج فعلاً ماضياً منتظماً", answers: ["played"], icon: '🔎' },
    { type: 'typing', id: 'tf3', question: "Find a color word: The sky is very blue today.", trans: "استخرج كلمة تدل على لون", answers: ["blue"], icon: '🔎' },
    { type: 'typing', id: 'tf4', question: "Find an irregular past verb: The children ate all the sweet cookies.", trans: "استخرج فعلاً ماضياً غير منتظم", answers: ["ate"], icon: '🔎' },
    { type: 'typing', id: 'tf5', question: "Find a plural noun: My friends went to the beautiful park.", trans: "استخرج اسماً للجمع", answers: ["friends"], icon: '🔎' }
`;

// Insert the typingQs right before `];` at the end of screensData.
let insertPos = content.indexOf('];\n\n// Group questions by type');
if (insertPos !== -1) {
    content = content.slice(0, insertPos) + typingQs + content.slice(insertPos);
}

// 2. Remove maze and circle_sorting questions from screensData
let lines = content.split('\n');
lines = lines.filter(line => !line.includes("type: 'maze'") && !line.includes("type: 'circle_sorting'"));
content = lines.join('\n');

// 3. Update interleaving logic
const interleaveOldStart = 'let typeKeys = Object.keys(typesMap);';
const interleaveOldEnd = 'let shuffledScreens = [...readingScreens';
const idxStart = content.indexOf(interleaveOldStart);
const idxEnd = content.indexOf(interleaveOldEnd);

if (idxStart !== -1 && idxEnd !== -1) {
    const interleaveNew = `let typeKeys = Object.keys(typesMap).filter(t => t !== 'bubble_pop' && t !== 'typing');
let interleavedQuestions = [];
let otherTypeIndex = 0;

for (let i = 1; i <= 50; i++) {
    let typeToPick;
    if (i % 5 === 0) {
        typeToPick = 'bubble_pop';
    } else if (i % 5 === 2) {
        typeToPick = 'typing';
    } else {
        typeToPick = typeKeys[otherTypeIndex % typeKeys.length];
        otherTypeIndex++;
    }

    if (typesMap[typeToPick] && typesMap[typeToPick].length > 0) {
        interleavedQuestions.push(typesMap[typeToPick].pop());
    } else {
        let availableTypes = Object.keys(typesMap).filter(t => typesMap[t].length > 0);
        if (availableTypes.length > 0) {
            interleavedQuestions.push(typesMap[availableTypes[0]].pop());
        } else {
            break;
        }
    }
}

`;
    content = content.slice(0, idxStart) + interleaveNew + content.slice(idxEnd);
}

// Fix maxScore properly! The original file had a map over `randomQuestions`.
// We just remove that chunk completely, as we've redefined maxScore.
// We remove:
// randomQuestions.forEach(q => {
//     maxScore += 1;
// });
// Or we just find the string and remove it.
content = content.replace(/let maxScore = 0;\s*\nrandomQuestions\.forEach\(q => \{\s*\n\s*maxScore \+= 1;\s*\n\}\);/g, 'let maxScore = interleavedQuestions.length;');

// 4. Update switch statement and remove maze/circle_sorting
content = content.replace("case 'maze': renderMaze(screenData); break;", '');
content = content.replace("case 'circle_sorting': renderCircleSorting(screenData); break;", '');
content = content.replace("case 'drag_drop': renderDragDrop(screenData); break;", "case 'drag_drop': renderDragDrop(screenData); break;\n        case 'typing': renderTyping(screenData); break;");

// 5. Add renderTyping function
const renderTypingFn = `
function renderTyping(data) {
    dynamicContent.innerHTML = \`
        <div class="typing-container">
            \${data.img ? \`<img src="\${data.img}" alt="img" style="max-height: 150px;">\` : ''}
            \${data.icon ? \`<div style="font-size: 4rem;">\${data.icon}</div>\` : ''}
            <div class="typing-question">
                \${data.question}
                <span class="transliteration">\${data.trans}</span>
            </div>
            <div class="typing-input-wrapper">
                <input type="text" id="typing-input" class="typing-input" placeholder="Type here / اكتب هنا..." autocomplete="off">
                <button class="btn primary-btn typing-check-btn" id="typing-check">Check Answer ✔️</button>
            </div>
        </div>
    \`;

    const inputEl = document.getElementById('typing-input');
    const checkBtn = document.getElementById('typing-check');

    setTimeout(() => inputEl.focus(), 100);

    inputEl.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            checkBtn.click();
        }
    });

    checkBtn.addEventListener('click', () => {
        const val = inputEl.value.trim().toLowerCase();
        if (val === '') return;
        
        const isCorrect = data.answers.some(ans => ans.toLowerCase() === val);
        
        if (isCorrect) {
            inputEl.style.borderColor = 'var(--success)';
            inputEl.style.backgroundColor = '#e8f8f5';
            inputEl.disabled = true;
            checkBtn.disabled = true;
            processItemAnswer(true);
            setTimeout(() => {
                currentScreenIndex++;
                loadNextScreen();
            }, 1000);
        } else {
            inputEl.classList.add('error');
            setTimeout(() => inputEl.classList.remove('error'), 400);
            processItemAnswer(false);
            inputEl.value = '';
            inputEl.focus();
        }
    });

    showAnswerBtn.onclick = () => {
        inputEl.value = data.answers[0]; 
        inputEl.style.borderColor = 'var(--success)';
        inputEl.style.backgroundColor = '#e8f8f5';
        inputEl.disabled = true;
        checkBtn.disabled = true;
        setTimeout(() => {
            loadNextScreen(true);
        }, 2000);
    };

    skipBtn.onclick = () => {
        currentScreenIndex++;
        loadNextScreen();
    };
}
`;
content = content.replace('function processItemAnswer(', renderTypingFn + '\nfunction processItemAnswer(');

// 6. Update loadNextScreen parameter
content = content.replace('function loadNextScreen() {', 'function loadNextScreen(isReload = false) {');
content = content.replace('updateProgress();', 'if (!isReload) updateProgress();');

// 7. Change ALL currentScreenIndex++; loadNextScreen(); inside showAnswerBtn.onclick
lines = content.split('\n');
let insideShowAnswerBtn = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('showAnswerBtn.onclick')) {
        insideShowAnswerBtn = true;
    }
    if (insideShowAnswerBtn && lines[i].includes('currentScreenIndex++; loadNextScreen();')) {
        lines[i] = lines[i].replace('currentScreenIndex++; loadNextScreen();', 'loadNextScreen(true);');
    }
    if (insideShowAnswerBtn && lines[i].includes('skipBtn.onclick')) {
        insideShowAnswerBtn = false; // We reached the next block
    }
    // Also stop if we reach the end of the function (a line starting with '}')
    if (insideShowAnswerBtn && lines[i].match(/^}$/)) {
        insideShowAnswerBtn = false;
    }
}
content = lines.join('\n');

fs.writeFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', content, 'utf8');
console.log('Modifications applied successfully!');
