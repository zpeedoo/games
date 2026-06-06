# بطل الإنجليزية — Interactive Exam Game
## وثيقة السياق الكاملة للمشروع

> **تعليمات:** اقرأ هذا الملف في بداية كل محادثة جديدة قبل أي تعديل على الكود.

---

## 📁 هيكل الملفات

```
مريم انجليزي/
├── Interactive_Exam_Game/
│   ├── index.html              ← هيكل HTML بسيط (80 سطر)
│   ├── js/game.js              ← كل المنطق والبيانات (~2000 سطر)
│   ├── css/style.css           ← التصميم الكامل (~1300 سطر)
│   └── assets/
│       ├── sounds/             ← happy.aac | sad.aac | end.aac
│       └── images/             ← crayons.png | toaster.png | heat.png |
│                                  cotton_candy.png | chewing_gum.png |
│                                  telescope.png | printing_press.png | inventor.png
├── CONTEXT.md                  ← هذا الملف
├── exam_game.html              ← ملف لعبة مختلف (مبسط - 20 سؤال فقط)
├── activity_book_all.md        ← محتوى كتاب النشاط (صفحات 148، 154، 155)
├── student_book_all.md         ← محتوى كتاب الطالب (صفحات 167، 177، 185)
└── the_portfolio_all.md        ← محتوى البورتفوليو (صفحات 53، 54، 59، 62-63، 67-68)
```

---

## 📚 المحتوى التعليمي — الصف الثاني

### Unit 8A — Phonics (أصوات الحروف)
- **الحروف:** b / v / f
- **كلمات الـ b:** bee, bounce, brave, ball, big, blue, brown, Buddy, Burt, better, bouncer, box
- **كلمات الـ v:** vet, viper, van, very, vibrant, Veronica, Vicky, Viktor, Vince
- **كلمات الـ f:** fire, farmer, fence, fix, fly, funny, fabulous, Fred, friendly, falling, food
- **النص الرئيسي:** قصيدة "The Fabulous Vicky Bee" (SB p.167)
- **تمارين المنهاج:** تمييز الحرف الناقص، تصنيف الكلمات، تهجئة

### Unit 8B — Grammar (قواعد)
- **الموضوع:** Superlative Adjectives (صفات التفضيل)
- **القاعدة:**

| الصفة | التفضيل | ملاحظة |
|---|---|---|
| smart | smartest | + est |
| funny | funniest | y → iest |
| big | biggest | مضاعفة + est |
| good | best | شاذ |
| bad | worst | شاذ |
| heavy | heaviest | y → iest |
| small | smallest | + est |
| tall | tallest | + est |
| short | shortest | + est |
| fast | fastest | + est |

- **السياق:** مقارنة Super Turtle (smart ★★★), Super Kangaroo (fast ★★★), Super Elephant (big ★★★, strong ★★★)

### Unit 9 — Reading: Inventions in Our Everyday Lives (SB p.185)
- **Crayons:** invented 1903 | أول صندوق 8 ألوان | سعر 5 سنت | أنواع: dark, fruit smell, color change
- **The Toaster:** invented 1926 | يسخن كلا الجانبين | قبله: كانوا يقلبون الخبز يدوياً
- **مفردات مهمة:** inventor, toaster, heat, cotton candy, chewing gum, telescope, printing press

---

## 🎮 أنواع الألعاب — الحالة بعد جميع التعديلات

| النوع | العدد | وصف اللعبة |
|---|---|---|
| `reading_passage` | 2 | نصوص قابلة للنقر مع TTS + مفردات + نطق عربي |
| `bubble_pop` | 10 | اختر الحرف الناقص في الجملة (b/v/f + t) |
| `fill_blanks` | 3 | word bank — اسحب أو انقر لملء الفراغات |
| `choose_and_use` | 5 | مرحلتان: اختر الكلمة ← أكمل الجملة بخيار من 3 |
| `grammar_find` | 2 | استخرج من النص (النص يظهر كاملاً مع النطق) |
| `sentence_builder` | 7 | رتّب الكلمات لتكوين جملة (كل كلمة لها نطق عربي) |
| `spelling_tiles` | 6 | انقر الحروف المبعثرة لتهجئة الكلمة |
| `pop_it_spelling` | 6 | انقر الحروف بالترتيب على لوحة pop-it |
| `word_blocks` | 8 | قلّب المكعبات للأعلى/أسفل لتهجئة الكلمة |
| `true_false` | 4 | صح أو خطأ — مع صورة ونطق |
| `window_wheel` | 3 | أدر النافذة للكشف عن الكلمة المطابقة للصورة |
| `drag_drop` | 3 | صنّف كلمات: Noun أو Verb بالسحب أو النقر |

### ❌ ألعاب محذوفة نهائياً
- ~~`maze` (Bee Maze)~~ — محذوفة بالكامل (بيانات + render + switch case)
- ~~`word_wheel` (Word Wheel)~~ — محذوفة بالكامل
- ~~`circle_sorting` (Sorting Wheel)~~ — محذوفة بالكامل

---

## ⚙️ نظام الأسئلة والترتيب

### ترتيب العرض
1. `readingScreens` (نصان: Crayons + Toaster) **دائماً أولاً**
2. ثم `interleavedQuestions` بـ **round-robin مع shuffle**:
   - كل نوع يُخلط عشوائياً في بداية كل جلسة → يتغير الترتيب كل مرة
   - الدورة 1: النوع1[0] → النوع2[0] → ... (مختلف كل لعبة)
   - الدورة 2: النوع1[1] → النوع2[1] → ...
   - يستخدم `round % arr.length` لإعادة الدوران على الأنواع الأقصر
   - **الهدف: دائماً 75 سؤالاً بغض النظر عن عدد الأسئلة المتاحة**

### العلامات والنقاط
- **أقصى عدد:** 75 سؤال
- **كل سؤال صحيح** = نقطة واحدة
- **الأخطاء** تُعدّ منفصلة (لا تُخصم من النقاط)
- **`answeredSet`** (Set) — يمنع مضاعفة النقاط لو رجع الطالب للسؤال

### الوقت
- 75 دقيقة | يتحول للبرتقالي < 5 دقائق | للأحمر < 1 دقيقة

---

## 🔘 أزرار المساعدة

```
[⬅️ Back] [💡 Show Answer] [⏭️ Skip]
```

| الزر | الوظيفة | ملاحظة |
|---|---|---|
| ⬅️ Back | يرجع للسؤال السابق | معطّل عند index=0 — لا يُضيف نقطة مرة ثانية |
| 💡 Show Answer | يومض الإجابة بالأصفر 2-2.5 ثانية ثم يتقدم | كل لعبة لها `hintCurrentScreen` خاص |
| ⏭️ Skip | يتجاوز السؤال ويسجل خطأ | النصوص القرائية = "التالي" بدون خطأ |

---

## 📋 بنية البيانات — كل نوع سؤال

### `bubble_pop`
```javascript
{ type: 'bubble_pop', id: 'b1',
  sentence: "The _ees give us honey.",  // الجملة مع الفراغ
  trans: "النحل يعطينا العسل.",          // ترجمة عربية
  correct: "b",                          // الحرف الصحيح
  wrong: ["v", "f"],                     // الحروف الخاطئة
  icon: '🐝'                             // أو img: 'assets/images/X.png'
}
```
⚠️ **ملاحظة:** `b10` يستخدم الحرف `"t"` للكلمة "toaster" (ليس b/v/f)

### `true_false`
```javascript
{ type: 'true_false', id: 'tf1',
  text: "Crayons were invented in 2020.",
  trans: "تم اختراع الألوان الشمعية عام 2020.",
  answer: false,
  img: 'assets/images/crayons.png'
}
```

### `sentence_builder`
```javascript
{ type: 'sentence_builder', id: 's1',
  trans: 'الترجمة العربية للجملة كاملة',   // يظهر تحت context كـ transliteration
  context: '💡 نص تحفيزي اختياري',        // يظهر فوق الكلمات
  words: [{w:"you", t:"يو"}, ...],          // t = نطق عربي لكل كلمة
  img: 'assets/images/X.png'               // أو icon: '🔥'
}
```

### `choose_and_use` — **مرحلتان** ← هيكل كامل
```javascript
{ type: 'choose_and_use', id: 'cu1',
  title: "Choose the correct word...",
  trans: "اختر الكلمة الصحيحة...",
  img: 'assets/images/crayons.png',        // أو icon: '🌙'
  choices: ['toothbrush', 'crayons', 'soap'],  // خيارات المرحلة 1
  correctChoice: 'crayons',
  targetWord: 'crayons',
  // المرحلة 2 — إكمال الجملة بخيار من 3
  sentenceTemplate: 'I use the crayons to _______ my pictures.',
  sentenceChoices: ['color', 'eat', 'fix'],
  sentenceAnswer: 'color',
  sentenceTranslit: 'آي يوز ذا كرايونز تو ___ ماي بيكشِرز.',  // نطق جملة M2
  sentenceChoicesPr: ['كالِر', 'إيت', 'فيكس'],                 // نطق خيارات M2
  choicesPr: ['توث براش', 'كرايونز', 'صوب']                    // نطق خيارات M1
}
```

### `grammar_find` — استخراج من النص
```javascript
{ type: 'grammar_find', id: 'gf1',
  title: "Find from the passages:",
  trans: "استخرج من النصوص ما يلي:",
  prompts: [
    { label: "A singular noun (اسم مفرد)", key: "singular_noun",
      answers: ['box', 'toaster', 'wall', ...] }  // قائمة الإجابات المقبولة
  ]
}
```
⚠️ **ملاحظة:** النص يُعرض ديناميكياً من `readingScreens` مع نطق كل جملة — لا hardcode

### `fill_blanks`
```javascript
{ type: 'fill_blanks', id: 'fb1',
  title: "Fill in the blanks...",
  trans: "املأ الفراغات...",
  words: ['inventions', 'different', 'popped', 'burnt', 'cents'],  // word bank
  sentences: [
    { text: "The cookies ... so they _________.", correct: "burnt" }
  ]
}
```

### `spelling_tiles` / `pop_it_spelling` / `word_blocks`
```javascript
{ type: 'spelling_tiles', id: 'sp1',
  word: 'ball',           // الكلمة المطلوبة
  trans: 'بول (كرة)',     // ترجمة + نطق
  icon: '🏐'              // أو img: 'assets/images/X.png'
}
```

### `drag_drop` — Noun / Verb
```javascript
{ type: 'drag_drop', id: 'dd1',
  title: "Nouns & Verbs",
  trans: "صنف: اسم أو فعل",
  icon: '🗂️',
  baskets: [{ id: 'noun', title: 'Noun (اسم)' }, { id: 'verb', title: 'Verb (فعل)' }],
  items: [{ word: 'inventor', target: 'noun' }, { word: 'heat', target: 'verb' }, ...]
}
```

### `window_wheel`
```javascript
{ type: 'window_wheel', id: 'win1',
  centerText: 'Vv',
  targetWord: 'van',
  allWords: ['ball', 'bee', 'van', 'fire', 'fix'],
  icon: '🚐',
  trans: 'أدر النافذة...'
}
```

---

## 🖥️ دالة `renderGrammarFind` — تفصيل مهم

```javascript
// النص يُبنى من readingScreens مباشرة — يعرض كل جملة مع نطقها
const passageHtml = readingScreens.map(rs => {
    return rs.sentences.map(s => `
        <div class="gf-sent-item" onclick="toggleTTS('...', this)">
            <span class="gf-sent-en">${s.en}</span>
            <span class="transliteration">${s.pr}</span>
        </div>
    `).join('');
}).join('');
```

---

## 🎨 كلاسات CSS المهمة للمعرفة

| الكلاس | الاستخدام |
|---|---|
| `.transliteration` | نطق/ترجمة بالعربي (رمادي صغير تحت النص) |
| `.question-box` | صندوق السؤال الرئيسي |
| `.cu-step-label` | تسمية كل مرحلة في choose_and_use |
| `.cu-sentence-display` | عرض الجملة في المرحلة 2 |
| `.cu-sent-blank` | الفراغ داخل الجملة |
| `.cu-sent-choice-btn` | أزرار خيارات المرحلة 2 |
| `.cu-sent-pr` | نطق عربي تحت زر الخيار |
| `.gf-passage-box` | صندوق النص في grammar_find |
| `.gf-passage-header` | عنوان النص (sticky) |
| `.gf-sent-item` | سطر واحد في النص مع نطقه |
| `.sb-context-note` | ملاحظة فوق الكلمات في sentence_builder |
| `.helper-btn:disabled` | زر Back معطّل |

---

## 🔊 ميزات الصوت

- **happy.aac** — للإجابة الصحيحة
- **sad.aac** — للإجابة الخاطئة
- **end.aac** — موجود لكن **غير مستخدم** حتى الآن
- **TTS (text-to-speech)** — `toggleTTS(text, btnEl)` لقراءة أي نص إنجليزي

---

## ⚠️ أخطاء/ملاحظات مهمة

1. **`bubble_pop[b10]`** يستخدم `correct: "t"` وليس b/v/f — ملاحظة مقصودة للكلمة "toaster"
2. **`answeredSet`** يجب تصفيره عند إعادة التشغيل — لكن `location.reload()` يفعل ذلك تلقائياً
3. **Hints (TypeScript):** ثلاثة متغيرات غير مستخدمة (`item`, `bankContainer`, `choicesContainer`) — تحذيرات فقط، لا تؤثر على التشغيل
4. **النصوص القرائية** (`reading_passage`) لا تحتسب في العلامات — زر Skip يظهر "التالي" بدون تسجيل خطأ
5. **`hintCurrentScreen`** يُعاد تعيينه لكل سؤال جديد عبر `hintCurrentScreen = null` في loadNextScreen

---

## 📝 قائمة choose_and_use الكاملة

| id | الصورة/الأيقونة | خيارات M1 | جملة M2 | خيارات M2 | إجابة M2 |
|---|---|---|---|---|---|
| cu1 | crayons.png | toothbrush / **crayons** / soap | I use the crayons to ___ my pictures. | **color** / eat / fix | color |
| cu2 | toaster.png | stove / **toaster** / fridge | The toaster ___ both sides of the bread. | **heated** / washed / broke | heated |
| cu3 | telescope.png | microscope / camera / **telescope** | The telescope helps us ___ the stars. | **see** / eat / wash | see |
| cu4 | cotton_candy.png | **cotton candy** / chocolate / popcorn | Cotton candy is a sweet and ___ food. | **light** / heavy / spicy | light |
| cu5 | 🌙 | light / **dark** / bright | Some ___ can glow in the dark. | **crayons** / toasters / books | crayons |

---

## 📝 قائمة sentence_builder الكاملة

| id | الجملة الكاملة | الصورة |
|---|---|---|
| s1 | you can get crayons | crayons.png |
| s2 | I use crayons to draw | crayons.png |
| s3 | the toaster is very hot | toaster.png |
| s4 | a vet helps sick animals | 🧑‍⚕️ |
| s5 | toast with butter is delicious | toaster.png |
| s6 | I like cotton candy | cotton_candy.png |
| **sb-inv** | **Crayons and toasters are famous inventions.** | 💡 |

---

*آخر تحديث لهذا الملف: يونيو 2026*
