const fs = require('fs');
let content = fs.readFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', 'utf8');

// 1. Add the new typing question
const newQuestion = `    // --- Open Ended Typing Questions ---
    { type: 'typing', id: 'to1', question: "Use the following word in a meaningful sentence: inventions", trans: "استخدم الكلمة التالية في جملة مفيدة: inventions", answers: ["inventions"], icon: '✍️', containsCheck: true },
];`;
content = content.replace('];\n\n// Group questions by type', newQuestion + '\n\n// Group questions by type');

// 2. Modify the check logic in renderTyping
const oldCheck = `const isCorrect = data.answers.some(ans => ans.toLowerCase() === val);`;
const newCheck = `const isCorrect = data.containsCheck ? data.answers.some(ans => val.includes(ans.toLowerCase())) : data.answers.some(ans => ans.toLowerCase() === val);`;
content = content.replace(oldCheck, newCheck);

fs.writeFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', content, 'utf8');
console.log('Added open-ended typing question!');
