const fs = require('fs');
let content = fs.readFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', 'utf8');

const oldLogic = `let shuffledScreens = [...readingScreens];
// Slice 50 to get exactly 50 random screens
let randomQuestions = [...screensData].sort(() => Math.random() - 0.5).slice(0, 50);
shuffledScreens.push(...randomQuestions);

let currentScreenIndex = 0;
let score = 0;
let errorsCount = 0;

let maxScore = interleavedQuestions.length;

let timeLeft = 50 * 60; // 50 minutes for 50 questions
let timerInterval;`;

const newLogic = `// Group questions by type to interleave them
let typesMap = {};
screensData.forEach(q => {
    if (!typesMap[q.type]) typesMap[q.type] = [];
    typesMap[q.type].push(q);
});

// Shuffle questions within each type
for (let type in typesMap) {
    typesMap[type] = typesMap[type].sort(() => Math.random() - 0.5);
}

let typeKeys = Object.keys(typesMap);
let interleavedQuestions = [];
let typeIndex = 0;

// Pick exactly 75 questions, cycling through types
for (let i = 0; i < 75; i++) {
    let startTypeIndex = typeIndex;
    let found = false;
    
    do {
        let typeToPick = typeKeys[typeIndex % typeKeys.length];
        if (typesMap[typeToPick] && typesMap[typeToPick].length > 0) {
            interleavedQuestions.push(typesMap[typeToPick].pop());
            typeIndex++;
            found = true;
            break;
        }
        typeIndex++;
    } while ((typeIndex % typeKeys.length) !== (startTypeIndex % typeKeys.length));

    if (!found) break; // All questions exhausted
}

let shuffledScreens = [...readingScreens, ...interleavedQuestions];

let currentScreenIndex = 0;
let score = 0;
let errorsCount = 0;

let maxScore = interleavedQuestions.length;

let timeLeft = 75 * 60; // 75 minutes for 75 questions
let timerInterval;`;

// Using replace with CRLF conversion just in case
content = content.replace(oldLogic.replace(/\n/g, '\r\n'), newLogic);
content = content.replace(oldLogic, newLogic); // fallback

fs.writeFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', content, 'utf8');
console.log('Done!');
