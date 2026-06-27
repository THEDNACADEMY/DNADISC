const ACCEPTING_RESPONSES = true;
const ENABLE_REPORT_EXPORT = true;
const REQUIRE_REMOTE_EMAIL_CHECK = true;
const REQUIRE_LOCAL_EMAIL_ALLOWLIST = false;
const LOCAL_ALLOWED_EMAILS = [
  // "student@example.com",
  // "another.student@example.com"
];
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbybZ2Xs7ydFmlEmiWWO8MnovR4nP1u2ypYi9WrOXPRtsblyU3SXqs9v6BXULdSUTi5Qiw/exec";

const QUESTIONS = [
  {
    prompt: "When a new challenge appears, I usually...",
    ar: "عندما يظهر تحد جديد، أنا عادة...",
    options: [
      { text: "take charge and push for a clear outcome.", ar: "أتولى القيادة وأدفع باتجاه نتيجة واضحة.", code: "D" },
      { text: "picture possibilities and bring energy to the room.", ar: "أتخيل الاحتمالات وأضيف طاقة للمكان.", code: "I" },
      { text: "sense how people are affected and keep things steady.", ar: "أشعر بتأثير الأمر على الناس وأحافظ على الاستقرار.", code: "S" },
      { text: "pause, listen carefully, and analyze what is happening.", ar: "أتوقف، أستمع بعناية، وأحلل ما يحدث.", code: "C" }
    ]
  },
  {
    prompt: "People often rely on me because I...",
    ar: "غالبا يعتمد الناس علي لأنني...",
    options: [
      { text: "make decisions and move things forward.", ar: "أتخذ القرارات وأدفع الأمور إلى الأمام.", code: "D" },
      { text: "create enthusiasm and help people see possibilities.", ar: "أخلق الحماس وأساعد الناس على رؤية الاحتمالات.", code: "I" },
      { text: "stay loyal, patient, and supportive.", ar: "أبقى وفيا وصبورا وداعما.", code: "S" },
      { text: "notice details, words, patterns, and inconsistencies.", ar: "ألاحظ التفاصيل والكلمات والأنماط والتناقضات.", code: "C" }
    ]
  },
  {
    prompt: "In conversation, I prefer to...",
    ar: "في الحديث، أفضل أن...",
    options: [
      { text: "get to the point and define the next step.", ar: "أصل إلى الخلاصة وأحدد الخطوة التالية.", code: "D" },
      { text: "keep the exchange expressive, open, and engaging.", ar: "أجعل الحوار معبرا ومفتوحا وجاذبا.", code: "I" },
      { text: "make sure the tone feels respectful and grounded.", ar: "أتأكد أن النبرة محترمة ومتزنة.", code: "S" },
      { text: "understand the meaning behind what is being said.", ar: "أفهم المعنى وراء الكلام.", code: "C" }
    ]
  },
  {
    prompt: "Under pressure, I may...",
    ar: "تحت الضغط، قد...",
    options: [
      { text: "become more forceful or impatient.", ar: "أصبح أكثر حزما أو أقل صبرا.", code: "D" },
      { text: "talk more, move faster, or look for encouragement.", ar: "أتكلم أكثر، أتحرك أسرع، أو أبحث عن التشجيع.", code: "I" },
      { text: "withdraw from conflict and look for emotional safety.", ar: "أنسحب من الخلاف وأبحث عن أمان عاطفي.", code: "S" },
      { text: "overthink, question, or replay the situation internally.", ar: "أفكر كثيرا، أطرح أسئلة، أو أعيد الموقف داخليا.", code: "C" }
    ]
  },
  {
    prompt: "My strongest working style is...",
    ar: "أسلوبي الأقوى في العمل هو...",
    options: [
      { text: "driving results and removing obstacles.", ar: "تحقيق النتائج وإزالة العوائق.", code: "D" },
      { text: "presenting ideas and inspiring participation.", ar: "عرض الأفكار وإلهام المشاركة.", code: "I" },
      { text: "supporting consistency and helping the team stay connected.", ar: "دعم الاستمرارية ومساعدة الفريق على البقاء مترابطا.", code: "S" },
      { text: "organizing information and improving quality.", ar: "تنظيم المعلومات وتحسين الجودة.", code: "C" }
    ]
  },
  {
    prompt: "I feel most comfortable when...",
    ar: "أشعر براحة أكبر عندما...",
    options: [
      { text: "I have authority, autonomy, and a clear target.", ar: "تكون لدي صلاحية واستقلالية وهدف واضح.", code: "D" },
      { text: "there is positive energy, movement, and recognition.", ar: "توجد طاقة إيجابية وحركة وتقدير.", code: "I" },
      { text: "there is trust, stability, and enough time to adapt.", ar: "يوجد ثقة واستقرار ووقت كاف للتأقلم.", code: "S" },
      { text: "there is clarity, accuracy, and enough time to think.", ar: "يوجد وضوح ودقة ووقت كاف للتفكير.", code: "C" }
    ]
  },
  {
    prompt: "When solving a problem, I tend to...",
    ar: "عند حل مشكلة، أميل إلى أن...",
    options: [
      { text: "act quickly and adjust as needed.", ar: "أتصرف بسرعة وأعدل المسار عند الحاجة.", code: "D" },
      { text: "explore ideas out loud and build momentum with others.", ar: "أستكشف الأفكار بصوت عال وأبني الحماس مع الآخرين.", code: "I" },
      { text: "consider how the solution will feel and affect people.", ar: "أفكر كيف سيشعر الناس بالحل وكيف سيتأثرون به.", code: "S" },
      { text: "break it down and look for the most logical path.", ar: "أقسمها إلى أجزاء وأبحث عن المسار الأكثر منطقية.", code: "C" }
    ]
  },
  {
    prompt: "A situation drains me most when it has...",
    ar: "أكثر ما يستنزفني في الموقف هو وجود...",
    options: [
      { text: "indecision, delay, or lack of ownership.", ar: "تردد أو تأخير أو غياب للمسؤولية.", code: "D" },
      { text: "negativity, isolation, or lack of expression.", ar: "سلبية أو عزلة أو غياب للتعبير.", code: "I" },
      { text: "tension, sudden change, or emotional pressure.", ar: "توتر أو تغيير مفاجئ أو ضغط عاطفي.", code: "S" },
      { text: "confusion, poor standards, or careless communication.", ar: "ارتباك أو ضعف في المعايير أو تواصل غير دقيق.", code: "C" }
    ]
  },
  {
    prompt: "Others may misunderstand me as...",
    ar: "قد يسيء الآخرون فهمي على أنني...",
    options: [
      { text: "too direct when I am trying to be efficient.", ar: "مباشر أكثر من اللازم بينما أحاول أن أكون فعالا.", code: "D" },
      { text: "too expressive when I am trying to create connection.", ar: "معبر أكثر من اللازم بينما أحاول خلق تواصل.", code: "I" },
      { text: "too quiet when I am trying to keep peace.", ar: "هادئ أكثر من اللازم بينما أحاول الحفاظ على السلام.", code: "S" },
      { text: "too critical when I am trying to understand accurately.", ar: "ناقد أكثر من اللازم بينما أحاول الفهم بدقة.", code: "C" }
    ]
  },
  {
    prompt: "My growth edge is often to...",
    ar: "نقطة النمو لدي غالبا هي أن...",
    options: [
      { text: "slow down and include others before deciding.", ar: "أبطئ وأشرك الآخرين قبل اتخاذ القرار.", code: "D" },
      { text: "follow through after the excitement fades.", ar: "أكمل التنفيذ بعد أن يخف الحماس.", code: "I" },
      { text: "speak up sooner and accept necessary change.", ar: "أعبر بشكل أسرع وأقبل التغيير الضروري.", code: "S" },
      { text: "trust action before every detail feels resolved.", ar: "أثق بالحركة قبل أن تبدو كل التفاصيل محسومة.", code: "C" }
    ]
  },
  {
    prompt: "In a team, I naturally help by...",
    ar: "في الفريق، أساعد بشكل طبيعي من خلال...",
    options: [
      { text: "creating direction and accountability.", ar: "خلق الاتجاه والمساءلة.", code: "D" },
      { text: "lifting morale and encouraging participation.", ar: "رفع المعنويات وتشجيع المشاركة.", code: "I" },
      { text: "building trust and maintaining cooperation.", ar: "بناء الثقة والحفاظ على التعاون.", code: "S" },
      { text: "protecting quality and clarifying the process.", ar: "حماية الجودة وتوضيح العملية.", code: "C" }
    ]
  },
  {
    prompt: "When I trust an idea, it is usually because...",
    ar: "عندما أثق بفكرة، يكون السبب غالبا أنها...",
    options: [
      { text: "can produce a strong result.", ar: "يمكن أن تحقق نتيجة قوية.", code: "D" },
      { text: "feels exciting and easy to communicate.", ar: "تبدو مشوقة وسهلة التواصل.", code: "I" },
      { text: "feels stable, useful, and considerate of people.", ar: "تبدو مستقرة ومفيدة ومراعية للناس.", code: "S" },
      { text: "sounds consistent, logical, and well thought through.", ar: "تبدو متسقة ومنطقية ومدروسة.", code: "C" }
    ]
  },
  {
    prompt: "When I enter a new environment, I first notice...",
    ar: "عندما أدخل بيئة جديدة، أول ما ألاحظه هو...",
    options: [
      { text: "who is leading and what needs to be done.", ar: "من يقود وما الذي يجب إنجازه.", code: "D" },
      { text: "the energy, faces, and visible mood of the room.", ar: "طاقة المكان والوجوه والمزاج الظاهر.", code: "I" },
      { text: "whether people feel comfortable and included.", ar: "ما إذا كان الناس مرتاحين ومشمولين.", code: "S" },
      { text: "the structure, tone, rules, and missing information.", ar: "الهيكل والنبرة والقواعد والمعلومات الناقصة.", code: "C" }
    ]
  },
  {
    prompt: "When I disagree, I am most likely to...",
    ar: "عندما أختلف مع أحد، من المرجح أن...",
    options: [
      { text: "challenge the point directly.", ar: "أتحدى الفكرة بشكل مباشر.", code: "D" },
      { text: "try to persuade through energy and examples.", ar: "أحاول الإقناع بالطاقة والأمثلة.", code: "I" },
      { text: "avoid tension until the right moment to speak.", ar: "أتجنب التوتر حتى يحين الوقت المناسب للكلام.", code: "S" },
      { text: "ask questions and test whether the logic holds.", ar: "أطرح أسئلة وأختبر مدى تماسك المنطق.", code: "C" }
    ]
  },
  {
    prompt: "My natural pace is usually...",
    ar: "إيقاعي الطبيعي عادة هو...",
    options: [
      { text: "fast, decisive, and focused on completion.", ar: "سريع وحاسم ومركز على الإنجاز.", code: "D" },
      { text: "active, expressive, and responsive to the mood.", ar: "نشط ومعبر ومتجاوب مع الجو العام.", code: "I" },
      { text: "steady, patient, and consistent.", ar: "ثابت وصبور ومتسق.", code: "S" },
      { text: "careful, thoughtful, and measured.", ar: "حذر ومتأمل ومحسوب.", code: "C" }
    ]
  },
  {
    prompt: "I feel respected when people...",
    ar: "أشعر بالاحترام عندما يقوم الناس ب...",
    options: [
      { text: "trust me with responsibility and decisions.", ar: "يثقون بي في المسؤولية والقرارات.", code: "D" },
      { text: "acknowledge my ideas and presence.", ar: "يعترفون بأفكاري وحضوري.", code: "I" },
      { text: "show patience, kindness, and loyalty.", ar: "يظهرون الصبر واللطف والوفاء.", code: "S" },
      { text: "give clear information and keep their word.", ar: "يعطون معلومات واضحة ويلتزمون بكلامهم.", code: "C" }
    ]
  },
  {
    prompt: "When a plan changes suddenly, I tend to...",
    ar: "عندما تتغير الخطة فجأة، أميل إلى أن...",
    options: [
      { text: "redefine the goal and move forward.", ar: "أعيد تحديد الهدف وأتقدم.", code: "D" },
      { text: "adapt through conversation and fresh ideas.", ar: "أتأقلم من خلال الحوار والأفكار الجديدة.", code: "I" },
      { text: "need a moment to regain stability.", ar: "أحتاج لحظة لاستعادة الاستقرار.", code: "S" },
      { text: "ask what changed, why, and what the implications are.", ar: "أسأل ما الذي تغير ولماذا وما النتائج المتوقعة.", code: "C" }
    ]
  },
  {
    prompt: "I make my best contribution when I can...",
    ar: "أقدم أفضل مساهمة عندما أستطيع أن...",
    options: [
      { text: "lead action and solve difficult problems.", ar: "أقود الحركة وأحل المشكلات الصعبة.", code: "D" },
      { text: "connect people and make ideas feel alive.", ar: "أربط الناس وأجعل الأفكار حية.", code: "I" },
      { text: "support people through consistency and care.", ar: "أدعم الناس بالثبات والرعاية.", code: "S" },
      { text: "bring clarity, accuracy, and thoughtful structure.", ar: "أضيف الوضوح والدقة والهيكل المدروس.", code: "C" }
    ]
  },
  {
    prompt: "The kind of feedback I value most is...",
    ar: "نوع الملاحظات الذي أقدره أكثر هو...",
    options: [
      { text: "direct, practical, and focused on results.", ar: "مباشر وعملي ومركز على النتائج.", code: "D" },
      { text: "encouraging, personal, and energizing.", ar: "مشجع وشخصي ومحفز.", code: "I" },
      { text: "gentle, respectful, and relationship-aware.", ar: "لطيف ومحترم ومراع للعلاقة.", code: "S" },
      { text: "specific, accurate, and supported by examples.", ar: "محدد ودقيق ومدعوم بأمثلة.", code: "C" }
    ]
  },
  {
    prompt: "When I am learning something new, I prefer...",
    ar: "عندما أتعلم شيئا جديدا، أفضل...",
    options: [
      { text: "a clear objective and immediate practice.", ar: "هدفا واضحا وتطبيقا فوريا.", code: "D" },
      { text: "visual examples, discussion, and interaction.", ar: "أمثلة مرئية ونقاشا وتفاعلا.", code: "I" },
      { text: "step-by-step support and time to absorb it.", ar: "دعما تدريجيا ووقتا لاستيعابه.", code: "S" },
      { text: "precise explanations and a logical framework.", ar: "شرحا دقيقا وإطارا منطقيا.", code: "C" }
    ]
  },
  {
    prompt: "In leadership, I naturally focus on...",
    ar: "في القيادة، أركز بشكل طبيعي على...",
    options: [
      { text: "direction, standards, and accountability.", ar: "الاتجاه والمعايير والمساءلة.", code: "D" },
      { text: "vision, motivation, and engagement.", ar: "الرؤية والتحفيز والتفاعل.", code: "I" },
      { text: "trust, stability, and team wellbeing.", ar: "الثقة والاستقرار وراحة الفريق.", code: "S" },
      { text: "process, clarity, and sound judgment.", ar: "العملية والوضوح والحكم السليم.", code: "C" }
    ]
  },
  {
    prompt: "A mistake is hardest for me when it comes from...",
    ar: "يكون الخطأ أصعب علي عندما ينتج عن...",
    options: [
      { text: "hesitation or failure to take ownership.", ar: "التردد أو عدم تحمل المسؤولية.", code: "D" },
      { text: "lack of communication or negative energy.", ar: "ضعف التواصل أو الطاقة السلبية.", code: "I" },
      { text: "carelessness toward people or relationships.", ar: "عدم مراعاة الناس أو العلاقات.", code: "S" },
      { text: "poor preparation, unclear facts, or weak standards.", ar: "ضعف التحضير أو غموض الحقائق أو ضعف المعايير.", code: "C" }
    ]
  },
  {
    prompt: "At my best, I help others by...",
    ar: "في أفضل حالاتي، أساعد الآخرين من خلال...",
    options: [
      { text: "giving courage, direction, and momentum.", ar: "منح الشجاعة والاتجاه والزخم.", code: "D" },
      { text: "bringing hope, visibility, and connection.", ar: "إضافة الأمل والظهور والتواصل.", code: "I" },
      { text: "offering presence, patience, and emotional steadiness.", ar: "تقديم الحضور والصبر والثبات العاطفي.", code: "S" },
      { text: "bringing insight, truth, and careful understanding.", ar: "إضافة البصيرة والحقيقة والفهم المتأني.", code: "C" }
    ]
  },
  {
    prompt: "If I could improve one thing, it would be...",
    ar: "لو استطعت تحسين أمر واحد، فسيكون...",
    options: [
      { text: "being more patient and collaborative.", ar: "أن أكون أكثر صبرا وتعاونا.", code: "D" },
      { text: "being more consistent and focused.", ar: "أن أكون أكثر ثباتا وتركيزا.", code: "I" },
      { text: "being more assertive and open to change.", ar: "أن أكون أكثر حزما وانفتاحا على التغيير.", code: "S" },
      { text: "being more decisive and visible.", ar: "أن أكون أكثر حسما وظهورا.", code: "C" }
    ]
  }
];

const STYLE_DATA = {
  D: {
    label: "Dominance",
    labelAr: "الهيمنة / الحسم",
    title: "Decisive Driver",
    titleAr: "القائد الحاسم",
    essence: "direct, driven, independent, and results oriented",
    essenceAr: "مباشر، مندفع نحو الإنجاز، مستقل، ومركز على النتائج",
    summary: "Your strongest energy moves toward action, ownership, challenge, and visible progress. You are most alive when there is a goal to reach, an obstacle to overcome, or a decision that needs courage.",
    summaryAr: "طاقتك الأقوى تتجه نحو الحركة، تحمل المسؤولية، التحدي، والنتائج الواضحة. تكون في أفضل حضورك عندما يوجد هدف يجب الوصول إليه، أو عائق يجب تجاوزه، أو قرار يحتاج إلى شجاعة.",
    deep: "This style is built for movement. You often read situations through the question, What needs to happen next? You may become impatient with hesitation because your mind naturally searches for leverage, decision, and forward motion.",
    deepAr: "هذا النمط مبني على الحركة. غالبا تقرأ المواقف من خلال سؤال: ما الخطوة التالية؟ وقد يقل صبرك أمام التردد لأن ذهنك يبحث تلقائيا عن نقطة تأثير وقرار وحركة إلى الأمام.",
    strengths: ["Takes initiative quickly", "Handles pressure directly", "Creates momentum when others hesitate", "Sees obstacles as problems to solve", "Protects standards through action"],
    strengthsAr: ["يبادر بسرعة", "يتعامل مع الضغط بشكل مباشر", "يخلق الزخم عندما يتردد الآخرون", "يرى العوائق كمشكلات قابلة للحل", "يحمي المعايير من خلال الفعل"],
    growth: ["Pause before pushing", "Invite quieter voices before deciding", "Check details before committing", "Separate urgency from true importance", "Practice influence without pressure"],
    growthAr: ["توقف لحظة قبل الدفع بقوة", "أشرك الأصوات الهادئة قبل القرار", "راجع التفاصيل قبل الالتزام", "فرق بين الاستعجال والأهمية الحقيقية", "مارس التأثير دون ضغط"],
    communication: "You tend to prefer direct communication, clear outcomes, and practical next steps. Long explanations may feel unnecessary unless they change the decision.",
    communicationAr: "تميل إلى تفضيل التواصل المباشر، النتائج الواضحة، والخطوات العملية. قد تشعر أن الشرح الطويل غير ضروري ما لم يغير القرار.",
    stress: "Under stress, your D energy may become sharper, faster, and more controlling. You may push harder when what you actually need is clearer ownership, fewer distractions, and a calm pause before action.",
    stressAr: "تحت الضغط، قد تصبح طاقة الحسم لديك أكثر حدة وسرعة ورغبة في السيطرة. قد تدفع بقوة أكبر بينما ما تحتاجه فعلا هو وضوح أكثر في المسؤوليات، مشتتات أقل، وتوقف هادئ قبل الفعل.",
    work: "At work, you bring speed, responsibility, and determination. You are useful in moments that require decision, courage, negotiation, recovery, or a strong push toward execution.",
    workAr: "في العمل، تضيف السرعة والمسؤولية والإصرار. تظهر قيمتك في اللحظات التي تحتاج إلى قرار، شجاعة، تفاوض، استعادة المسار، أو دفعة قوية نحو التنفيذ.",
    leadership: "Your leadership gift is direction. People often feel safer when your decisiveness is paired with listening, patience, and emotional awareness.",
    leadershipAr: "موهبتك القيادية هي الاتجاه. يشعر الناس بأمان أكبر عندما يقترن حسمك بالاستماع والصبر والوعي العاطفي.",
    blind: ["Moving faster than the team can absorb", "Sounding harsher than intended", "Skipping details that later matter", "Mistaking caution for resistance"],
    blindAr: ["التحرك أسرع مما يستطيع الفريق استيعابه", "الظهور بحدة أكبر من المقصود", "تجاوز تفاصيل قد تصبح مهمة لاحقا", "اعتبار الحذر مقاومة"],
    environment: "You thrive with autonomy, challenge, measurable goals, and room to make decisions.",
    environmentAr: "تزدهر عندما توجد استقلالية، تحد، أهداف قابلة للقياس، ومساحة لاتخاذ القرار."
  },
  I: {
    label: "Visual",
    labelAr: "البصري / التأثير",
    title: "Expressive Influencer",
    titleAr: "المؤثر التعبيري",
    essence: "expressive, optimistic, visible, and relationally energizing",
    essenceAr: "معبر، متفائل، ظاهر، ويمنح العلاقات طاقة",
    summary: "Your strongest energy moves toward visibility, connection, optimism, and expressive possibility. You often help people see what could be possible before they believe it themselves.",
    summaryAr: "طاقتك الأقوى تتجه نحو الظهور، التواصل، التفاؤل، وإظهار الاحتمالات. غالبا تساعد الناس على رؤية ما يمكن أن يحدث قبل أن يؤمنوا به بأنفسهم.",
    deep: "This style is built for energy exchange. You may process ideas externally, through conversation, examples, imagery, and the emotional atmosphere of the room. When your energy is engaged, others often feel invited into movement.",
    deepAr: "هذا النمط مبني على تبادل الطاقة. قد تعالج الأفكار خارجيا من خلال الحوار والأمثلة والصور الذهنية وجو المكان. عندما تكون طاقتك حاضرة، يشعر الآخرون أنهم مدعوون للحركة.",
    strengths: ["Energizes people", "Communicates ideas with warmth", "Sees possibilities quickly", "Builds engagement and morale", "Makes ideas feel accessible"],
    strengthsAr: ["ينشط الناس", "يوصل الأفكار بدفء", "يرى الاحتمالات بسرعة", "يبني التفاعل والمعنويات", "يجعل الأفكار سهلة الوصول"],
    growth: ["Protect follow-through after excitement fades", "Listen past the first impression", "Balance enthusiasm with structure", "Slow down for details", "Avoid promising more than time allows"],
    growthAr: ["حافظ على المتابعة بعد أن يخف الحماس", "استمع لما بعد الانطباع الأول", "وازن الحماس بالهيكل", "تمهل أمام التفاصيل", "تجنب الوعود التي تتجاوز الوقت المتاح"],
    communication: "You tend to prefer warm, expressive communication with space for ideas, recognition, and human connection.",
    communicationAr: "تميل إلى تفضيل التواصل الدافئ والمعبر، مع مساحة للأفكار والتقدير والاتصال الإنساني.",
    stress: "Under stress, your I energy may become scattered or approval-seeking. You may talk more, move faster, or avoid difficult details that would actually help stabilize the situation.",
    stressAr: "تحت الضغط، قد تصبح طاقة التأثير لديك مشتتة أو باحثة عن القبول. قد تتكلم أكثر، تتحرك أسرع، أو تتجنب تفاصيل صعبة لكنها ضرورية لاستقرار الموقف.",
    work: "At work, you bring connection, creativity, presentation energy, and social momentum. You are useful where people need to be engaged, inspired, welcomed, or persuaded.",
    workAr: "في العمل، تضيف التواصل والإبداع وطاقة العرض والزخم الاجتماعي. تظهر قيمتك عندما يحتاج الناس إلى تفاعل أو إلهام أو ترحيب أو إقناع.",
    leadership: "Your leadership gift is encouragement. People often follow your energy when it is supported by structure, consistency, and accountability.",
    leadershipAr: "موهبتك القيادية هي التشجيع. يتبع الناس طاقتك عندما تكون مدعومة بالهيكل والثبات والمساءلة.",
    blind: ["Losing focus after the beginning", "Underestimating details", "Avoiding uncomfortable feedback", "Depending too much on external response"],
    blindAr: ["فقدان التركيز بعد البداية", "التقليل من أهمية التفاصيل", "تجنب الملاحظات غير المريحة", "الاعتماد الزائد على استجابة الآخرين"],
    environment: "You thrive with interaction, recognition, creative freedom, visible progress, and positive energy.",
    environmentAr: "تزدهر مع التفاعل، التقدير، الحرية الإبداعية، التقدم المرئي، والطاقة الإيجابية."
  },
  S: {
    label: "Kinaesthetic",
    labelAr: "الحسي / الثبات",
    title: "Steady Supporter",
    titleAr: "الداعم الثابت",
    essence: "grounded, loyal, patient, and emotionally aware",
    essenceAr: "متزن، وفي، صبور، وواع عاطفيا",
    summary: "Your strongest energy moves toward stability, loyalty, emotional awareness, and grounded support. You often sense the human impact of decisions before others slow down enough to notice it.",
    summaryAr: "طاقتك الأقوى تتجه نحو الاستقرار والوفاء والوعي العاطفي والدعم المتزن. غالبا تشعر بالأثر الإنساني للقرارات قبل أن يبطئ الآخرون بما يكفي لملاحظته.",
    deep: "This style is built for steadiness. You may process life through felt experience, relationship safety, and the emotional temperature of the environment. When others are rushing, you may instinctively protect continuity and trust.",
    deepAr: "هذا النمط مبني على الثبات. قد تعالج الحياة من خلال التجربة المحسوسة، أمان العلاقة، والحرارة العاطفية للمكان. عندما يندفع الآخرون، قد تحمي بشكل تلقائي الاستمرارية والثقة.",
    strengths: ["Builds trust steadily", "Listens with patience", "Supports people consistently", "Stays calm through tension", "Notices emotional shifts"],
    strengthsAr: ["يبني الثقة بثبات", "يستمع بصبر", "يدعم الناس باستمرار", "يبقى هادئا وسط التوتر", "يلاحظ التحولات العاطفية"],
    growth: ["Speak needs earlier", "Accept healthy conflict", "Move before everything feels safe", "Let change become a tool", "Do not carry peace at the cost of honesty"],
    growthAr: ["عبر عن احتياجاتك مبكرا", "اقبل الخلاف الصحي", "تحرك قبل أن يبدو كل شيء آمنا", "اجعل التغيير أداة", "لا تحمل السلام على حساب الصراحة"],
    communication: "You tend to prefer calm, respectful communication that gives people time and emotional safety.",
    communicationAr: "تميل إلى تفضيل التواصل الهادئ والمحترم الذي يمنح الناس وقتا وأمانا عاطفيا.",
    stress: "Under stress, your S energy may become quiet, avoidant, or overly accommodating. You may hold tension inside while trying to keep the outside peaceful.",
    stressAr: "تحت الضغط، قد تصبح طاقة الثبات لديك أكثر صمتا أو تجنبا أو مبالغة في إرضاء الآخرين. قد تحمل التوتر داخلك بينما تحاول إبقاء الخارج هادئا.",
    work: "At work, you bring consistency, support, practical care, and team trust. You are useful where people need stability, follow-through, patience, and emotional intelligence.",
    workAr: "في العمل، تضيف الاتساق والدعم والرعاية العملية وثقة الفريق. تظهر قيمتك عندما يحتاج الناس إلى استقرار ومتابعة وصبر وذكاء عاطفي.",
    leadership: "Your leadership gift is trust. People feel your steadiness when you combine care with clearer boundaries and more visible direction.",
    leadershipAr: "موهبتك القيادية هي الثقة. يشعر الناس بثباتك عندما تجمع الرعاية بحدود أوضح واتجاه أكثر ظهورا.",
    blind: ["Delaying difficult conversations", "Adapting too much for others", "Resisting necessary change", "Understating your own needs"],
    blindAr: ["تأجيل الحوارات الصعبة", "التكيف الزائد مع الآخرين", "مقاومة التغيير الضروري", "التقليل من احتياجاتك الخاصة"],
    environment: "You thrive with trust, respectful pacing, predictable expectations, and a sense of belonging.",
    environmentAr: "تزدهر مع الثقة، الإيقاع المحترم، التوقعات الواضحة، والشعور بالانتماء."
  },
  C: {
    label: "Auditory",
    labelAr: "السمعي / التحليل",
    title: "Reflective Analyst",
    titleAr: "المحلل المتأمل",
    essence: "thoughtful, precise, observant, and meaning oriented",
    essenceAr: "متأمل، دقيق، ملاحظ، وموجه نحو المعنى",
    summary: "Your strongest energy moves toward thought, language, precision, analysis, and internal clarity. You often understand more than you immediately reveal.",
    summaryAr: "طاقتك الأقوى تتجه نحو التفكير واللغة والدقة والتحليل والوضوح الداخلي. غالبا تفهم أكثر مما تكشفه مباشرة.",
    deep: "This style is built for depth. You may listen for tone, meaning, contradiction, structure, and implication all at once. Others may see quietness while internally you are organizing a full map of what is being said and what is missing.",
    deepAr: "هذا النمط مبني على العمق. قد تستمع إلى النبرة والمعنى والتناقض والهيكل والنتائج الضمنية في الوقت نفسه. قد يرى الآخرون هدوءا بينما أنت داخليا تنظم خريطة كاملة لما يقال وما ينقص.",
    strengths: ["Thinks deeply before speaking", "Notices inconsistencies others miss", "Protects quality and accuracy", "Listens for meaning beneath words", "Brings thoughtful judgment"],
    strengthsAr: ["يفكر بعمق قبل الكلام", "يلاحظ تناقضات لا يراها الآخرون", "يحمي الجودة والدقة", "يستمع للمعنى خلف الكلمات", "يضيف حكما متأنيا"],
    growth: ["Share thoughts sooner", "Avoid overthinking", "Allow good enough to move", "Trust your voice before every detail is perfect", "Do not confuse caution with wisdom every time"],
    growthAr: ["شارك أفكارك في وقت أبكر", "تجنب الإفراط في التفكير", "اسمح لما هو جيد بما يكفي أن يتحرك", "ثق بصوتك قبل اكتمال كل تفصيل", "لا تخلط دائما بين الحذر والحكمة"],
    communication: "You tend to prefer clear, accurate communication with time to think and respect for detail.",
    communicationAr: "تميل إلى تفضيل التواصل الواضح والدقيق، مع وقت للتفكير واحترام للتفاصيل.",
    stress: "Under stress, your C energy may become more internal, critical, or mentally repetitive. You may replay conversations, test meanings, and search for certainty when the next step only requires enough clarity.",
    stressAr: "تحت الضغط، قد تصبح طاقة التحليل لديك أكثر داخلية أو نقدية أو متكررة ذهنيا. قد تعيد الحوارات، تختبر المعاني، وتبحث عن اليقين بينما الخطوة التالية تحتاج فقط إلى وضوح كاف.",
    work: "At work, you bring analysis, structure, refinement, and careful judgment. You are useful where accuracy, planning, quality, listening, and risk awareness matter.",
    workAr: "في العمل، تضيف التحليل والهيكل والتحسين والحكم المتأني. تظهر قيمتك حيث تهم الدقة والتخطيط والجودة والاستماع والوعي بالمخاطر.",
    leadership: "Your leadership gift is clarity. People trust your thinking when you pair precision with timely expression and visible confidence.",
    leadershipAr: "موهبتك القيادية هي الوضوح. يثق الناس بتفكيرك عندما تجمع الدقة بالتعبير في الوقت المناسب والثقة المرئية.",
    blind: ["Waiting too long to speak", "Appearing distant while processing", "Overvaluing certainty", "Holding high standards without explaining them"],
    blindAr: ["الانتظار طويلا قبل الكلام", "الظهور بمسافة أثناء المعالجة", "إعطاء اليقين قيمة أكبر من اللازم", "حمل معايير عالية دون شرحها"],
    environment: "You thrive with clarity, accuracy, respectful tone, time to prepare, and well-defined expectations.",
    environmentAr: "تزدهر مع الوضوح والدقة والنبرة المحترمة ووقت التحضير والتوقعات المحددة."
  }
};

const BLEND_DATA = {
  DI: { en: "You combine drive with expressive influence. You can move fast, persuade others, and create visible momentum. Your impact grows when speed is balanced with listening.", ar: "تجمع بين الاندفاع نحو النتائج والتأثير التعبيري. يمكنك التحرك بسرعة، إقناع الآخرين، وخلق زخم واضح. يكبر تأثيرك عندما تتوازن السرعة مع الاستماع." },
  DS: { en: "You combine drive with steadiness. You can be firm and protective, with a practical instinct for what needs to happen. Your impact grows when strength is balanced with flexibility.", ar: "تجمع بين الحسم والثبات. يمكنك أن تكون قويا وحاميا، مع حس عملي لما يجب أن يحدث. يكبر تأثيرك عندما تتوازن القوة مع المرونة." },
  DC: { en: "You combine drive with analysis. You may be strategic, exacting, independent, and focused on high standards. Your impact grows when precision is balanced with patience.", ar: "تجمع بين الحسم والتحليل. قد تكون استراتيجيا، دقيقا، مستقلا، ومركزا على المعايير العالية. يكبر تأثيرك عندما تتوازن الدقة مع الصبر." },
  ID: { en: "You combine expression with decisiveness. You can sell an idea, create energy, and push action forward. Your impact grows when enthusiasm is supported by discipline.", ar: "تجمع بين التعبير والحسم. يمكنك عرض الفكرة، خلق الطاقة، ودفع الفعل إلى الأمام. يكبر تأثيرك عندما يدعم الحماس بالانضباط." },
  IS: { en: "You combine expression with warmth. You may be encouraging, approachable, and emotionally engaging. Your impact grows when connection is supported by boundaries.", ar: "تجمع بين التعبير والدفء. قد تكون مشجعا، سهل الاقتراب، ومؤثرا عاطفيا. يكبر تأثيرك عندما يدعم التواصل بحدود واضحة." },
  IC: { en: "You combine expression with thoughtfulness. You may communicate ideas with imagination and careful meaning. Your impact grows when visibility is supported by consistency.", ar: "تجمع بين التعبير والتأمل. قد توصل الأفكار بخيال ومعنى دقيق. يكبر تأثيرك عندما يدعم الظهور بالثبات." },
  SD: { en: "You combine steadiness with quiet strength. You may be patient until a line is crossed, then surprisingly firm. Your impact grows when loyalty is balanced with directness.", ar: "تجمع بين الثبات والقوة الهادئة. قد تكون صبورا حتى يتم تجاوز حد معين، ثم تصبح حازما بشكل مفاجئ. يكبر تأثيرك عندما يتوازن الوفاء مع المباشرة." },
  SI: { en: "You combine steadiness with warmth. You may create comfort, belonging, and trust in groups. Your impact grows when support is balanced with follow-through and clarity.", ar: "تجمع بين الثبات والدفء. قد تخلق الراحة والانتماء والثقة داخل المجموعات. يكبر تأثيرك عندما يتوازن الدعم مع المتابعة والوضوح." },
  SC: { en: "You combine steadiness with careful thinking. You may be reliable, observant, patient, and quality-minded. Your impact grows when caution is balanced with timely action.", ar: "تجمع بين الثبات والتفكير المتأني. قد تكون موثوقا، ملاحظا، صبورا، ومهتما بالجودة. يكبر تأثيرك عندما يتوازن الحذر مع الفعل في الوقت المناسب." },
  CD: { en: "You combine analysis with independent drive. You may think deeply, hold strong standards, and act when the logic is clear. Your impact grows when standards are communicated early.", ar: "تجمع بين التحليل والدافع المستقل. قد تفكر بعمق، تحمل معايير قوية، وتتحرك عندما يكون المنطق واضحا. يكبر تأثيرك عندما توضح معاييرك مبكرا." },
  CI: { en: "You combine analysis with expressive insight. You may be thoughtful, articulate, and selective about visibility. Your impact grows when your inner clarity becomes externally visible.", ar: "تجمع بين التحليل والبصيرة التعبيرية. قد تكون متأملا، واضح التعبير، وانتقائيا في الظهور. يكبر تأثيرك عندما يصبح وضوحك الداخلي ظاهرا للآخرين." },
  CS: { en: "You combine analysis with steadiness. You may be reflective, careful, loyal, and sensitive to tone and consistency. Your impact grows when reflection is balanced with confident expression.", ar: "تجمع بين التحليل والثبات. قد تكون متأملا، حذرا، وفيا، وحساسا للنبرة والاتساق. يكبر تأثيرك عندما يتوازن التأمل مع التعبير الواثق." }
};

const form = document.querySelector("#assessmentForm");
const questionsEl = document.querySelector("#questions");
const resultEl = document.querySelector("#result");
const statusEl = document.querySelector("#status");
const closedMessage = document.querySelector("#closedMessage");
const submitButton = document.querySelector("#submitButton");
const resetButton = document.querySelector("#resetButton");
let latestReportData = null;

function renderQuestions() {
  questionsEl.innerHTML = QUESTIONS.map((question, index) => `
    <fieldset class="question">
      <div class="question-title">
        <h3>${index + 1}. ${question.prompt}</h3>
        <h3 class="arabic">${question.ar}</h3>
      </div>
      <div class="choices">
        ${question.options.map((option, optionIndex) => `
          <label class="choice">
            <input type="radio" name="q${index}" value="${option.code}" required>
            <span class="choice-text">
              <span>${option.text}</span>
              <span class="arabic">${option.ar}</span>
            </span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `).join("");
}

function scoreForm(formData) {
  const scores = { D: 0, I: 0, S: 0, C: 0 };
  const answers = [];

  QUESTIONS.forEach((_, index) => {
    const code = formData.get(`q${index}`);
    if (code) {
      scores[code] += 1;
      answers.push(code);
    }
  });

  return { scores, answers };
}

function analyze(scores) {
  const ordered = Object.entries(scores).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const primary = ordered[0][0];
  const secondary = ordered[1][0];
  const lowest = ordered[ordered.length - 1][0];
  const max = ordered[0][1];
  const gap = ordered[0][1] - ordered[1][1];
  const blend = primary + secondary;
  const intensity = max >= 11 ? "Very Strong" : max >= 8 ? "Strong" : max >= 6 ? "Clear" : "Balanced";
  const focus = gap >= 3 ? "focused" : gap === 0 ? "evenly balanced" : "blended";

  return { ordered, primary, secondary, lowest, blend, intensity, focus };
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isLocallyAllowedEmail(email) {
  if (!REQUIRE_LOCAL_EMAIL_ALLOWLIST) return true;
  const normalized = normalizeEmail(email);
  return LOCAL_ALLOWED_EMAILS.map(normalizeEmail).includes(normalized);
}

function renderList(items) {
  return `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function renderBilingualList(enItems, arItems) {
  return `
    <div class="bilingual-block">
      <div>${renderList(enItems)}</div>
      <div class="arabic">${renderList(arItems)}</div>
    </div>
  `;
}

function renderBilingualParagraph(en, ar) {
  return `
    <div class="bilingual-block">
      <div><p>${escapeHTML(en)}</p></div>
      <div class="arabic"><p>${escapeHTML(ar)}</p></div>
    </div>
  `;
}

const INTENSITY_AR = {
  "Very Strong": "قوي جدا",
  Strong: "قوي",
  Clear: "واضح",
  Balanced: "متوازن"
};

const REPORT_LABELS_AR = {
  scoreSnapshot: "ملخص الدرجات",
  executiveSummary: "الملخص التنفيذي",
  coreStrengths: "نقاط القوة الأساسية",
  growthEdges: "نقاط النمو",
  communicationStyle: "أسلوب التواصل",
  stressPattern: "نمط الضغط",
  workplaceStyle: "أسلوب العمل",
  leadershipStyle: "أسلوب القيادة والفريق",
  blindSpots: "نقاط قد لا تكون واضحة",
  whatOthers: "ما الذي يجب أن يعرفه الآخرون",
  styleMap: "خريطة النمط",
  actionPlan: "خطة العمل الشخصية"
};

function renderResult(person, scores, analysis) {
  const primary = STYLE_DATA[analysis.primary];
  const secondary = STYLE_DATA[analysis.secondary];
  const lowest = STYLE_DATA[analysis.lowest];
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0) || 1;
  const blend = BLEND_DATA[analysis.blend] || {
    en: `${primary.label} is supported by ${secondary.label}, creating a mixed profile with more than one visible strength.`,
    ar: `يدعم ${secondary.labelAr} نمط ${primary.labelAr}، مما يخلق ملفا مختلطا بأكثر من قوة ظاهرة.`
  };
  const safeName = escapeHTML(person.name || "Your");
  const focusLine = analysis.focus === "focused"
    ? "This is a focused profile, meaning the primary pattern is noticeably stronger than the supporting styles."
    : analysis.focus === "evenly balanced"
      ? "This is an evenly balanced profile, meaning your behavior may shift depending on the setting and the people around you."
      : "This is a blended profile, meaning your primary style is supported by a meaningful secondary style.";
  const focusLineAr = analysis.focus === "focused"
    ? "هذا ملف مركز، أي أن النمط الأساسي أقوى بوضوح من الأنماط الداعمة."
    : analysis.focus === "evenly balanced"
      ? "هذا ملف متوازن، أي أن سلوكك قد يتغير بحسب المكان والأشخاص من حولك."
      : "هذا ملف ممزوج، أي أن نمطك الأساسي مدعوم بنمط ثانوي مؤثر.";
  const supportLine = `${secondary.label} support adds a second layer to the profile. It does not replace the primary style; it explains how the primary style is expressed.`;
  const supportLineAr = `دعم ${secondary.labelAr} يضيف طبقة ثانية إلى الملف. هو لا يستبدل النمط الأساسي، بل يشرح كيف يظهر هذا النمط في السلوك.`;
  const lowLine = `Your lowest score is ${analysis.lowest} - ${lowest.label}. This does not mean weakness. It points to the energy you may use less automatically, especially when tired, pressured, or focused on your natural strengths.`;
  const lowLineAr = `أدنى درجة لديك هي ${analysis.lowest} - ${lowest.labelAr}. هذا لا يعني ضعفا، بل يشير إلى طاقة قد تستخدمها بشكل أقل تلقائية، خصوصا عند التعب أو الضغط أو التركيز على نقاط قوتك الطبيعية.`;
  const communicationSupport = `Because ${secondary.label} is also present, communication may show a second layer of ${secondary.title.toLowerCase()} energy.`;
  const communicationSupportAr = `وبما أن ${secondary.labelAr} حاضر أيضا، فقد يظهر في التواصل مستوى ثان من طاقة ${secondary.titleAr}.`;
  const othersLine = "To work well with this profile, be clear, respectful, and specific. Do not treat the lowest score as an absence of ability. It is better understood as a less automatic mode of behavior.";
  const othersLineAr = "للتعامل الجيد مع هذا النمط، كن واضحا ومحترما ومحددا. لا تتعامل مع الدرجة الأدنى كغياب للقدرة، بل افهمها كسلوك يحتاج إلى وعي أكبر ليظهر.";

  resultEl.style.display = "block";
  resultEl.innerHTML = `
    <div class="result-head">
      <div>
        <span class="tag">${analysis.intensity} ${analysis.blend} Profile</span>
        <h2 class="profile-title">${safeName}, your core style is ${primary.title}</h2>
        <h2 class="profile-title arabic">النمط الأساسي: ${primary.titleAr}</h2>
        ${renderBilingualParagraph(primary.summary, primary.summaryAr)}
        ${renderBilingualParagraph(blend.en, blend.ar)}
        ${renderBilingualParagraph(lowLine, lowLineAr)}
        <div class="print-actions">
              ${ENABLE_REPORT_EXPORT
                ? '<button type="button" id="printReportButton">Export Report as PDF</button><div class="export-disabled">Choose "Save as PDF" in the print window.</div>'
                : '<button type="button" disabled>Print / Save Report</button><div class="export-disabled">Report export is currently disabled.</div>'
              }
        </div>
      </div>
      <div class="score-card">
        <strong>Score Snapshot / ${REPORT_LABELS_AR.scoreSnapshot}</strong>
        ${["D", "I", "S", "C"].map(code => `
          <div class="bar-row">
            <span>${code} - ${STYLE_DATA[code].label}<br><span class="arabic">${STYLE_DATA[code].labelAr}</span></span>
            <div class="bar"><span style="width:${Math.round((scores[code] / total) * 100)}%"></span></div>
            <strong>${scores[code]}</strong>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="report-grid">
      <div class="report-section wide feature">
        <h3>Executive Summary / ${REPORT_LABELS_AR.executiveSummary}</h3>
        <div class="bilingual-block">
          <p class="quote-box">${safeName} presents a ${analysis.intensity.toLowerCase()} ${analysis.blend} pattern: ${escapeHTML(primary.essence)}, supported by ${escapeHTML(secondary.label.toLowerCase())} energy.</p>
          <p class="quote-box arabic">يعرض هذا الملف نمط ${analysis.blend} بدرجة ${INTENSITY_AR[analysis.intensity]}: ${escapeHTML(primary.essenceAr)}، مدعوما بطاقة ${escapeHTML(secondary.labelAr)}.</p>
        </div>
        ${renderBilingualParagraph(primary.deep, primary.deepAr)}
        ${renderBilingualParagraph(`${focusLine} ${supportLine}`, `${focusLineAr} ${supportLineAr}`)}
      </div>

      <div class="report-section">
        <h3>Core Strengths / ${REPORT_LABELS_AR.coreStrengths}</h3>
        ${renderBilingualList(primary.strengths, primary.strengthsAr)}
      </div>
      <div class="report-section">
        <h3>Growth Edges / ${REPORT_LABELS_AR.growthEdges}</h3>
        ${renderBilingualList(primary.growth, primary.growthAr)}
      </div>
      <div class="report-section">
        <h3>Communication Style / ${REPORT_LABELS_AR.communicationStyle}</h3>
        ${renderBilingualParagraph(primary.communication, primary.communicationAr)}
        ${renderBilingualParagraph(communicationSupport, communicationSupportAr)}
      </div>
      <div class="report-section">
        <h3>Stress Pattern / ${REPORT_LABELS_AR.stressPattern}</h3>
        ${renderBilingualParagraph(primary.stress, primary.stressAr)}
      </div>
      <div class="report-section">
        <h3>Workplace Style / ${REPORT_LABELS_AR.workplaceStyle}</h3>
        ${renderBilingualParagraph(primary.work, primary.workAr)}
        ${renderBilingualParagraph(primary.environment, primary.environmentAr)}
      </div>
      <div class="report-section">
        <h3>Leadership and Team Style / ${REPORT_LABELS_AR.leadershipStyle}</h3>
        ${renderBilingualParagraph(primary.leadership, primary.leadershipAr)}
        ${renderBilingualParagraph(blend.en, blend.ar)}
      </div>
      <div class="report-section">
        <h3>Possible Blind Spots / ${REPORT_LABELS_AR.blindSpots}</h3>
        ${renderBilingualList(primary.blind, primary.blindAr)}
      </div>
      <div class="report-section">
        <h3>What Others Should Know / ${REPORT_LABELS_AR.whatOthers}</h3>
        ${renderBilingualParagraph(othersLine, othersLineAr)}
        ${renderBilingualParagraph(lowLine, lowLineAr)}
      </div>
      <div class="report-section wide">
        <h3>Style Map / ${REPORT_LABELS_AR.styleMap}</h3>
        <table class="mini-table">
          <thead>
            <tr>
              <th>Area / المجال</th>
              <th>Interpretation / التفسير</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary Style<br><span class="arabic">النمط الأساسي</span></td>
              <td>${analysis.primary} - ${escapeHTML(primary.label)}: ${escapeHTML(primary.title)}<br><span class="arabic">${analysis.primary} - ${escapeHTML(primary.labelAr)}: ${escapeHTML(primary.titleAr)}</span></td>
            </tr>
            <tr>
              <td>Secondary Style<br><span class="arabic">النمط الثانوي</span></td>
              <td>${analysis.secondary} - ${escapeHTML(secondary.label)}: adds support and expression to the primary pattern.<br><span class="arabic">${analysis.secondary} - ${escapeHTML(secondary.labelAr)}: يضيف دعما وتعبيرا للنمط الأساسي.</span></td>
            </tr>
            <tr>
              <td>Blend<br><span class="arabic">المزيج</span></td>
              <td>${analysis.blend}: ${escapeHTML(blend.en)}<br><span class="arabic">${escapeHTML(blend.ar)}</span></td>
            </tr>
            <tr>
              <td>Lowest Style<br><span class="arabic">النمط الأقل</span></td>
              <td>${analysis.lowest} - ${escapeHTML(lowest.label)}: the energy that may require more conscious effort.<br><span class="arabic">${analysis.lowest} - ${escapeHTML(lowest.labelAr)}: طاقة قد تحتاج إلى جهد واع أكثر.</span></td>
            </tr>
            <tr>
              <td>Intensity<br><span class="arabic">القوة</span></td>
              <td>${analysis.intensity}: based on the highest score across the 24-question assessment.<br><span class="arabic">${INTENSITY_AR[analysis.intensity]}: بناء على أعلى درجة في التقييم المكون من 24 سؤالا.</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="report-section wide">
        <h3>Personal Action Plan / ${REPORT_LABELS_AR.actionPlan}</h3>
        ${renderBilingualParagraph(
          "For the next 30 days, focus on one strength to use more intentionally and one growth edge to practice in real conversations.",
          "خلال الأيام الثلاثين القادمة، ركز على نقطة قوة واحدة تستخدمها بوعي أكبر، ونقطة نمو واحدة تمارسها في حوارات حقيقية."
        )}
        <table class="mini-table">
          <thead>
            <tr>
              <th>Reflection Question / سؤال للتأمل</th>
              <th>Personal Notes / ملاحظات شخصية</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Where does my primary style help me create the most value?<br><span class="arabic">أين يساعدني نمطي الأساسي على خلق أكبر قيمة؟</span></td>
              <td></td>
            </tr>
            <tr>
              <td>Where might my primary style become too intense under pressure?<br><span class="arabic">أين قد يصبح نمطي الأساسي قويا أكثر من اللازم تحت الضغط؟</span></td>
              <td></td>
            </tr>
            <tr>
              <td>Which lowest-style behavior do I need to practice more consciously?<br><span class="arabic">أي سلوك من النمط الأقل أحتاج إلى ممارسته بوعي أكبر؟</span></td>
              <td></td>
            </tr>
            <tr>
              <td>What is one behavior I will practice this week?<br><span class="arabic">ما السلوك الواحد الذي سأتمرن عليه هذا الأسبوع؟</span></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
  resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function saveSubmission(payload) {
  if (!GOOGLE_SCRIPT_URL) {
    return { skipped: true };
  }

  const body = new URLSearchParams();
  body.set("payload", JSON.stringify(payload));

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body
  });

  return { skipped: false };
}

function checkRemoteAllowedEmail(email) {
  if (!REQUIRE_REMOTE_EMAIL_CHECK || !GOOGLE_SCRIPT_URL) {
    return Promise.resolve({ allowed: true });
  }

  return new Promise((resolve, reject) => {
    const callbackName = `discEmailCheck_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("Email check timed out."));
    }, 12000);

    function cleanup() {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = data => {
      cleanup();
      resolve(data || { allowed: false });
    };

    const url = new URL(GOOGLE_SCRIPT_URL);
    url.searchParams.set("action", "checkEmail");
    url.searchParams.set("email", email);
    url.searchParams.set("callback", callbackName);

    script.onerror = () => {
      cleanup();
      reject(new Error("Email check failed."));
    };
    script.src = url.toString();
    document.body.appendChild(script);
  });
}

form.addEventListener("submit", async event => {
  event.preventDefault();
  if (!ACCEPTING_RESPONSES) return;

  const formData = new FormData(form);
  const person = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim()
  };

  if (!isLocallyAllowedEmail(person.email)) {
        statusEl.textContent = "This email address is not registered for this assessment.";
        return;
      }

  submitButton.disabled = true;
  statusEl.textContent = "Checking access...";

  try {
    const access = await checkRemoteAllowedEmail(person.email);
    if (!access.acceptingResponses) {
      statusEl.textContent = "This assessment is currently closed and not accepting responses.";
      submitButton.disabled = false;
      return;
    }
    if (!access.allowed) {
      statusEl.textContent = access.message || "This email address is not registered for this assessment.";
      submitButton.disabled = false;
      return;
    }
  } catch (error) {
    statusEl.textContent = "Could not verify your email access. Please try again later.";
    submitButton.disabled = false;
    return;
  }

  const { scores, answers } = scoreForm(formData);
  const analysis = analyze(scores);
  const payload = {
    timestamp: new Date().toISOString(),
    ...person,
    scores,
    answers,
    primary: analysis.primary,
    secondary: analysis.secondary,
    blend: analysis.blend,
    lowest: analysis.lowest,
    intensity: analysis.intensity
  };

  statusEl.textContent = "Calculating your result...";
  latestReportData = { person, scores, analysis };
  renderResult(person, scores, analysis);

  try {
    const saveResult = await saveSubmission(payload);
    statusEl.textContent = saveResult.skipped
      ? "Result shown. Google Sheet saving is not connected yet."
      : "Result shown and submission sent.";
  } catch (error) {
    statusEl.textContent = "Result shown. Saving did not complete, so please try again later.";
  } finally {
    submitButton.disabled = false;
  }
});

resetButton.addEventListener("click", () => {
  form.reset();
  resultEl.style.display = "none";
  resultEl.innerHTML = "";
  statusEl.textContent = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

resultEl.addEventListener("click", event => {
  if (ENABLE_REPORT_EXPORT && event.target && event.target.id === "printReportButton") {
    openPrintableReport();
  }
});

function openPrintableReport() {
  if (!latestReportData) {
    statusEl.textContent = "Please complete the assessment before exporting the report.";
    return;
  }

  const reportHTML = buildPrintableReport(latestReportData.person, latestReportData.scores, latestReportData.analysis);
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    statusEl.textContent = "Please allow pop-ups, then click Export Report as PDF again.";
    return;
  }

  printWindow.document.open();
  printWindow.document.write(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>DISC Report</title>
      <base href="${window.location.href}">
      <link rel="stylesheet" href="style.css">
      <style>
        :root {
          --burgundy: #5f0d33;
          --gold: #eddcae;
          --ink: #1c1a17;
          --muted: #655f57;
          --paper: #fffaf2;
          --soft: #f7f0df;
        }
        * { box-sizing: border-box; }
        body {
          margin: 0;
          background: #fff;
          color: var(--ink);
          font-family: Georgia, "Times New Roman", serif;
          line-height: 1.5;
        }
        .pdf-page {
          min-height: 10.6in;
          padding: 0.55in;
          page-break-after: always;
          background: #fff;
        }
        .pdf-page:last-child { page-break-after: auto; }
        .cover {
          min-height: 10.6in;
          border: 2px solid var(--gold);
          background: linear-gradient(180deg, var(--burgundy) 0 44%, var(--paper) 44% 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0.65in;
        }
        .cover h1 {
          color: #fff;
          font-size: 48px;
          margin: 0 0 18px;
        }
        .pdf-logo {
          display: inline-flex;
          align-items: center;
          padding: 0;
          margin-bottom: 28px;
          max-width: 430px;
        }
        .pdf-logo img {
          display: block;
          width: 390px;
          max-width: 100%;
          height: auto;
        }
        .cover .subtitle {
          color: rgba(255,255,255,0.9);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 15px;
          max-width: 520px;
        }
        .cover-card {
          background: #fff;
          border: 1px solid var(--gold);
          padding: 28px;
          max-width: 560px;
        }
        .kicker, .pdf-label {
          color: var(--burgundy);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .cover-card h2 {
          font-size: 32px;
          margin: 8px 0 8px;
        }
        .pdf-header {
          border-bottom: 3px solid var(--burgundy);
          padding-bottom: 12px;
          margin-bottom: 22px;
          display: flex;
          justify-content: space-between;
          gap: 18px;
        }
        .pdf-header h2 {
          margin: 0;
          font-size: 28px;
        }
        .pdf-section {
          border: 1px solid var(--gold);
          padding: 18px;
          margin-bottom: 16px;
          break-inside: avoid;
        }
        .pdf-section h3 {
          color: var(--burgundy);
          margin: 0 0 10px;
          font-size: 19px;
        }
        .pdf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .pdf-score {
          display: grid;
          grid-template-columns: 115px 1fr 35px;
          gap: 10px;
          align-items: center;
          margin: 12px 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
        }
        .pdf-bar {
          height: 12px;
          background: var(--soft);
          border: 1px solid var(--gold);
        }
        .pdf-bar span {
          display: block;
          height: 100%;
          background: var(--burgundy);
        }
        .arabic {
          direction: rtl;
          text-align: right;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.7;
        }
        .bilingual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        ul { margin: 0; padding-left: 18px; }
        .arabic ul { padding-left: 0; padding-right: 18px; }
        .reflection {
          width: 100%;
          border-collapse: collapse;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
        }
        .reflection th,
        .reflection td {
          border: 1px solid var(--gold);
          padding: 12px;
          vertical-align: top;
        }
        .notes-cell { height: 72px; }
        @page { size: letter; margin: 0.35in; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .pdf-page, .cover { min-height: auto; }
        }
      </style>
    </head>
    <body>
      ${reportHTML}
      <script>
        window.addEventListener("load", () => {
          setTimeout(() => window.print(), 350);
        });
      <\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

function buildPrintableReport(person, scores, analysis) {
  const primary = STYLE_DATA[analysis.primary];
  const secondary = STYLE_DATA[analysis.secondary];
  const lowest = STYLE_DATA[analysis.lowest];
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0) || 1;
  const blend = BLEND_DATA[analysis.blend] || {
    en: `${primary.label} is supported by ${secondary.label}, creating a mixed profile with more than one visible strength.`,
    ar: `يدعم ${secondary.labelAr} نمط ${primary.labelAr}، مما يخلق ملفا مختلطا بأكثر من قوة ظاهرة.`
  };
  const safeName = escapeHTML(person.name || "Participant");
  const reportDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const lowLine = `Your lowest score is ${analysis.lowest} - ${lowest.label}. This points to the style you may use less automatically, especially under pressure.`;
  const lowLineAr = `أدنى درجة لديك هي ${analysis.lowest} - ${lowest.labelAr}. يشير ذلك إلى النمط الذي قد تستخدمه بشكل أقل تلقائية، خصوصا تحت الضغط.`;

  const bilingualParagraph = (en, ar) => `
    <div class="bilingual">
      <div><p>${escapeHTML(en)}</p></div>
      <div class="arabic"><p>${escapeHTML(ar)}</p></div>
    </div>
  `;
  const bilingualList = (enItems, arItems) => `
    <div class="bilingual">
      <div>${renderList(enItems)}</div>
      <div class="arabic">${renderList(arItems)}</div>
    </div>
  `;

  return `
    <section class="cover">
      <div>
        <div class="pdf-logo">
          <img src="assets/dna-logo.png" alt="Dynamic Neuro Academy logo">
        </div>
        <h1>DISC Personality Report</h1>
        <p class="subtitle">A bilingual behavioral insight report prepared from the student's DISC assessment responses.</p>
      </div>
      <div class="cover-card">
        <div class="kicker">Prepared For</div>
        <h2>${safeName}</h2>
        <p><strong>Profile:</strong> ${analysis.intensity} ${analysis.blend} - ${escapeHTML(primary.title)}</p>
        <p><strong>النمط:</strong> <span class="arabic">${INTENSITY_AR[analysis.intensity]} ${analysis.blend} - ${escapeHTML(primary.titleAr)}</span></p>
        <p><strong>Date:</strong> ${reportDate}</p>
      </div>
      <div class="subtitle">Confidential student report</div>
    </section>

    <section class="pdf-page">
      <div class="pdf-header">
        <div>
          <div class="pdf-label">Score Snapshot</div>
          <h2>Your DISC Pattern</h2>
        </div>
        <div class="arabic">
          <div class="pdf-label">ملخص الدرجات</div>
          <h2>نمطك في DISC</h2>
        </div>
      </div>
      <div class="pdf-grid">
        <div class="pdf-section">
          <h3>Scores</h3>
          ${["D", "I", "S", "C"].map(code => `
            <div class="pdf-score">
              <span>${code} - ${STYLE_DATA[code].label}</span>
              <div class="pdf-bar"><span style="width:${Math.round((scores[code] / total) * 100)}%"></span></div>
              <strong>${scores[code]}</strong>
            </div>
          `).join("")}
        </div>
        <div class="pdf-section">
          <h3>Profile Map / خريطة النمط</h3>
          <p><strong>Primary:</strong> ${analysis.primary} - ${escapeHTML(primary.title)}</p>
          <p><strong>Secondary:</strong> ${analysis.secondary} - ${escapeHTML(secondary.title)}</p>
          <p><strong>Blend:</strong> ${analysis.blend}</p>
          <p><strong>Lowest:</strong> ${analysis.lowest} - ${escapeHTML(lowest.label)}</p>
          <p class="arabic"><strong>النمط الأساسي:</strong> ${escapeHTML(primary.titleAr)}</p>
          <p class="arabic"><strong>النمط الثانوي:</strong> ${escapeHTML(secondary.titleAr)}</p>
        </div>
      </div>
      <div class="pdf-section">
        <h3>Executive Summary / الملخص التنفيذي</h3>
        ${bilingualParagraph(primary.summary, primary.summaryAr)}
        ${bilingualParagraph(blend.en, blend.ar)}
        ${bilingualParagraph(lowLine, lowLineAr)}
      </div>
    </section>

    <section class="pdf-page">
      <div class="pdf-header">
        <div>
          <div class="pdf-label">Personal Interpretation</div>
          <h2>How This Profile Shows Up</h2>
        </div>
        <div class="arabic">
          <div class="pdf-label">التفسير الشخصي</div>
          <h2>كيف يظهر هذا النمط</h2>
        </div>
      </div>
      <div class="pdf-section">
        <h3>Core Description / الوصف الأساسي</h3>
        ${bilingualParagraph(primary.deep, primary.deepAr)}
      </div>
      <div class="pdf-grid">
        <div class="pdf-section">
          <h3>Core Strengths / نقاط القوة</h3>
          ${bilingualList(primary.strengths, primary.strengthsAr)}
        </div>
        <div class="pdf-section">
          <h3>Growth Edges / نقاط النمو</h3>
          ${bilingualList(primary.growth, primary.growthAr)}
        </div>
      </div>
      <div class="pdf-section">
        <h3>Possible Blind Spots / نقاط قد لا تكون واضحة</h3>
        ${bilingualList(primary.blind, primary.blindAr)}
      </div>
    </section>

    <section class="pdf-page">
      <div class="pdf-header">
        <div>
          <div class="pdf-label">Application</div>
          <h2>Communication, Stress, and Work</h2>
        </div>
        <div class="arabic">
          <div class="pdf-label">التطبيق</div>
          <h2>التواصل والضغط والعمل</h2>
        </div>
      </div>
      <div class="pdf-section">
        <h3>Communication Style / أسلوب التواصل</h3>
        ${bilingualParagraph(primary.communication, primary.communicationAr)}
      </div>
      <div class="pdf-section">
        <h3>Stress Pattern / نمط الضغط</h3>
        ${bilingualParagraph(primary.stress, primary.stressAr)}
      </div>
      <div class="pdf-section">
        <h3>Workplace Style / أسلوب العمل</h3>
        ${bilingualParagraph(primary.work, primary.workAr)}
        ${bilingualParagraph(primary.environment, primary.environmentAr)}
      </div>
      <div class="pdf-section">
        <h3>Leadership and Team Style / أسلوب القيادة والفريق</h3>
        ${bilingualParagraph(primary.leadership, primary.leadershipAr)}
      </div>
    </section>

    <section class="pdf-page">
      <div class="pdf-header">
        <div>
          <div class="pdf-label">Growth Plan</div>
          <h2>Personal Action Plan</h2>
        </div>
        <div class="arabic">
          <div class="pdf-label">خطة النمو</div>
          <h2>خطة العمل الشخصية</h2>
        </div>
      </div>
      <div class="pdf-section">
        ${bilingualParagraph(
          "For the next 30 days, focus on one strength to use more intentionally and one growth edge to practice in real conversations.",
          "خلال الأيام الثلاثين القادمة، ركز على نقطة قوة واحدة تستخدمها بوعي أكبر، ونقطة نمو واحدة تمارسها في حوارات حقيقية."
        )}
      </div>
      <table class="reflection">
        <thead>
          <tr>
            <th>Reflection Question / سؤال للتأمل</th>
            <th>Personal Notes / ملاحظات شخصية</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Where does my primary style help me create the most value?<br><span class="arabic">أين يساعدني نمطي الأساسي على خلق أكبر قيمة؟</span></td>
            <td class="notes-cell"></td>
          </tr>
          <tr>
            <td>Where might my primary style become too intense under pressure?<br><span class="arabic">أين قد يصبح نمطي الأساسي قويا أكثر من اللازم تحت الضغط؟</span></td>
            <td class="notes-cell"></td>
          </tr>
          <tr>
            <td>Which behavior from my lowest style do I need to practice?<br><span class="arabic">أي سلوك من النمط الأقل أحتاج إلى ممارسته؟</span></td>
            <td class="notes-cell"></td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

renderQuestions();

if (!ACCEPTING_RESPONSES) {
  closedMessage.style.display = "block";
  form.style.display = "none";
}
