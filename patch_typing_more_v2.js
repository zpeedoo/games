const fs = require('fs');
let content = fs.readFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', 'utf8');

const newQuestions = `
    , { type: 'typing', id: 'to2', question: "Use the following word in a meaningful sentence: telescope", trans: "استخدم الكلمة التالية في جملة مفيدة: telescope", answers: ["telescope"], icon: '✍️', containsCheck: true },
    { type: 'typing', id: 'to3', question: "Use the following word in a meaningful sentence: toaster", trans: "استخدم الكلمة التالية في جملة مفيدة: toaster", answers: ["toaster"], icon: '✍️', containsCheck: true },
    { type: 'typing', id: 'to4', question: "Use the following word in a meaningful sentence: crayons", trans: "استخدم الكلمة التالية في جملة مفيدة: crayons", answers: ["crayons"], icon: '✍️', containsCheck: true },
    { type: 'typing', id: 'to5', question: "Use the following word in a meaningful sentence: smart", trans: "استخدم الكلمة التالية في جملة مفيدة: smart", answers: ["smart"], icon: '✍️', containsCheck: true },
    { type: 'typing', id: 'to6', question: "Use the following word in a meaningful sentence: heavy", trans: "استخدم الكلمة التالية في جملة مفيدة: heavy", answers: ["heavy"], icon: '✍️', containsCheck: true },
    { type: 'typing', id: 'to7', question: "Use the following word in a meaningful sentence: dark", trans: "استخدم الكلمة التالية في جملة مفيدة: dark", answers: ["dark"], icon: '✍️', containsCheck: true }
`;

let target = '// Group questions by type to interleave them';
let idx = content.indexOf(target);
let arrayEndIdx = content.lastIndexOf('];', idx);

if (arrayEndIdx !== -1) {
    content = content.slice(0, arrayEndIdx) + newQuestions + '\n];\n' + content.slice(arrayEndIdx + 2);
    fs.writeFileSync('c:/Users/rook0/OneDrive/Desktop/مريم انجليزي/Interactive_Exam_Game/js/game.js', content, 'utf8');
    console.log('Added more questions successfully!');
} else {
    console.log('Could not find insert point!');
}
