export type Locale = 'en' | 'ar'
export const locales: Locale[] = ['en', 'ar']
export const isArabic = (locale: Locale) => locale === 'ar'
export const localePath = (locale: Locale, path = '') => locale === 'ar' ? `/ar${path === '/' ? '' : path}` : path || '/'

export const site = {
  name: 'Mohammed Al Oraibi',
  arabicName: 'محمد العريبي',
  email: 'hello@mohammedaloraibi.com',
  phone: '+000 000 0000',
  location: { en: 'Available remotely for clients in the GCC and internationally', ar: 'متاح عن بعد للعملاء في الخليج وحول العالم' },
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { label: 'X', url: 'https://x.com/' },
    { label: 'GitHub', url: 'https://github.com/' },
  ],
}

export const nav = {
  en: [{label:'Services',href:'/services'},{label:'Projects',href:'/projects'},{label:'Courses',href:'/courses'},{label:'Contact',href:'/contact'}],
  ar: [{label:'الخدمات',href:'/ar/services'},{label:'المشاريع',href:'/ar/projects'},{label:'الدورات',href:'/ar/courses'},{label:'تواصل',href:'/ar/contact'}],
}

export const services = [
  { slug:'technical-consulting', icon:'Compass', title:{en:'Technical Consulting',ar:'الاستشارات التقنية'}, short:{en:'Get clear technical guidance before building your product, website, automation, or digital system.',ar:'احصل على توجيه تقني واضح قبل بناء منتجك أو موقعك أو نظامك الرقمي.'}, status:{en:'Available',ar:'متاحة'}, details:{en:'Architecture reviews, product planning, stack selection, feasibility checks, and implementation roadmaps for founders, creators, and small businesses.',ar:'مراجعة المعمارية، تخطيط المنتجات، اختيار التقنيات، دراسة الجدوى، وخطط تنفيذ واضحة للأفراد والشركات الصغيرة.'}},
  { slug:'web-development', icon:'Code2', title:{en:'Web Development',ar:'تطوير المواقع والتطبيقات'}, short:{en:'Modern, fast, mobile-first websites and web applications built with scalable architecture.',ar:'مواقع وتطبيقات ويب حديثة وسريعة ومتوافقة مع الجوال ومبنية بمعمارية قابلة للتوسع.'}, status:{en:'Project-based',ar:'حسب المشروع'}, details:{en:'Premium landing pages, personal brand sites, business websites, dashboards, and web applications built for performance and maintainability.',ar:'صفحات هبوط احترافية، مواقع شخصية وتجارية، لوحات تحكم، وتطبيقات ويب تركّز على الأداء وسهولة التطوير.'}},
  { slug:'automation', icon:'Workflow', title:{en:'Business Automation',ar:'أتمتة الأعمال'}, short:{en:'Reduce repetitive manual work with smart scripts, workflows, dashboards, and integrations.',ar:'قلّل الأعمال اليدوية المتكررة باستخدام سكربتات ذكية وتدفقات عمل ولوحات متابعة وتكاملات.'}, status:{en:'Audit available',ar:'تدقيق متاح'}, details:{en:'Identify bottlenecks, connect tools, automate reporting, streamline intake, and reduce operational friction.',ar:'تحديد نقاط التعطّل، ربط الأدوات، أتمتة التقارير، تنظيم استقبال الطلبات، وتقليل الهدر التشغيلي.'}},
  { slug:'ai-workflows', icon:'Sparkles', title:{en:'AI Workflows',ar:'تدفقات عمل الذكاء الاصطناعي'}, short:{en:'Use AI tools in a practical way to improve content, development, operations, and productivity.',ar:'استخدم أدوات الذكاء الاصطناعي بطريقة عملية لتحسين المحتوى والتطوير والعمليات والإنتاجية.'}, status:{en:'Consultation',ar:'استشارة'}, details:{en:'Prompt systems, AI-assisted operations, content workflows, research workflows, and practical adoption plans.',ar:'أنظمة توجيه، عمليات مدعومة بالذكاء الاصطناعي، تدفقات محتوى وبحث، وخطط تبنّي عملية.'}},
  { slug:'personal-brand-websites', icon:'PanelsTopLeft', title:{en:'Personal Brand Websites',ar:'مواقع العلامة الشخصية'}, short:{en:'Premium portfolios and personal websites designed to build trust and convert visitors.',ar:'مواقع شخصية ومعارض أعمال احترافية لبناء الثقة وتحويل الزوار إلى عملاء.'}, status:{en:'Limited slots',ar:'مواعيد محدودة'}, details:{en:'A focused website system with positioning, pages, forms, analytics, SEO, and launch guidance.',ar:'نظام موقع متكامل يشمل التمركز، الصفحات، النماذج، التحليلات، السيو، وإرشادات الإطلاق.'}},
  { slug:'training', icon:'GraduationCap', title:{en:'Courses and Training',ar:'الدورات والتدريب'}, short:{en:'Simple, clear, beginner-friendly technical education for students and early-stage developers.',ar:'تعليم تقني واضح ومبسّط ومناسب للمبتدئين والطلاب والمطورين في بداياتهم.'}, status:{en:'Coming soon',ar:'قريباً'}, details:{en:'Practical sessions on programming foundations, websites, automation, AI tools, and technical thinking.',ar:'جلسات عملية في أساسيات البرمجة، المواقع، الأتمتة، أدوات الذكاء الاصطناعي، والتفكير التقني.'}},
] as const

export const projects = [
  { slug:'automation-dashboard', title:{en:'Operations Automation Dashboard',ar:'لوحة أتمتة العمليات'}, summary:{en:'A practical dashboard concept for tracking requests, reducing manual follow-up, and improving response speed.',ar:'تصور لوحة عملية لمتابعة الطلبات وتقليل المتابعة اليدوية وتحسين سرعة الاستجابة.'}, problem:{en:'A small team was losing time across scattered spreadsheets and manual status updates.',ar:'كان فريق صغير يستهلك وقتاً كبيراً بين جداول متفرقة وتحديثات يدوية للحالة.'}, solution:{en:'Designed a streamlined workflow with intake forms, status tracking, reporting views, and automation-ready integrations.',ar:'تم تصميم تدفق عمل منظم يشمل نماذج استقبال، متابعة حالة، تقارير، وتكاملات قابلة للأتمتة.'}, result:{en:'Clearer operations, fewer repetitive checks, and a stronger base for future automation.',ar:'عمليات أوضح، فحوصات متكررة أقل، وقاعدة أفضل للأتمتة المستقبلية.'}, tech:['Next.js','PostgreSQL','Automation','Analytics']},
  { slug:'personal-brand-platform', title:{en:'Personal Brand Platform',ar:'منصة علامة شخصية'}, summary:{en:'A bilingual, SEO-ready personal website system for consultants and creators.',ar:'نظام موقع شخصي ثنائي اللغة وجاهز للسيو للاستشاريين وصناع المحتوى.'}, problem:{en:'Experts often need a simple site that communicates trust while remaining technically discoverable.',ar:'يحتاج الخبراء غالباً إلى موقع بسيط يبني الثقة ويظل واضحاً وقابلاً للاكتشاف تقنياً.'}, solution:{en:'Built a route-based architecture with service pages, case studies, forms, schema, sitemap, and AI-readable pages.',ar:'تم بناء معمارية صفحات تشمل خدمات، دراسات حالة، نماذج، بيانات منظمة، خريطة موقع، وصفحات قابلة للقراءة بالذكاء الاصطناعي.'}, result:{en:'A polished foundation for search visibility, lead capture, and long-term content growth.',ar:'أساس احترافي للظهور في البحث، استقبال العملاء المحتملين، ونمو المحتوى لاحقاً.'}, tech:['Next.js','Payload CMS','SEO','Bilingual']},
] as const

export const courses = [
  { title:{en:'Programming Foundations for Beginners',ar:'أساسيات البرمجة للمبتدئين'}, status:{en:'Register interest',ar:'سجّل اهتمامك'}, description:{en:'A clear path for beginners to understand programming logic, web basics, and practical projects.',ar:'مسار واضح للمبتدئين لفهم منطق البرمجة وأساسيات الويب وبناء مشاريع عملية.'}},
  { title:{en:'Practical AI Tools for Productivity',ar:'أدوات الذكاء الاصطناعي للإنتاجية'}, status:{en:'Planned',ar:'مخطط'}, description:{en:'Learn how to use AI tools responsibly for content, research, workflows, and learning.',ar:'تعلّم استخدام أدوات الذكاء الاصطناعي بمسؤولية في المحتوى والبحث وتدفقات العمل والتعلم.'}},
]

export const faqs = {
 en:[
  ['What services does Mohammed Al Oraibi provide?','Mohammed provides technical consulting, web development, automation planning, AI workflow consulting, personal brand websites, and beginner-friendly technical training.'],
  ['How can I book a technical consultation?','Use the Book a Consultation button. If a Cal.com link is configured, it opens the booking page directly. Otherwise, use the contact form.'],
  ['Does Mohammed build websites and web applications?','Yes. He builds mobile-first websites, landing pages, portfolios, dashboards, and web applications with scalable architecture.'],
  ['Can Mohammed help with automation?','Yes. He helps identify repetitive processes and plan or build scripts, workflows, dashboards, and integrations that reduce manual work.'],
  ['Does Mohammed provide programming courses?','Courses and training sessions are planned. Visitors can register interest on the courses page.'],
  ['What makes the consulting process different?','The process is clear, practical, and focused on choosing the right tools before spending time or money on implementation.'],
 ],
 ar:[
  ['ما الخدمات التي يقدمها محمد العريبي؟','يقدم محمد الاستشارات التقنية، تطوير المواقع، تخطيط الأتمتة، استشارات تدفقات الذكاء الاصطناعي، مواقع العلامة الشخصية، والتدريب التقني المبسّط.'],
  ['كيف يمكنني حجز استشارة تقنية؟','استخدم زر حجز الاستشارة. إذا كان رابط Cal.com مفعلاً سيتم فتح صفحة الحجز مباشرة، ويمكنك أيضاً استخدام نموذج التواصل.'],
  ['هل يبني محمد مواقع وتطبيقات ويب؟','نعم. يبني مواقع متوافقة مع الجوال، صفحات هبوط، معارض أعمال، لوحات تحكم، وتطبيقات ويب بمعمارية قابلة للتوسع.'],
  ['هل يمكن لمحمد المساعدة في الأتمتة؟','نعم. يساعد في تحديد العمليات المتكررة وتخطيط أو بناء سكربتات وتدفقات عمل ولوحات وتكاملات تقلل العمل اليدوي.'],
  ['هل يقدم محمد دورات برمجة؟','الدورات والجلسات التدريبية قيد التخطيط، ويمكن للزوار تسجيل اهتمامهم من صفحة الدورات.'],
  ['ما الذي يميز الاستشارة التقنية؟','العملية واضحة وعملية وتركّز على اختيار الأدوات المناسبة قبل استثمار الوقت أو المال في التنفيذ.'],
 ]
}
