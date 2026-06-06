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

    { type: 'choose_and_use', id: 'cu5', title: "Choose the correct word then use it in a meaningful sentence.", trans: "اختر الكلمة الصحيحة ثم استخدمها في جملة مفيدة.", icon: '🌙', choices: ['light', 'dark', 'bright'], correctChoice: 'dark', targetWord: 'dark', sentenceTemplate: 'Some _______ can glow in the dark.', sentenceChoices: ['crayons', 'toasters', 'books'], sentenceAnswer: 'crayons', sentenceTranslit: 'سام ___ كان جلو إن ذا دارك.', sentenceChoicesPr: ['كرايونز', 'توسترز', 'بوكس'], choicesPr: ['لايت', 'دارك', 'برايت'] },
    { type: 'sentence_builder', id: 'sb-inv', trans: 'الألوان الشمعية والمحمصة من أشهر الاختراعات', context: '💡 Use the word "inventions" — رتّب الجملة!', words: [{w:"Crayons",t:"كرايونز"},{w:"and",t:"أند"},{w:"toasters",t:"توسترز"},{w:"are",t:"آر"},{w:"famous",t:"فيموس"},{w:"inventions.",t:"إنفينشونز"}], icon: '💡' },
    
    // --- Fill in the Blanks with Word Bank ---
    {
        type: 'fill_blanks',
        id: 'fb1',
        title: "Fill in the blanks with the correct word.",
        trans: "املأ الفراغات بالكلمة الصحيحة من الصندوق.",
        words: ['inventions', 'different', 'popped', 'burnt', 'cents'],
        wordsAr: ['اختراعات', 'مختلفة', 'طارت', 'محترقة', 'سنت'],
        sentences: [
            { text: "The cookies were in the oven too long, so they _________.", correct: "burnt",      ar: "الكعكات بقيت في الفرن طويلاً فاحترقت." },
            { text: "You can play the game in _________ ways.",                  correct: "different",  ar: "يمكنك لعب اللعبة بطرق مختلفة." },
            { text: "My grandma gives me five _________ every day to buy candy.", correct: "cents",    ar: "جدتي تعطيني خمسة سنت يومياً لأشتري حلوى." },
            { text: "The computer is one of the most important _________ in our life.", correct: "inventions", ar: "الكمبيوتر من أهم الاختراعات في حياتنا." }
        ]
    },
    {
        type: 'fill_blanks',
        id: 'fb2',
        title: "Fill in the blanks with the correct word.",
        trans: "املأ الفراغات بالكلمة الصحيحة من الصندوق.",
        words: ['toaster', 'popped', 'sides', 'heated', 'ready'],
        wordsAr: ['محمصة', 'طارت', 'جانبان', 'سخّنت', 'جاهز'],
        sentences: [
            { text: "The modern _________ was invented in 1926.", correct: "toaster", ar: "تم اختراع المحمصة الحديثة عام 1926." },
            { text: "It _________ both sides of the bread.",       correct: "heated",  ar: "كانت تسخّن كلا جانبي الخبز." },
            { text: "Then it _________ the toast out.",             correct: "popped",  ar: "ثم أخرجت الخبز المحمص للخارج." },
            { text: "The toast was _________ to eat!",              correct: "ready",   ar: "كان الخبز المحمص جاهزاً للأكل!" }
        ]
    },
    {
        type: 'fill_blanks',
        id: 'fb3',
        title: "Fill in the blanks with the correct word.",
        trans: "املأ الفراغات بالكلمة الصحيحة من الصندوق.",
        words: ['dark', 'smell', 'wash', 'colors', 'write'],
        wordsAr: ['ظلام', 'تشم', 'تغسل', 'ألوان', 'تكتب'],
        sentences: [
            { text: "Today, you can get crayons that you can see in the _________.", correct: "dark",  ar: "اليوم يمكنك الحصول على ألوان شمعية تراها في الظلام." },
            { text: "Some crayons _________ like fruit.",                           correct: "smell", ar: "بعض الألوان الشمعية برائحة الفواكه." },
            { text: "There are crayons that you can use to _________ on a wall.",   correct: "write", ar: "هناك ألوان شمعية تستخدمها للكتابة على الجدار." },
            { text: "Then you can _________ them off!",                             correct: "wash",  ar: "ثم يمكنك غسلها عن الجدار!" }
        ]
    },

    // --- Choose and Use ---
    {
        type: 'choose_and_use',
        id: 'cu1',
        title: "Choose the correct word then use it in a meaningful sentence.",
        trans: "اختر الكلمة الصحيحة ثم استخدمها في جملة مفيدة.",
        img: 'assets/images/crayons.png',
        choices: ['toothbrush', 'crayons', 'soap'],
        correctChoice: 'crayons',
        targetWord: 'crayons',
        sentenceTemplate: 'I use the crayons to _______ my pictures.',
        sentenceChoices: ['color', 'eat', 'fix'],
        sentenceAnswer: 'color',
        sentenceTranslit: 'آي يوز ذا كرايونز تو ___ ماي بيكشِرز.',
        sentenceChoicesPr: ['كالِر', 'إيت', 'فيكس'],
        choicesPr: ['توث براش', 'كرايونز', 'صوب']
    },
    {
        type: 'choose_and_use',
        id: 'cu2',
        title: "Choose the correct word then use it in a meaningful sentence.",
        trans: "اختر الكلمة الصحيحة ثم استخدمها في جملة مفيدة.",
        img: 'assets/images/toaster.png',
        choices: ['stove', 'toaster', 'fridge'],
        correctChoice: 'toaster',
        targetWord: 'toaster',
        sentenceTemplate: 'The toaster _______ both sides of the bread.',
        sentenceChoices: ['heated', 'washed', 'broke'],
        sentenceAnswer: 'heated',
        sentenceTranslit: 'ذا توستر ___ بوث سايدز أوف ذا بريد.',
        sentenceChoicesPr: ['هيتيد', 'ووشت', 'بروك'],
        choicesPr: ['ستوف', 'توستر', 'فريج']
    },
    {
        type: 'choose_and_use',
        id: 'cu3',
        title: "Choose the correct word then use it in a meaningful sentence.",
        trans: "اختر الكلمة الصحيحة ثم استخدمها في جملة مفيدة.",
        img: 'assets/images/telescope.png',
        choices: ['microscope', 'camera', 'telescope'],
        correctChoice: 'telescope',
        targetWord: 'telescope',
        sentenceTemplate: 'The telescope helps us _______ the stars.',
        sentenceChoices: ['see', 'eat', 'wash'],
        sentenceAnswer: 'see',
        sentenceTranslit: 'ذا تيلسكوب هيلبس أس ___ ذا ستارز.',
        sentenceChoicesPr: ['سي', 'إيت', 'ووش'],
        choicesPr: ['مايكروسكوب', 'كاميرا', 'تيلسكوب']
    },
    {
        type: 'choose_and_use',
        id: 'cu4',
        title: "Choose the correct word then use it in a meaningful sentence.",
        trans: "اختر الكلمة الصحيحة ثم استخدمها في جملة مفيدة.",
        img: 'assets/images/cotton_candy.png',
        choices: ['cotton candy', 'chocolate', 'popcorn'],
        correctChoice: 'cotton candy',
        targetWord: 'cotton candy',
        sentenceTemplate: 'Cotton candy is a sweet and _______ food.',
        sentenceChoices: ['light', 'heavy', 'spicy'],
        sentenceAnswer: 'light',
        sentenceTranslit: 'كوتون كاندي إز أ سويت أند ___ فود.',
        sentenceChoicesPr: ['لايت', 'هيفي', 'سبايسي'],
        choicesPr: ['كوتون كاندي', 'تشوكليت', 'بوبكورن']
    },

    // --- Grammar Find ---
    {
        type: 'grammar_find',
        id: 'gf1',
        title: "Find from the passages:",
        trans: "استخرج من النصوص ما يلي:",
        prompts: [
            { label: "A singular noun (اسم مفرد)", key: "singular_noun", answers: ['box', 'toaster', 'dark', 'wall', 'game', 'computer', 'life', 'grandma', 'candy', 'oven', 'bread', 'butter', 'invention', 'chef', 'food', 'car', 'dog', 'ball', 'vet', 'bee', 'van', 'telescope', 'printing press', 'chewing gum', 'cotton candy'] },
            { label: "A past regular verb (فعل ماضٍ منتظم)", key: "regular_verb", answers: ['invented', 'heated', 'popped', 'turned', 'played', 'helped', 'prepared'] },
            { label: "A color word (كلمة لون)", key: "color_word", answers: ['black', 'brown', 'blue', 'red', 'purple', 'orange', 'yellow', 'green'] },
            { label: "An irregular past verb (فعل ماضٍ شاذ)", key: "irregular_verb", answers: ['cost', 'was', 'had', 'got', 'burnt', 'were', 'saw', 'gave', 'made'] },
            { label: "A plural noun (اسم جمع)", key: "plural_noun", answers: ['crayons', 'kinds', 'colors', 'inventions', 'ways', 'cents', 'cookies', 'sides', 'bees', 'animals', 'seeds', 'pictures'] }
        ]
    },
    {
        type: 'grammar_find',
        id: 'gf2',
        title: "Find parts of speech:",
        trans: "استخرج أقسام الكلام التالية من معلوماتك والنصوص:",
        prompts: [
            { label: "A verb in present tense (فعل مضارع)", key: "present_verb", answers: ['cost', 'play', 'gives', 'buy', 'is', 'are', 'see', 'smell', 'change', 'write', 'wash', 'like', 'helps', 'plants', 'put', 'can', 'get', 'has', 'have'] },
            { label: "A compound word or two words (كلمة مركبة)", key: "compound_word", answers: ['cotton candy', 'chewing gum', 'printing press'] },
            { label: "An adjective (صفة)", key: "adjective", answers: ['first', 'different', 'dark', 'favorite', 'modern', 'ready', 'delicious', 'hot', 'sick', 'important', 'sweet', 'dangerous', 'fabulous', 'brave', 'red', 'new', 'young', 'old'] },
            { label: "A preposition (حرف جر)", key: "preposition", answers: ['in', 'to', 'with', 'before', 'like', 'on', 'off', 'for', 'at', 'from', 'of', 'by', 'under', 'over', 'about', 'through', 'into'] },
            { label: "A pronoun (ضمير)", key: "pronoun", answers: ['you', 'i', 'it', 'my', 'me', 'our', 'they', 'them', 'which', 'your', 'she', 'he', 'we', 'us', 'him', 'her', 'their', 'this', 'that'] }
        ]
    },

    // --- Sentence Builder Screens ---
    { type: 'sentence_builder', id: 's1', trans: 'يمكنك الحصول على ألوان شمعية', words: [{w: "you", t: "يو"}, {w: "can", t: "كان"}, {w: "get", t: "جيت"}, {w: "crayons", t: "كرايونز"}], img: 'assets/images/crayons.png' },
    { type: 'sentence_builder', id: 's2', trans: 'أستخدم الألوان الشمعية للرسم', words: [{w: "I", t: "آي"}, {w: "use", t: "يوز"}, {w: "crayons", t: "كرايونز"}, {w: "to", t: "تو"}, {w: "draw", t: "درو"}], img: 'assets/images/crayons.png' },
    { type: 'sentence_builder', id: 's3', trans: 'المحمصة ساخنة جداً', words: [{w: "the", t: "ذا"}, {w: "toaster", t: "توستر"}, {w: "is", t: "إز"}, {w: "very", t: "فيري"}, {w: "hot", t: "هوت"}], img: 'assets/images/toaster.png' },
    { type: 'sentence_builder', id: 's4', trans: 'الطبيب البيطري يساعد الحيوانات المريضة', words: [{w: "a", t: "أ"}, {w: "vet", t: "فيت"}, {w: "helps", t: "هيلبس"}, {w: "sick", t: "سيك"}, {w: "animals", t: "أنيمالز"}], icon: '🧑‍⚕️' },
    { type: 'sentence_builder', id: 's5', trans: 'الخبز المحمص مع الزبدة لذيذ', words: [{w: "toast", t: "توست"}, {w: "with", t: "ويث"}, {w: "butter", t: "باتر"}, {w: "is", t: "إز"}, {w: "delicious", t: "ديليشوس"}], img: 'assets/images/toaster.png' },
    { type: 'sentence_builder', id: 's6', trans: 'أحب غزل البنات', words: [{w: "I", t: "آي"}, {w: "like", t: "لايك"}, {w: "cotton", t: "كوتون"}, {w: "candy", t: "كاندي"}], img: 'assets/images/cotton_candy.png' },

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


    // --- True / False ---
    { type: 'true_false', id: 'tf1', text: "Crayons were invented in 2020.", trans: "تم اختراع الألوان الشمعية عام 2020.", answer: false, img: 'assets/images/crayons.png' },
    { type: 'true_false', id: 'tf2', text: "The first crayon box had 8 colors.", trans: "أول علبة ألوان شمعية كانت تحتوي على 8 ألوان.", answer: true, img: 'assets/images/crayons.png' },
    { type: 'true_false', id: 'tf3', text: "A toaster heats both sides of the bread.", trans: "المحمصة تسخن جانبي الخبز.", answer: true, img: 'assets/images/toaster.png' },
    { type: 'true_false', id: 'tf4', text: "Before the toaster, people heated one side at a time.", trans: "قبل المحمصة، كان الناس يسخنون جانباً واحداً في كل مرة.", answer: true, img: 'assets/images/toaster.png' },


    // --- Window Wheel (عجلة النافذة السحرية) ---
    { type: 'window_wheel', id: 'win1', centerText: 'Vv', targetWord: 'van',  allWords: ['ball','bee','van','fire','fix'],     allWordsAr: ['كرة','نحلة','شاحنة','نار','يصلح'],   icon: '🚐', trans: 'أدر النافذة لتجد الكلمة المطابقة للصورة' },
    { type: 'window_wheel', id: 'win2', centerText: 'Ff', targetWord: 'fire', allWords: ['van','fire','ball','vet','bounce'],   allWordsAr: ['شاحنة','نار','كرة','بيطري','يرتد'], icon: '🔥', trans: 'أدر النافذة لتجد الكلمة المطابقة للصورة' },
    { type: 'window_wheel', id: 'win3', centerText: 'Bb', targetWord: 'bee',  allWords: ['fix','vet','van','bee','fire'],       allWordsAr: ['يصلح','بيطري','شاحنة','نحلة','نار'], icon: '🐝', trans: 'أدر النافذة لتجد الكلمة المطابقة للصورة' },

    // --- Drag & Drop (Nouns & Verbs) - Page 59 ---
    {
        type: 'drag_drop', id: 'dd1', title: "Nouns & Verbs (Page 59)", trans: "صنف الكلمات إلى اسم (Noun) وفعل (Verb)", icon: '🗂️',
        baskets: [{ id: 'noun', title: 'Noun (اسم)' }, { id: 'verb', title: 'Verb (فعل)' }],
        items: [
            { word: 'inventor', target: 'noun', ar: 'مخترع' },
            { word: 'heat',     target: 'verb', ar: 'يُسخّن' },
            { word: 'crayons',  target: 'noun', ar: 'ألوان شمعية' },
            { word: 'wash',     target: 'verb', ar: 'يغسل' },
            { word: 'farmer',   target: 'noun', ar: 'مزارع' },
            { word: 'fix',      target: 'verb', ar: 'يُصلح' }
        ]
    },
    {
        type: 'drag_drop', id: 'dd2', title: "Nouns & Verbs (Page 59)", trans: "صنف الكلمات إلى اسم (Noun) وفعل (Verb)", icon: '🗂️',
        baskets: [{ id: 'noun', title: 'Noun (اسم)' }, { id: 'verb', title: 'Verb (فعل)' }],
        items: [
            { word: 'telescope', target: 'noun', ar: 'تلسكوب' },
            { word: 'invent',    target: 'verb', ar: 'يخترع' },
            { word: 'fire',      target: 'noun', ar: 'نار' },
            { word: 'bounce',    target: 'verb', ar: 'يرتد' },
            { word: 'vet',       target: 'noun', ar: 'بيطري' },
            { word: 'help',      target: 'verb', ar: 'يساعد' }
        ]
    },
    {
        type: 'drag_drop', id: 'dd3', title: "Nouns & Verbs (Page 59)", trans: "صنف الكلمات إلى اسم (Noun) وفعل (Verb)", icon: '🗂️',
        baskets: [{ id: 'noun', title: 'Noun (اسم)' }, { id: 'verb', title: 'Verb (فعل)' }],
        items: [
            { word: 'toaster', target: 'noun', ar: 'محمصة' },
            { word: 'see',     target: 'verb', ar: 'يرى' },
            { word: 'van',     target: 'noun', ar: 'شاحنة' },
            { word: 'smell',   target: 'verb', ar: 'يشم' },
            { word: 'food',    target: 'noun', ar: 'طعام' },
            { word: 'put',     target: 'verb', ar: 'يضع' }
        ]
    }
];

// Group questions by type
let typesMap = {};
screensData.forEach(q => {
    if (!typesMap[q.type]) typesMap[q.type] = [];
    typesMap[q.type].push(q);
});

// Shuffle within each type — different order every session
for (let type in typesMap) {
    typesMap[type] = typesMap[type].sort(() => Math.random() - 0.5);
}

let typeKeys = Object.keys(typesMap);
let interleavedQuestions = [];

// Round-robin cycling: one question per type per round.
// Uses modular index (round % arr.length) so shorter types cycle back
// instead of stopping — guarantees exactly 75 questions.
const maxRounds = Math.ceil(75 / typeKeys.length) + 2;
outer:
for (let round = 0; round < maxRounds; round++) {
    for (let typeKey of typeKeys) {
        if (interleavedQuestions.length >= 75) break outer;
        const arr = typesMap[typeKey];
        interleavedQuestions.push(arr[round % arr.length]);
    }
}

let shuffledScreens = [...readingScreens, ...interleavedQuestions];

let currentScreenIndex = 0;
let score = 0;
let errorsCount = 0;
let answeredSet = new Set(); // tracks indices already scored — prevents double-scoring on Back

let maxScore = interleavedQuestions.length;

let timeLeft = 75 * 60; // 75 minutes for 75 questions
let timerInterval;

const scoreEl = document.getElementById('score');
const maxScoreDisplayEl = document.getElementById('max-score-display');
const errorsEl = document.getElementById('errors');
const timerEl = document.getElementById('timer');
const timerBoard = document.querySelector('.timer-board');
const startBtn = document.getElementById('start-btn');
const helperControls = document.getElementById('helper-controls');
const backBtn = document.getElementById('back-btn');
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

function loadNextScreen(isReload = false) {
    hintCurrentScreen = null;
    showAnswerBtn.onclick = null;
    if (!isReload) updateProgress();
    if (currentScreenIndex >= shuffledScreens.length) { endGame(); return; }

    const screenData = shuffledScreens[currentScreenIndex];
    
    dynamicContent.innerHTML = '';
    dynamicContent.style.animation = 'none';
    dynamicContent.offsetHeight;
    dynamicContent.style.animation = 'fadeIn 0.5s ease-out';
    showAnswerBtn.disabled = false;
    skipBtn.disabled = false;
    backBtn.disabled = currentScreenIndex <= 0;
    
    showAnswerBtn.style.display = 'block';
    skipBtn.innerHTML = '⏭ Skip';
    skipBtn.classList.remove('primary-btn');
    
    switch(screenData.type) {
        case 'reading_passage': renderReadingPassage(screenData); break;
        case 'bubble_pop': renderBubblePop(screenData); break;
        case 'true_false': renderTrueFalse(screenData); break;
        case 'sentence_builder': renderSentenceBuilder(screenData); break;
        case 'spelling_tiles': renderSpellingTiles(screenData); break;
        case 'pop_it_spelling': renderPopItSpelling(screenData); break;
        case 'word_blocks': renderWordBlocks(screenData); break;
        case 'window_wheel': renderWindowWheel(screenData); break;
        case 'drag_drop': renderDragDrop(screenData); break;
        case 'typing': renderTyping(screenData); break;
        case 'fill_blanks': renderFillBlanks(screenData); break;
        case 'choose_and_use': renderChooseAndUse(screenData); break;
        case 'grammar_find': renderGrammarFind(screenData); break;
    }
}

function processItemAnswer(isCorrect, elementToShake = null) {
    if (isCorrect) {
        playSound('success');
        if (!answeredSet.has(currentScreenIndex)) {
            addScore(1);
            answeredSet.add(currentScreenIndex);
        }
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

function renderTyping(data) {
    dynamicContent.innerHTML = `
        <div class="typing-container">
            ${data.img ? `<img src="${data.img}" alt="img" style="max-height: 150px;">` : ''}
            ${data.icon ? `<div style="font-size: 4rem;">${data.icon}</div>` : ''}
            <div class="typing-question">
                ${data.question}
                <span class="transliteration">${data.trans}</span>
            </div>
            <div class="typing-input-wrapper">
                <input type="text" id="typing-input" class="typing-input" placeholder="Type here / اكتب هنا..." autocomplete="off">
                <button class="btn primary-btn typing-check-btn" id="typing-check">Check Answer ✔️</button>
            </div>
        </div>
    `;

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
        
        const isCorrect = data.containsCheck ? data.answers.some(ans => val.includes(ans.toLowerCase())) : data.answers.some(ans => ans.toLowerCase() === val);
        
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


function renderPopItSpelling(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">` : `<div style="font-size: 5rem;">${q.icon}</div>`;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const lettersHtml = alphabet.map(l => `<div class="popit-bubble" data-char="${l.toLowerCase()}">${l}</div>`).join('');
    const targetLetters = q.word.toLowerCase().replace(/[^a-z]/g, '').split('');
    
    const html = `
        <h2>Pop It Spelling Game</h2>
        <p>Pop the letters in the correct order! <span class="transliteration">فقع الحروف بالترتيب الصحيح</span></p>
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
        <p>Pop the bubble with the missing letter! <span class="transliteration">انقر الفقاعة التي تحتوي على الحرف الناقص</span></p>
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
        <p>Is this sentence True 🟢 or False 🔴? <span class="transliteration">هل هذه الجملة صحيحة أم خاطئة؟</span></p>
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
        <p>Click the words to arrange them into a correct sentence! <span class="transliteration">انقر الكلمات لترتيب الجملة الصحيحة</span></p>
        ${q.context ? `<div class="sb-context-note">${q.context}</div>` : ''}
        ${q.trans ? `<div class="transliteration" style="text-align:center; font-size:1rem; margin-bottom:8px;">🌐 ${q.trans}</div>` : ''}
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


function renderSpellingTiles(q) {
    let visualHtml = q.img ? `<img src="${q.img}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">` : `<div class="spelling-word-icon">${q.icon}</div>`;
    
    const html = `
        <h2>Spelling Game</h2>
        <p>Click the letters to spell the word correctly! <span class="transliteration">انقر الحروف لتهجئة الكلمة الصحيحة</span></p>
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
        const arLabel = q.allWordsAr && q.allWordsAr[index] ? `<span class="window-word-ar">${q.allWordsAr[index]}</span>` : '';
        wordEl.innerHTML = word + arLabel;
        wordEl.style.transform = `rotate(-${angle}deg)`;
        // Keep words upright for readability
        
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
        wordEl.innerHTML = item.word + (item.ar ? `<span class="word-ar-label">${item.ar}</span>` : '');
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

// ==========================================================================
// New Question Type Renderers (Fill Blanks, Choose & Use, Grammar Find)
// ==========================================================================

function renderFillBlanks(q) {
    // Build sentence rows with Arabic translation under each sentence
    let sentencesHtml = q.sentences.map((s, index) => {
        let sentenceText = s.text.replace(/_________/g, `<span class="blank-slot" id="fb-slot-${index}" data-correct="${s.correct}" data-index="${index}"></span>`);
        return `
            <div class="fb-sentence-row">
                <span style="margin-right: 10px; color: var(--primary); font-weight: 900;">${index + 1}.</span>
                <span>${sentenceText}</span>
                ${s.ar ? `<span class="transliteration" style="width:100%; margin-top:3px; margin-right:20px;">🌐 ${s.ar}</span>` : ''}
            </div>
        `;
    }).join('');

    // Build wordsAr lookup map
    const wordsArMap = {};
    (q.words || []).forEach((w, i) => { if (q.wordsAr && q.wordsAr[i]) wordsArMap[w] = q.wordsAr[i]; });

    let shuffledWords = [...q.words].sort(() => Math.random() - 0.5);

    const html = `
        <h2>${q.title}</h2>
        <p>${q.trans}</p>

        <div class="fb-container" id="fb-container">
            <!-- Word Bank -->
            <div class="drag-words-container" id="fb-bank" style="min-height: 60px; padding: 10px; border: 2px dashed #ccc; border-radius: 10px; width: 100%; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                ${shuffledWords.map((w, index) => `
                    <div class="drag-word" draggable="true" id="fb-word-${index}" data-word="${w}">
                        ${w}
                        ${wordsArMap[w] ? `<span class="word-ar-label">${wordsArMap[w]}</span>` : ''}
                    </div>
                `).join('')}
            </div>

            <!-- Sentences -->
            <div class="fb-sentences">
                ${sentencesHtml}
            </div>

            <button class="btn check-btn" id="fb-check" style="margin-top: 10px;">Check Answer ✔️</button>
        </div>
    `;
    dynamicContent.innerHTML = html;

    const bankContainer = document.getElementById('fb-bank');
    const checkBtn = document.getElementById('fb-check');
    let solved = false;
    let selectedWordEl = null;

    // Add interactivity to words in the bank
    const words = document.querySelectorAll('#fb-bank .drag-word');
    words.forEach(wordEl => {
        // Drag events
        wordEl.addEventListener('dragstart', (e) => {
            if (solved) return;
            wordEl.classList.add('dragging');
            e.dataTransfer.setData('text/plain', wordEl.id);
        });

        wordEl.addEventListener('dragend', () => {
            wordEl.classList.remove('dragging');
        });

        // Click fallback for touch screens
        wordEl.addEventListener('click', (e) => {
            if (solved) return;
            e.stopPropagation();
            if (selectedWordEl) {
                selectedWordEl.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
            if (selectedWordEl === wordEl) {
                selectedWordEl = null;
            } else {
                selectedWordEl = wordEl;
                wordEl.style.boxShadow = '0 0 10px 5px var(--primary)';
            }
        });
    });

    // Slots click and drag handlers
    const slots = document.querySelectorAll('.blank-slot');
    slots.forEach(slot => {
        // Drag over and drop
        slot.addEventListener('dragover', (e) => {
            if (solved) return;
            e.preventDefault();
            slot.style.background = '#cbd5e0';
        });

        slot.addEventListener('dragleave', () => {
            if (solved) return;
            slot.style.background = '#edf2f7';
        });

        slot.addEventListener('drop', (e) => {
            if (solved) return;
            e.preventDefault();
            slot.style.background = '#edf2f7';
            const wordId = e.dataTransfer.getData('text/plain');
            const wordEl = document.getElementById(wordId);
            if (wordEl) {
                placeWordInSlot(wordEl, slot);
            }
        });

        // Click handler
        slot.addEventListener('click', () => {
            if (solved) return;
            if (slot.classList.contains('filled')) {
                // Return word to bank
                const wordVal = slot.innerText;
                slot.innerText = '';
                slot.classList.remove('filled');
                slot.classList.remove('correct-slot', 'error-slot');
                
                // Unhide the word in the bank
                const wordEl = Array.from(words).find(el => el.dataset.word === wordVal && el.style.display === 'none');
                if (wordEl) {
                    wordEl.style.display = 'block';
                }
            } else if (selectedWordEl) {
                // Place selected word in slot
                placeWordInSlot(selectedWordEl, slot);
                selectedWordEl.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                selectedWordEl = null;
            }
        });
    });

    function placeWordInSlot(wordEl, slot) {
        // If slot is already filled, return previous word to bank
        if (slot.classList.contains('filled')) {
            const oldWordVal = slot.innerText;
            const oldWordEl = Array.from(words).find(el => el.dataset.word === oldWordVal && el.style.display === 'none');
            if (oldWordEl) oldWordEl.style.display = 'block';
        }

        const wordVal = wordEl.dataset.word;
        slot.innerText = wordVal;
        slot.classList.add('filled');
        slot.classList.remove('correct-slot', 'error-slot');
        wordEl.style.display = 'none';
    }

    // Clicking container resets selection
    document.getElementById('fb-container').addEventListener('click', () => {
        if (selectedWordEl) {
            selectedWordEl.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            selectedWordEl = null;
        }
    });

    // Check answer action
    checkBtn.addEventListener('click', () => {
        if (solved) return;
        let allCorrect = true;
        let anyEmpty = false;

        slots.forEach(slot => {
            const wordVal = slot.innerText.trim();
            const correctVal = slot.dataset.correct;

            if (!slot.classList.contains('filled') || wordVal === '') {
                anyEmpty = true;
                allCorrect = false;
                slot.classList.add('error-slot');
                setTimeout(() => slot.classList.remove('error-slot'), 500);
            } else if (wordVal !== correctVal) {
                allCorrect = false;
                slot.classList.add('error-slot');
                // Revert wrong word after 1 sec
                setTimeout(() => {
                    if (solved) return;
                    slot.innerText = '';
                    slot.classList.remove('filled', 'error-slot');
                    const hiddenWordEl = Array.from(words).find(el => el.dataset.word === wordVal && el.style.display === 'none');
                    if (hiddenWordEl) hiddenWordEl.style.display = 'block';
                }, 1000);
            } else {
                slot.classList.add('correct-slot');
            }
        });

        if (anyEmpty) {
            processItemAnswer(false, document.getElementById('fb-sentences'));
            return;
        }

        if (allCorrect) {
            solved = true;
            checkBtn.style.display = 'none';
            processItemAnswer(true);
        } else {
            processItemAnswer(false, document.getElementById('fb-sentences'));
        }
    });

    // Show answer logic (hint)
    hintCurrentScreen = () => {
        if (solved) return;
        showAnswerBtn.disabled = true;

        slots.forEach(slot => {
            slot.innerText = slot.dataset.correct;
            slot.classList.add('filled', 'correct-slot');
            slot.style.borderColor = '#f1c40f';
            slot.style.color = '#f1c40f';
        });

        setTimeout(() => {
            if (solved) return;
            loadNextScreen(true); // reload to clear and let them try/place
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

function renderChooseAndUse(q) {
    let visualHtml = q.img
        ? `<img src="${q.img}" style="max-height: 150px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`
        : (q.icon ? `<div style="font-size: 5rem;">${q.icon}</div>` : '');

    let shuffledChoices = [...q.choices].sort(() => Math.random() - 0.5);

    // Build pronunciation lookup for step-1 choices
    const choicesPrMap = {};
    (q.choices || []).forEach((c, i) => {
        if (q.choicesPr && q.choicesPr[i]) choicesPrMap[c] = q.choicesPr[i];
    });

    // Split sentence template at the blank placeholder
    const parts = (q.sentenceTemplate || '').split('_______');
    const sentBefore = parts[0] || '';
    const sentAfter  = parts[1] || '';

    const html = `
        <h2>${q.title}</h2>
        <p>${q.trans}</p>
        <div class="cu-container">
            ${visualHtml}
            <!-- Step 1: pick correct word -->
            <div class="cu-step-label">Step 1 — Which word matches the picture? 🖼️
                <span class="transliteration">اختر الكلمة التي تطابق الصورة</span>
            </div>
            <div class="cu-choices" id="cu-choices-container">
                ${shuffledChoices.map(c => `
                    <button class="cu-choice-btn" data-choice="${c}">
                        ${c}
                        ${choicesPrMap[c] ? `<span class="cu-sent-pr">${choicesPrMap[c]}</span>` : ''}
                    </button>`).join('')}
            </div>
            <!-- Step 2: complete the sentence -->
            <div class="cu-sentence-section" id="cu-sentence-section">
                <div class="cu-step-label">Step 2 — Complete the sentence! ✍️
                    <span class="transliteration">أكمل الجملة الناقصة</span>
                </div>
                <div class="cu-sentence-display">
                    ${sentBefore}<span class="cu-sent-blank" id="cu-sent-blank">_______</span>${sentAfter}
                </div>
                ${q.sentenceTranslit ? `<div class="transliteration" style="text-align:center; margin-top:-6px; margin-bottom:10px;">${q.sentenceTranslit}</div>` : ''}
                <div class="cu-sent-choices">
                    ${(q.sentenceChoices || []).map((c, i) => `
                        <button class="cu-sent-choice-btn" data-choice="${c}">
                            ${c}
                            ${q.sentenceChoicesPr && q.sentenceChoicesPr[i] ? `<span class="cu-sent-pr">${q.sentenceChoicesPr[i]}</span>` : ''}
                        </button>`).join('')}
                </div>
            </div>
        </div>
    `;
    dynamicContent.innerHTML = html;

    const sentenceSection = document.getElementById('cu-sentence-section');
    const blank = document.getElementById('cu-sent-blank');
    let solved = false;
    let isChoiceCorrect = false;

    // ── Step 1 handlers ──
    const choiceButtons = document.querySelectorAll('.cu-choice-btn');
    choiceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isChoiceCorrect) return;
            if (btn.dataset.choice === q.correctChoice) {
                isChoiceCorrect = true;
                playSound('success');
                choiceButtons.forEach(b => {
                    b.disabled = true;
                    if (b.dataset.choice === q.correctChoice) b.classList.add('correct');
                });
                sentenceSection.classList.add('active');
            } else {
                playSound('error');
                addError();
                btn.classList.add('wrong');
                setTimeout(() => btn.classList.remove('wrong'), 500);
            }
        });
    });

    // ── Step 2 handlers ──
    const sentChoiceBtns = document.querySelectorAll('.cu-sent-choice-btn');
    sentChoiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (solved || !isChoiceCorrect) return;
            if (btn.dataset.choice === q.sentenceAnswer) {
                solved = true;
                btn.classList.add('correct');
                blank.textContent = btn.dataset.choice;
                blank.style.color = 'var(--success)';
                blank.style.borderColor = 'var(--success)';
                sentChoiceBtns.forEach(b => b.disabled = true);
                processItemAnswer(true);
            } else {
                playSound('error');
                addError();
                btn.classList.add('wrong');
                setTimeout(() => btn.classList.remove('wrong'), 500);
            }
        });
    });

    // ── Hint ──
    hintCurrentScreen = () => {
        if (solved) return;
        showAnswerBtn.disabled = true;
        choiceButtons.forEach(b => {
            b.disabled = true;
            if (b.dataset.choice === q.correctChoice) {
                b.style.background = '#f1c40f'; b.style.borderColor = '#f1c40f'; b.style.color = '#fff';
            }
        });
        sentenceSection.classList.add('active');
        if (blank) { blank.textContent = q.sentenceAnswer; blank.style.color = '#f1c40f'; blank.style.borderColor = '#f1c40f'; }
        sentChoiceBtns.forEach(b => {
            b.disabled = true;
            if (b.dataset.choice === q.sentenceAnswer) { b.style.background = '#f1c40f'; b.style.borderColor = '#f1c40f'; b.style.color = '#fff'; }
        });
        setTimeout(() => { if (solved) return; loadNextScreen(true); showAnswerBtn.disabled = false; }, 2500);
    };
}

function renderGrammarFind(q) {
    // Build passage dynamically from readingScreens (with pronunciation for each sentence)
    const passageHtml = readingScreens.map(rs => {
        const sentItems = rs.sentences.map(s => `
            <div class="gf-sent-item" onclick="toggleTTS('${s.en.replace(/'/g,"\\'")}', this)">
                <span class="gf-sent-en">${s.en}</span>
                ${s.ar ? `<span class="gf-sent-ar">🌐 ${s.ar}</span>` : ''}
                <span class="transliteration" style="color:#e1b12c; margin-top:2px;">${s.pr}</span>
            </div>
        `).join('');
        return `<div style="margin-bottom:10px;"><strong style="color:var(--primary);">${rs.title}</strong>${sentItems}</div>`;
    }).join('');

    let rowsHtml = q.prompts.map((p, index) => `
        <div class="gf-row" id="gf-row-${index}">
            <div class="gf-label">${p.label}</div>
            <div class="gf-input-wrapper">
                <input type="text" class="gf-input" id="gf-input-${index}" placeholder="Type word from text..." data-key="${p.key}" autocomplete="off">
            </div>
        </div>
    `).join('');

    const html = `
        <h2>${q.title}</h2>
        <p>${q.trans}</p>

        <div class="gf-passage-box">
            <div class="gf-passage-header">📖 Read the passages carefully — find your answers here!</div>
            <div class="gf-passage-text">${passageHtml}</div>
        </div>

        <div class="gf-container">
            <div class="gf-card">
                ${rowsHtml}
            </div>
            <button class="btn check-btn" id="gf-check" style="margin-top: 10px;">Check Answers ✔️</button>
        </div>
    `;
    dynamicContent.innerHTML = html;

    const checkBtn = document.getElementById('gf-check');
    let solved = false;

    // Handle pressing Enter to go to next inputs
    const inputs = document.querySelectorAll('.gf-input');
    inputs.forEach((input, index) => {
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    checkBtn.click();
                }
            }
        });
    });

    setTimeout(() => {
        if (inputs[0]) inputs[0].focus();
    }, 100);

    // Check action
    checkBtn.addEventListener('click', () => {
        if (solved) return;
        let allCorrect = true;
        let anyEmpty = false;

        q.prompts.forEach((p, index) => {
            const inputEl = document.getElementById(`gf-input-${index}`);
            const val = inputEl.value.trim().toLowerCase();

            if (val === '') {
                anyEmpty = true;
                allCorrect = false;
                inputEl.classList.add('error');
                setTimeout(() => inputEl.classList.remove('error'), 500);
            } else {
                // Match against allowed correct answers array
                const isMatch = p.answers.some(ans => ans.toLowerCase() === val);
                if (isMatch) {
                    inputEl.classList.remove('error');
                    inputEl.classList.add('correct');
                } else {
                    allCorrect = false;
                    inputEl.classList.add('error');
                    setTimeout(() => inputEl.classList.remove('error'), 500);
                }
            }
        });

        if (anyEmpty) {
            processItemAnswer(false, document.querySelector('.gf-card'));
            return;
        }

        if (allCorrect) {
            solved = true;
            checkBtn.style.display = 'none';
            processItemAnswer(true);
        } else {
            processItemAnswer(false, document.querySelector('.gf-card'));
        }
    });

    // Show answer logic
    hintCurrentScreen = () => {
        if (solved) return;
        showAnswerBtn.disabled = true;

        q.prompts.forEach((p, index) => {
            const inputEl = document.getElementById(`gf-input-${index}`);
            // Provide the first correct answer in the array as a sample
            inputEl.value = p.answers[0];
            inputEl.style.borderColor = '#f1c40f';
            inputEl.style.backgroundColor = '#fffbeb';
            inputEl.disabled = true;
        });
        checkBtn.disabled = true;

        setTimeout(() => {
            if (solved) return;
            loadNextScreen(true); // Reverts/disappears after 2 seconds
            showAnswerBtn.disabled = false;
        }, 2000);
    };
}

backBtn.addEventListener('click', () => {
    if (currentScreenIndex <= 0) return;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    hintCurrentScreen = null;
    currentScreenIndex--;
    loadNextScreen(true);
});

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
