import type { Prompt } from "./types"

export const PROMPTS: Prompt[] = [
  {
    id: "1",
    title_en: "Generate Marketing Campaign Strategy",
    title_fa: "تولید استراتژی کمپین بازاریابی",
    category: "Marketing",
    industry: "E-commerce",
    role: "Marketing Manager",
    prompt_en: `**Persona:** You are a world-class Marketing Strategist with 15+ years of experience in e-commerce and digital marketing. You specialize in creating data-driven, multi-channel campaigns that drive measurable ROI.

**Goal:** Create a comprehensive marketing campaign strategy for a sustainable fashion e-commerce brand launching a new product line.

**Context:** The brand targets environmentally conscious millennials and Gen Z consumers (ages 25-40) with disposable income. The new product line features recycled materials and ethical manufacturing. Budget: $50,000. Timeline: 3 months.

**Requirements:**
- Define 3-5 specific, measurable campaign objectives (e.g., "Increase website traffic by 40%")
- Identify primary and secondary target audience segments with detailed demographics and psychographics
- Recommend 4-6 marketing channels with budget allocation percentages
- Create a detailed content calendar with at least 20 content pieces across channels
- Suggest 5-7 key performance indicators (KPIs) to track campaign success
- Include A/B testing strategies for at least 3 campaign elements
- Provide crisis management protocols for potential negative feedback
- Recommend influencer partnership criteria and outreach strategy
- Include email marketing funnel with 5-7 touchpoints
- Suggest retargeting strategies for cart abandoners and site visitors

**Tone:** Professional, strategic, data-driven, creative

**Format:** Structured document with clear sections, bullet points, tables for budget allocation, and timeline Gantt chart`,
    prompt_fa: `**شخصیت:** شما یک استراتژیست بازاریابی در سطح جهانی با بیش از ۱۵ سال تجربه در تجارت الکترونیک و بازاریابی دیجیتال هستید. تخصص شما ایجاد کمپین‌های چندکاناله مبتنی بر داده است که بازگشت سرمایه قابل اندازه‌گیری ایجاد می‌کنند.

**هدف:** ایجاد یک استراتژی جامع کمپین بازاریابی برای یک برند مد پایدار در حوزه تجارت الکترونیک که در حال راه‌اندازی خط تولید جدید است.

**زمینه:** این برند مصرف‌کنندگان آگاه به محیط زیست از نسل هزاره و نسل Z (۲۵ تا ۴۰ سال) با درآمد قابل تصرف را هدف قرار می‌دهد. خط تولید جدید شامل مواد بازیافتی و تولید اخلاقی است. بودجه: ۵۰,۰۰۰ دلار. بازه زمانی: ۳ ماه.

**الزامات:**
- تعریف ۳ تا ۵ هدف خاص و قابل اندازه‌گیری برای کمپین (مانند "افزایش ۴۰ درصدی ترافیک وب‌سایت")
- شناسایی بخش‌های اولیه و ثانویه مخاطبان هدف با جزئیات جمعیت‌شناختی و روان‌شناختی
- پیشنهاد ۴ تا ۶ کانال بازاریابی همراه با درصد تخصیص بودجه
- ایجاد تقویم محتوای تفصیلی با حداقل ۲۰ قطعه محتوا در کانال‌های مختلف
- پیشنهاد ۵ تا ۷ شاخص کلیدی عملکرد (KPI) برای ردیابی موفقیت کمپین
- شامل استراتژی‌های تست A/B برای حداقل ۳ عنصر کمپین
- ارائه پروتکل‌های مدیریت بحران برای مواجهه با بازخوردهای منفی احتمالی
- توصیه معیارهای همکاری با اینفلوئنسرها و استراتژی دسترسی به آن‌ها
- طراحی قیف بازاریابی ایمیلی با ۵ تا ۷ نقطه تماس
- پیشنهاد استراتژی‌های هدف‌گیری مجدد برای کاربرانی که سبد خرید را رها کرده‌اند و بازدیدکنندگان سایت

**لحن:** حرفه‌ای، استراتژیک، مبتنی بر داده، خلاق

**قالب:** سند ساختاریافته با بخش‌های واضح، نقاط گلوله‌ای، جداول تخصیص بودجه و نمودار گانت زمانی`,
    tags_en: ["strategy", "e-commerce", "sustainability", "digital marketing"],
    tags_fa: ["استراتژی", "تجارت الکترونیک", "پایداری", "بازاریابی دیجیتال"],
  },
  {
    id: "2",
    title_en: "Create Employee Onboarding Program",
    title_fa: "طراحی برنامه جامع آموزش کارکنان جدید",
    category: "HR",
    industry: "Technology",
    role: "HR Manager",
    prompt_en: `**Persona:** You are an experienced HR professional with 12+ years in talent development and organizational psychology. You specialize in creating engaging onboarding experiences that reduce time-to-productivity and increase retention.

**Goal:** Design a comprehensive 90-day onboarding program for software engineers joining a mid-sized tech startup.

**Context:** The company has 150 employees, uses agile methodologies, and has a remote-first culture. New hires need to understand company culture, technical stack, and team dynamics quickly.

**Requirements:**
- Create a detailed week-by-week schedule for the first 90 days
- Include specific learning objectives for each phase (Days 1-7, Weeks 2-4, Months 2-3)
- Design 5-7 interactive activities to build team connections in a remote environment
- Develop a mentorship matching system with clear roles and responsibilities
- Create assessment checkpoints at 30, 60, and 90 days with specific evaluation criteria
- Include technical onboarding milestones (code reviews, first deployment, etc.)
- Design feedback loops for continuous program improvement
- Provide templates for welcome emails, first-day agenda, and check-in meetings
- Include cultural immersion activities to understand company values
- Suggest tools and platforms to facilitate remote onboarding

**Tone:** Welcoming, structured, supportive, professional

**Format:** Comprehensive guide with timelines, checklists, templates, and visual diagrams`,
    prompt_fa: `**شخصیت:** شما یک متخصص منابع انسانی با بیش از ۱۲ سال تجربه در توسعه استعداد و روان‌شناسی سازمانی هستید. تخصص شما ایجاد تجربیات جذاب آموزشی است که زمان رسیدن به بهره‌وری را کاهش داده و نرخ حفظ کارکنان را افزایش می‌دهد.

**هدف:** طراحی یک برنامه جامع ۹۰ روزه آموزش برای مهندسان نرم‌افزاری که به یک استارتاپ فناوری با اندازه متوسط می‌پیوندند.

**زمینه:** این شرکت ۱۵۰ کارمند دارد، از متدولوژی‌های چابک استفاده می‌کند و فرهنگ دورکاری محور دارد. کارمندان جدید باید فرهنگ شرکت، پشته فناوری و دینامیک تیمی را به سرعت درک کنند.

**الزامات:**
- ایجاد برنامه‌ریزی تفصیلی هفته به هفته برای ۹۰ روز اول
- تعیین اهداف یادگیری مشخص برای هر مرحله (روزهای ۱ تا ۷، هفته‌های ۲ تا ۴، ماه‌های ۲ تا ۳)
- طراحی ۵ تا ۷ فعالیت تعاملی برای ایجاد ارتباطات تیمی در محیط دورکاری
- توسعه سیستم تطبیق مربیگری با نقش‌ها و مسئولیت‌های مشخص
- ایجاد نقاط بررسی ارزیابی در روزهای ۳۰، ۶۰ و ۹۰ با معیارهای ارزیابی دقیق
- تعیین نقاط عطف آموزش فنی (بررسی کد، اولین استقرار و غیره)
- طراحی حلقه‌های بازخورد برای بهبود مستمر برنامه
- ارائه قالب‌های آماده برای ایمیل‌های خوش‌آمدگویی، دستور کار روز اول و جلسات پیگیری
- شامل فعالیت‌های غوطه‌وری فرهنگی برای درک ارزش‌های شرکت
- پیشنهاد ابزارها و پلتفرم‌ها برای تسهیل فرآیند آموزش دورکاری

**لحن:** خوش‌آمدگویانه، ساختاریافته، حمایتی، حرفه‌ای

**قالب:** راهنمای جامع با جدول زمانی، چک‌لیست‌ها، قالب‌های آماده و نمودارهای بصری`,
    tags_en: ["onboarding", "remote work", "talent development", "engineering"],
    tags_fa: ["آموزش کارکنان", "دورکاری", "توسعه استعداد", "مهندسی نرم‌افزار"],
  },
  {
    id: "3",
    title_en: "Product Roadmap Planning",
    title_fa: "برنامه‌ریزی نقشه راه محصول",
    category: "Product",
    industry: "SaaS",
    role: "Product Manager",
    prompt_en: `**Persona:** You are a seasoned Product Manager with 10+ years of experience in SaaS products. You excel at balancing user needs, business goals, and technical constraints to create compelling product roadmaps.

**Goal:** Create a 12-month product roadmap for a B2B project management SaaS platform.

**Context:** The platform has 5,000 active users, $2M ARR, and faces competition from established players. The team consists of 8 engineers, 2 designers, and 1 PM. Key challenges: user retention (currently 75%), feature parity with competitors, and scaling infrastructure.

**Requirements:**
- Define 3-5 strategic themes for the year with clear business justification
- Prioritize 15-20 features using a scoring framework (RICE, Value vs. Effort, etc.)
- Create quarterly milestones with specific deliverables and success metrics
- Include technical debt allocation (recommend 20-30% of capacity)
- Map features to user personas and their pain points
- Estimate engineering effort in story points or t-shirt sizes
- Identify dependencies between features and potential risks
- Include customer feedback integration process
- Define go-to-market strategy for major releases
- Create a communication plan for stakeholders (executives, engineering, sales, customers)

**Tone:** Strategic, analytical, forward-thinking, collaborative

**Format:** Visual roadmap with timeline, feature cards, priority matrix, and detailed feature specifications`,
    prompt_fa: `**شخصیت:** شما یک مدیر محصول با تجربه با بیش از ۱۰ سال سابقه در محصولات SaaS هستید. تخصص شما در متعادل کردن نیازهای کاربران، اهداف کسب‌وکار و محدودیت‌های فنی برای ایجاد نقشه‌های راه جذاب محصول است.

**هدف:** ایجاد نقشه راه ۱۲ ماهه محصول برای یک پلتفرم SaaS مدیریت پروژه در حوزه B2B.

**زمینه:** این پلتفرم ۵,۰۰۰ کاربر فعال و ۲ میلیون دلار درآمد سالانه تکراری (ARR) دارد و با رقبای تثبیت‌شده در بازار روبرو است. تیم شامل ۸ مهندس، ۲ طراح و ۱ مدیر محصول است. چالش‌های کلیدی: حفظ کاربران (در حال حاضر ۷۵٪)، برابری ویژگی‌ها با رقبا و مقیاس‌پذیری زیرساخت.

**الزامات:**
- تعریف ۳ تا ۵ موضوع استراتژیک برای سال با توجیه کسب‌وکاری واضح
- اولویت‌بندی ۱۵ تا ۲۰ ویژگی با استفاده از چارچوب امتیازدهی (RICE، ارزش در مقابل تلاش و غیره)
- ایجاد نقاط عطف فصلی با تحویل‌های مشخص و معیارهای موفقیت
- تخصیص بدهی فنی (توصیه ۲۰ تا ۳۰ درصد ظرفیت)
- نقشه‌برداری ویژگی‌ها به شخصیت‌های کاربری و نقاط درد آن‌ها
- تخمین تلاش مهندسی به صورت نقاط داستانی یا اندازه‌های تی‌شرتی
- شناسایی وابستگی‌ها بین ویژگی‌ها و ریسک‌های احتمالی
- شامل فرآیند یکپارچه‌سازی بازخورد مشتریان
- تعریف استراتژی ورود به بازار برای انتشارهای اصلی
- ایجاد برنامه ارتباطی برای ذینفعان (مدیران ارشد، تیم مهندسی، فروش، مشتریان)

**لحن:** استراتژیک، تحلیلی، آینده‌نگر، مشارکتی

**قالب:** نقشه راه بصری با جدول زمانی، کارت‌های ویژگی، ماتریس اولویت و مشخصات تفصیلی ویژگی‌ها`,
    tags_en: ["roadmap", "saas", "strategy", "prioritization"],
    tags_fa: ["نقشه راه", "نرم‌افزار به عنوان سرویس", "استراتژی", "اولویت‌بندی"],
  },
]

const promptTemplates = [
  // Marketing prompts
  {
    title_en: "SEO Content Strategy Development",
    title_fa: "توسعه استراتژی محتوای سئو",
    category: "Marketing",
    role: "SEO Specialist",
  },
  {
    title_en: "Social Media Campaign Planning",
    title_fa: "برنامه‌ریزی کمپین رسانه‌های اجتماعی",
    category: "Marketing",
    role: "Social Media Manager",
  },
  {
    title_en: "Email Marketing Automation",
    title_fa: "اتوماسیون بازاریابی ایمیلی",
    category: "Marketing",
    role: "Email Marketing Specialist",
  },
  {
    title_en: "Brand Positioning Strategy",
    title_fa: "استراتژی موقعیت‌یابی برند",
    category: "Marketing",
    role: "Brand Manager",
  },
  {
    title_en: "Content Marketing Calendar",
    title_fa: "تقویم بازاریابی محتوایی",
    category: "Marketing",
    role: "Content Marketing Manager",
  },
  {
    title_en: "Influencer Partnership Program",
    title_fa: "برنامه همکاری با اینفلوئنسرها",
    category: "Marketing",
    role: "Influencer Marketing Manager",
  },
  {
    title_en: "Marketing Analytics Dashboard",
    title_fa: "داشبورد تحلیل بازاریابی",
    category: "Marketing",
    role: "Marketing Analyst",
  },
  {
    title_en: "Customer Acquisition Strategy",
    title_fa: "استراتژی جذب مشتری",
    category: "Marketing",
    role: "Growth Marketing Manager",
  },
  {
    title_en: "Conversion Rate Optimization",
    title_fa: "بهینه‌سازی نرخ تبدیل",
    category: "Marketing",
    role: "CRO Specialist",
  },
  {
    title_en: "Marketing Budget Allocation",
    title_fa: "تخصیص بودجه بازاریابی",
    category: "Marketing",
    role: "Marketing Director",
  },

  // Sales prompts
  {
    title_en: "Sales Prospecting Strategy",
    title_fa: "استراتژی شناسایی مشتریان بالقوه",
    category: "Sales",
    role: "Sales Development Representative",
  },
  { title_en: "Cold Email Outreach Campaign", title_fa: "کمپین ایمیل سرد", category: "Sales", role: "Sales Manager" },
  { title_en: "Sales Presentation Design", title_fa: "طراحی ارائه فروش", category: "Sales", role: "Sales Executive" },
  {
    title_en: "Account Management Plan",
    title_fa: "برنامه مدیریت حساب مشتری",
    category: "Sales",
    role: "Account Manager",
  },
  {
    title_en: "Sales Pipeline Optimization",
    title_fa: "بهینه‌سازی خط لوله فروش",
    category: "Sales",
    role: "Sales Operations Manager",
  },
  {
    title_en: "Objection Handling Framework",
    title_fa: "چارچوب مدیریت اعتراضات",
    category: "Sales",
    role: "Sales Trainer",
  },
  {
    title_en: "Sales Enablement Content",
    title_fa: "محتوای توانمندسازی فروش",
    category: "Sales",
    role: "Sales Enablement Manager",
  },
  {
    title_en: "Territory Planning Strategy",
    title_fa: "استراتژی برنامه‌ریزی منطقه فروش",
    category: "Sales",
    role: "Regional Sales Manager",
  },
  { title_en: "Sales Forecasting Model", title_fa: "مدل پیش‌بینی فروش", category: "Sales", role: "Sales Analyst" },
  {
    title_en: "Customer Retention Program",
    title_fa: "برنامه حفظ مشتری",
    category: "Sales",
    role: "Customer Success Manager",
  },

  // Engineering prompts
  {
    title_en: "System Architecture Design",
    title_fa: "طراحی معماری سیستم",
    category: "Engineering",
    role: "Software Architect",
  },
  {
    title_en: "Code Review Guidelines",
    title_fa: "دستورالعمل‌های بررسی کد",
    category: "Engineering",
    role: "Engineering Lead",
  },
  {
    title_en: "API Documentation Standards",
    title_fa: "استانداردهای مستندسازی API",
    category: "Engineering",
    role: "Backend Developer",
  },
  {
    title_en: "DevOps Pipeline Setup",
    title_fa: "راه‌اندازی خط لوله DevOps",
    category: "Engineering",
    role: "DevOps Engineer",
  },
  {
    title_en: "Database Optimization Strategy",
    title_fa: "استراتژی بهینه‌سازی پایگاه داده",
    category: "Engineering",
    role: "Database Administrator",
  },
  {
    title_en: "Security Audit Checklist",
    title_fa: "چک‌لیست ممیزی امنیتی",
    category: "Engineering",
    role: "Security Engineer",
  },
  {
    title_en: "Testing Strategy Framework",
    title_fa: "چارچوب استراتژی تست",
    category: "Engineering",
    role: "QA Engineer",
  },
  {
    title_en: "Technical Debt Management",
    title_fa: "مدیریت بدهی فنی",
    category: "Engineering",
    role: "Engineering Manager",
  },
  {
    title_en: "Microservices Migration Plan",
    title_fa: "برنامه مهاجرت به میکروسرویس",
    category: "Engineering",
    role: "Solutions Architect",
  },
  {
    title_en: "Performance Monitoring Setup",
    title_fa: "راه‌اندازی نظارت بر عملکرد",
    category: "Engineering",
    role: "Site Reliability Engineer",
  },

  // Product prompts
  {
    title_en: "User Research Planning",
    title_fa: "برنامه‌ریزی تحقیقات کاربری",
    category: "Product",
    role: "UX Researcher",
  },
  {
    title_en: "Feature Prioritization Framework",
    title_fa: "چارچوب اولویت‌بندی ویژگی‌ها",
    category: "Product",
    role: "Product Manager",
  },
  {
    title_en: "Product Requirements Document",
    title_fa: "سند الزامات محصول",
    category: "Product",
    role: "Product Owner",
  },
  { title_en: "User Story Mapping", title_fa: "نقشه‌برداری داستان کاربری", category: "Product", role: "Agile Coach" },
  {
    title_en: "Product Analytics Setup",
    title_fa: "راه‌اندازی تحلیل محصول",
    category: "Product",
    role: "Product Analyst",
  },
  {
    title_en: "Go-to-Market Strategy",
    title_fa: "استراتژی ورود به بازار",
    category: "Product",
    role: "Product Marketing Manager",
  },
  {
    title_en: "Product Launch Checklist",
    title_fa: "چک‌لیست راه‌اندازی محصول",
    category: "Product",
    role: "Launch Manager",
  },
  {
    title_en: "Competitive Analysis Report",
    title_fa: "گزارش تحلیل رقابتی",
    category: "Product",
    role: "Market Research Analyst",
  },
  {
    title_en: "Product Vision Statement",
    title_fa: "بیانیه چشم‌انداز محصول",
    category: "Product",
    role: "Chief Product Officer",
  },
  {
    title_en: "Customer Journey Mapping",
    title_fa: "نقشه‌برداری سفر مشتری",
    category: "Product",
    role: "Customer Experience Manager",
  },

  // HR prompts
  {
    title_en: "Recruitment Strategy Plan",
    title_fa: "برنامه استراتژی استخدام",
    category: "HR",
    role: "Talent Acquisition Manager",
  },
  {
    title_en: "Performance Review Framework",
    title_fa: "چارچوب ارزیابی عملکرد",
    category: "HR",
    role: "HR Business Partner",
  },
  {
    title_en: "Employee Engagement Survey",
    title_fa: "نظرسنجی مشارکت کارکنان",
    category: "HR",
    role: "People Operations Manager",
  },
  {
    title_en: "Learning and Development Program",
    title_fa: "برنامه یادگیری و توسعه",
    category: "HR",
    role: "L&D Specialist",
  },
  {
    title_en: "Compensation and Benefits Design",
    title_fa: "طراحی پاداش و مزایا",
    category: "HR",
    role: "Compensation Analyst",
  },
  {
    title_en: "Diversity and Inclusion Initiative",
    title_fa: "ابتکار تنوع و شمول",
    category: "HR",
    role: "Diversity Officer",
  },
  {
    title_en: "Employee Handbook Creation",
    title_fa: "ایجاد کتابچه راهنمای کارکنان",
    category: "HR",
    role: "HR Coordinator",
  },
  {
    title_en: "Succession Planning Strategy",
    title_fa: "استراتژی برنامه‌ریزی جانشین‌پروری",
    category: "HR",
    role: "HR Director",
  },
  {
    title_en: "Remote Work Policy Development",
    title_fa: "توسعه سیاست دورکاری",
    category: "HR",
    role: "Workplace Strategy Manager",
  },
  { title_en: "Exit Interview Process", title_fa: "فرآیند مصاحبه خروج", category: "HR", role: "HR Generalist" },

  // Design prompts
  {
    title_en: "Design System Creation",
    title_fa: "ایجاد سیستم طراحی",
    category: "Design",
    role: "Design Systems Lead",
  },
  {
    title_en: "User Interface Design Guidelines",
    title_fa: "دستورالعمل‌های طراحی رابط کاربری",
    category: "Design",
    role: "UI Designer",
  },
  { title_en: "User Experience Audit", title_fa: "ممیزی تجربه کاربری", category: "Design", role: "UX Designer" },
  {
    title_en: "Wireframing and Prototyping",
    title_fa: "وایرفریمینگ و نمونه‌سازی",
    category: "Design",
    role: "Product Designer",
  },
  {
    title_en: "Accessibility Design Standards",
    title_fa: "استانداردهای طراحی دسترس‌پذیری",
    category: "Design",
    role: "Accessibility Specialist",
  },
  { title_en: "Visual Brand Identity", title_fa: "هویت بصری برند", category: "Design", role: "Brand Designer" },
  {
    title_en: "Motion Design Guidelines",
    title_fa: "دستورالعمل‌های طراحی موشن",
    category: "Design",
    role: "Motion Designer",
  },
  { title_en: "Design Sprint Planning", title_fa: "برنامه‌ریزی اسپرینت طراحی", category: "Design", role: "Design Lead" },
  {
    title_en: "Usability Testing Protocol",
    title_fa: "پروتکل تست قابلیت استفاده",
    category: "Design",
    role: "UX Researcher",
  },
  {
    title_en: "Design Portfolio Development",
    title_fa: "توسعه نمونه کار طراحی",
    category: "Design",
    role: "Creative Director",
  },

  // Customer Support prompts
  {
    title_en: "Customer Support Strategy",
    title_fa: "استراتژی پشتیبانی مشتری",
    category: "Customer Support",
    role: "Support Manager",
  },
  {
    title_en: "Knowledge Base Creation",
    title_fa: "ایجاد پایگاه دانش",
    category: "Customer Support",
    role: "Technical Writer",
  },
  {
    title_en: "Support Ticket Workflow",
    title_fa: "گردش کار تیکت پشتیبانی",
    category: "Customer Support",
    role: "Support Operations Manager",
  },
  {
    title_en: "Customer Service Training",
    title_fa: "آموزش خدمات مشتری",
    category: "Customer Support",
    role: "Training Coordinator",
  },
  {
    title_en: "Escalation Management Process",
    title_fa: "فرآیند مدیریت تشدید",
    category: "Customer Support",
    role: "Support Team Lead",
  },
  {
    title_en: "Customer Satisfaction Survey",
    title_fa: "نظرسنجی رضایت مشتری",
    category: "Customer Support",
    role: "Customer Experience Analyst",
  },
  {
    title_en: "Live Chat Implementation",
    title_fa: "پیاده‌سازی چت زنده",
    category: "Customer Support",
    role: "Support Engineer",
  },
  {
    title_en: "Self-Service Portal Design",
    title_fa: "طراحی پورتال خودخدمتی",
    category: "Customer Support",
    role: "Support Product Manager",
  },

  // Finance prompts
  {
    title_en: "Financial Planning and Analysis",
    title_fa: "برنامه‌ریزی و تحلیل مالی",
    category: "Finance",
    role: "Financial Analyst",
  },
  { title_en: "Budget Forecasting Model", title_fa: "مدل پیش‌بینی بودجه", category: "Finance", role: "Budget Manager" },
  { title_en: "Cash Flow Management", title_fa: "مدیریت جریان نقدی", category: "Finance", role: "Treasury Manager" },
  {
    title_en: "Financial Reporting Standards",
    title_fa: "استانداردهای گزارش‌دهی مالی",
    category: "Finance",
    role: "Controller",
  },
  {
    title_en: "Investment Analysis Framework",
    title_fa: "چارچوب تحلیل سرمایه‌گذاری",
    category: "Finance",
    role: "Investment Analyst",
  },
  { title_en: "Cost Reduction Strategy", title_fa: "استراتژی کاهش هزینه", category: "Finance", role: "Cost Analyst" },
  { title_en: "Financial Risk Assessment", title_fa: "ارزیابی ریسک مالی", category: "Finance", role: "Risk Manager" },
  {
    title_en: "Pricing Strategy Development",
    title_fa: "توسعه استراتژی قیمت‌گذاری",
    category: "Finance",
    role: "Pricing Analyst",
  },

  // Legal prompts
  { title_en: "Contract Review Process", title_fa: "فرآیند بررسی قرارداد", category: "Legal", role: "Legal Counsel" },
  {
    title_en: "Compliance Audit Checklist",
    title_fa: "چک‌لیست ممیزی انطباق",
    category: "Legal",
    role: "Compliance Officer",
  },
  {
    title_en: "Privacy Policy Development",
    title_fa: "توسعه سیاست حریم خصوصی",
    category: "Legal",
    role: "Privacy Counsel",
  },
  {
    title_en: "Intellectual Property Strategy",
    title_fa: "استراتژی مالکیت فکری",
    category: "Legal",
    role: "IP Attorney",
  },
  {
    title_en: "Terms of Service Creation",
    title_fa: "ایجاد شرایط خدمات",
    category: "Legal",
    role: "Corporate Counsel",
  },
  {
    title_en: "Regulatory Compliance Framework",
    title_fa: "چارچوب انطباق نظارتی",
    category: "Legal",
    role: "Regulatory Affairs Manager",
  },
  {
    title_en: "Data Protection Guidelines",
    title_fa: "دستورالعمل‌های حفاظت از داده",
    category: "Legal",
    role: "Data Protection Officer",
  },

  // Data Analysis prompts
  {
    title_en: "Business Intelligence Dashboard",
    title_fa: "داشبورد هوش تجاری",
    category: "Data Analysis",
    role: "BI Analyst",
  },
  {
    title_en: "Predictive Analytics Model",
    title_fa: "مدل تحلیل پیش‌بینی",
    category: "Data Analysis",
    role: "Data Scientist",
  },
  { title_en: "Data Warehouse Design", title_fa: "طراحی انبار داده", category: "Data Analysis", role: "Data Engineer" },
  {
    title_en: "Customer Segmentation Analysis",
    title_fa: "تحلیل بخش‌بندی مشتری",
    category: "Data Analysis",
    role: "Marketing Analyst",
  },
  { title_en: "A/B Testing Framework", title_fa: "چارچوب تست A/B", category: "Data Analysis", role: "Growth Analyst" },
  {
    title_en: "Data Quality Assessment",
    title_fa: "ارزیابی کیفیت داده",
    category: "Data Analysis",
    role: "Data Quality Manager",
  },
  {
    title_en: "Machine Learning Pipeline",
    title_fa: "خط لوله یادگیری ماشین",
    category: "Data Analysis",
    role: "ML Engineer",
  },
  {
    title_en: "Data Visualization Standards",
    title_fa: "استانداردهای تجسم داده",
    category: "Data Analysis",
    role: "Data Visualization Specialist",
  },
]

for (let i = 0; i < promptTemplates.length && PROMPTS.length < 100; i++) {
  const template = promptTemplates[i]
  const industries = ["Technology", "E-commerce", "Healthcare", "Finance", "Education", "Manufacturing", "Retail"]
  const industry = industries[i % industries.length]

  PROMPTS.push({
    id: String(PROMPTS.length + 1),
    title_en: template.title_en,
    title_fa: template.title_fa,
    category: template.category,
    industry,
    role: template.role,
    prompt_en: `**Persona:** You are an expert ${template.role} with 10+ years of experience in ${industry}.

**Goal:** Create comprehensive ${template.category.toLowerCase()} strategies and solutions that drive measurable business results.

**Context:** Working in a ${industry.toLowerCase()} company with specific challenges and opportunities in the current market landscape.

**Requirements:**
- Analyze current market trends and competitive landscape
- Develop data-driven strategies with clear KPIs and success metrics
- Create actionable implementation plans with timelines and resource allocation
- Include risk assessment and mitigation strategies
- Provide best practices and industry benchmarks
- Design measurement frameworks for tracking progress
- Include stakeholder communication plans
- Suggest tools and technologies to support implementation
- Create templates and frameworks for execution
- Provide case studies and examples from similar situations

**Tone:** Professional, analytical, strategic, actionable

**Format:** Structured document with executive summary, detailed analysis, recommendations, and implementation roadmap`,
    prompt_fa: `**شخصیت:** شما یک ${template.role} متخصص با بیش از ۱۰ سال تجربه در صنعت ${industry} هستید.

**هدف:** ایجاد استراتژی‌ها و راه‌حل‌های جامع در حوزه ${template.category} که نتایج کسب‌وکاری قابل اندازه‌گیری ایجاد می‌کند.

**زمینه:** فعالیت در یک شرکت در صنعت ${industry} با چالش‌ها و فرصت‌های خاص در چشم‌انداز بازار فعلی.

**الزامات:**
- تحلیل روندهای فعلی بازار و چشم‌انداز رقابتی
- توسعه استراتژی‌های مبتنی بر داده با شاخص‌های کلیدی عملکرد و معیارهای موفقیت واضح
- ایجاد برنامه‌های اجرایی قابل عمل با جدول زمانی و تخصیص منابع
- شامل ارزیابی ریسک و استراتژی‌های کاهش آن
- ارائه بهترین شیوه‌ها و معیارهای صنعتی
- طراحی چارچوب‌های اندازه‌گیری برای ردیابی پیشرفت
- شامل برنامه‌های ارتباطی با ذینفعان
- پیشنهاد ابزارها و فناوری‌ها برای پشتیبانی از اجرا
- ایجاد قالب‌ها و چارچوب‌ها برای اجرا
- ارائه مطالعات موردی و نمونه‌ها از موقعیت‌های مشابه

**لحن:** حرفه‌ای، تحلیلی، استراتژیک، قابل اجرا

**قالب:** سند ساختاریافته با خلاصه اجرایی، تحلیل تفصیلی، توصیه‌ها و نقشه راه اجرایی`,
    tags_en: [template.category.toLowerCase(), industry.toLowerCase(), "strategy", "analysis"],
    tags_fa: [template.category, industry, "استراتژی", "تحلیل"],
  })
}

export const INDUSTRIES = Array.from(
  new Set(["All", "Technology", "E-commerce", "Healthcare", "Finance", "Education", "Manufacturing", "Retail", "SaaS"]),
)

export const ROLES = Array.from(
  new Set([
    "All",
    "Marketing Manager",
    "Sales Manager",
    "Product Manager",
    "HR Manager",
    "Engineering Lead",
    "Designer",
    "Customer Support",
    "Data Analyst",
  ]),
)

export const translations = {
  en: {
    appName: "Tethera AI Academy",
    promptLibrary: "Prompt Library",
    jsonGenerator: "JSON Prompt Generator",
    myPrompts: "My Custom Prompts",
    communityPrompts: "Community Prompts",
    shareWithCommunity: "Share with Community",
    sharedBy: "Shared by",
    likes: "Likes",
    like: "Like",
    unlike: "Unlike",
    noCommunityPrompts: "No community prompts yet",
    noCommunityPromptsDesc: "Be the first to share a prompt with the community",
    sharePrompt: "Share Prompt",
    sharing: "Sharing...",
    promptCount: "Total Prompts",
    createPrompt: "Create New Prompt",
    customizePrompt: "Customize for Me",
    convertToJson: "Convert to JSON",
    saveToLibrary: "Save to My Library",
    deletePrompt: "Delete",
    customizedFrom: "Customized from",
    noCustomPrompts: "No custom prompts yet",
    noCustomPromptsDesc: "Create or customize prompts to build your personal library",
    customizing: "Customizing...",
    enterRole: "Enter your role (e.g., Marketing Manager)",
    enterIndustry: "Enter your industry (e.g., E-commerce)",
    enterGoal: "What's your specific goal?",
    enterConstraints: "Any constraints or requirements?",
    customize: "Customize",
    cancel: "Cancel",
    searchPlaceholder: "Search prompts...",
    filterByIndustry: "Filter by Industry",
    filterByRole: "Filter by Role",
    showDetails: "Show Details",
    showLess: "Show Less",
    copyPrompt: "Copy Prompt",
    copied: "Copied!",
    favorite: "Favorite",
    generatorTitle: "JSON Prompt Generator",
    generatorSubtitle: "Convert natural language into structured JSON prompts",
    inputPlaceholder: "Enter your prompt description...",
    generateButton: "Generate JSON",
    generating: "Generating...",
    jsonOutput: "JSON Output",
    copyJson: "Copy JSON",
    downloadJson: "Download JSON",
    errorMessage: "Failed to generate JSON. Please try again.",
    noResults: "No prompts found",
    noResultsDesc: "Try adjusting your search or filters",
    clearFilters: "Clear Filters",
    sortBy: "Sort by",
    newest: "Newest",
    alphabetical: "Alphabetical",
    category: "Category",
    exportData: "Export Data",
    importData: "Import Data",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    signOut: "Sign Out",
    madeBy: "made by",
  },
  fa: {
    appName: "آکادمی هوش مصنوعی تترا",
    promptLibrary: "کتابخانه پرامپت",
    jsonGenerator: "تولیدکننده پرامپت JSON",
    myPrompts: "پرامپت‌های سفارشی من",
    communityPrompts: "پرامپت‌های اجتماعی",
    shareWithCommunity: "اشتراک‌گذاری با جامعه",
    sharedBy: "به اشتراک گذاشته شده توسط",
    likes: "پسندها",
    like: "پسندیدن",
    unlike: "لغو پسند",
    noCommunityPrompts: "هنوز پرامپت اجتماعی وجود ندارد",
    noCommunityPromptsDesc: "اولین نفری باشید که پرامپت خود را با جامعه به اشتراک می‌گذارد",
    sharePrompt: "اشتراک‌گذاری پرامپت",
    sharing: "در حال اشتراک‌گذاری...",
    promptCount: "تعداد کل پرامپت‌ها",
    createPrompt: "ایجاد پرامپت جدید",
    customizePrompt: "سفارشی‌سازی برای من",
    convertToJson: "تبدیل به JSON",
    saveToLibrary: "ذخیره در کتابخانه من",
    deletePrompt: "حذف",
    customizedFrom: "سفارشی‌سازی شده از",
    noCustomPrompts: "هنوز پرامپت سفارشی ندارید",
    noCustomPromptsDesc: "پرامپت‌ها را ایجاد یا سفارشی کنید تا کتابخانه شخصی خود را بسازید",
    customizing: "در حال سفارشی‌سازی...",
    enterRole: "نقش خود را وارد کنید (مثلاً مدیر بازاریابی)",
    enterIndustry: "صنعت خود را وارد کنید (مثلاً تجارت الکترونیک)",
    enterGoal: "هدف خاص شما چیست؟",
    enterConstraints: "آیا محدودیت یا الزاماتی دارید؟",
    customize: "سفارشی‌سازی",
    cancel: "لغو",
    searchPlaceholder: "جستجوی پرامپت‌ها...",
    filterByIndustry: "فیلتر بر اساس صنعت",
    filterByRole: "فیلتر بر اساس نقش",
    showDetails: "نمایش جزئیات",
    showLess: "نمایش کمتر",
    copyPrompt: "کپی پرامپت",
    copied: "کپی شد!",
    favorite: "علاقه‌مندی",
    generatorTitle: "تولیدکننده پرامپت JSON",
    generatorSubtitle: "تبدیل زبان طبیعی به پرامپت‌های ساختاریافته JSON",
    inputPlaceholder: "توضیحات پرامپت خود را وارد کنید...",
    generateButton: "تولید JSON",
    generating: "در حال تولید...",
    jsonOutput: "خروجی JSON",
    copyJson: "کپی JSON",
    downloadJson: "دانلود JSON",
    errorMessage: "تولید JSON ناموفق بود. لطفاً دوباره تلاش کنید.",
    noResults: "پرامپتی یافت نشد",
    noResultsDesc: "جستجو یا فیلترهای خود را تنظیم کنید",
    clearFilters: "پاک کردن فیلترها",
    sortBy: "مرتب‌سازی بر اساس",
    newest: "جدیدترین",
    alphabetical: "الفبایی",
    category: "دسته‌بندی",
    exportData: "صادرات داده",
    importData: "وارد کردن داده",
    darkMode: "حالت تاریک",
    lightMode: "حالت روشن",
    signOut: "خروج",
    madeBy: "ساخته شده توسط",
  },
}
