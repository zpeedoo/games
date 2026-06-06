const fs = require('fs');
let content = fs.readFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', 'utf8');

const newQuestions = `
    { type: 'typing', id: 'to2', question: "Use the following word in a meaningful sentence: telescope", trans: "استخدم الكلمة التالية في جملة مفيدة: telescope", answers: ["telescope"], icon: '✍️', containsCheck: true },
    { type: 'typing', id: 'to3', question: "Use the following word in a meaningful sentence: toaster", trans: "استخدم الكلمة التالية في جملة مفيدة: toaster", answers: ["toaster"], icon: '✍️', containsCheck: true },
    { type: 'typing', id: 'to4', question: "Use the following word in a meaningful sentence: crayons", trans: "استخدم الكلمة التالية في جملة مفيدة: crayons", answers: ["crayons"], icon: '✍️', containsCheck: true },
    { type: 'typing', id: 'to5', question: "Use the following word in a meaningful sentence: smart", trans: "استخدم الكلمة التالية في جملة مفيدة: smart", answers: ["smart"], icon: '✍️', containsCheck: true },
    { type: 'typing', id: 'to6', question: "Use the following word in a meaningful sentence: heavy", trans: "استخدم الكلمة التالية في جملة مفيدة: heavy", answers: ["heavy"], icon: '✍️', containsCheck: true },
];`;

content = content.replace('];', newQuestions);

fs.writeFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', content, 'utf8');
console.log('Added more open-ended typing questions!');
