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

export const OPENAI_PROMPTS: Prompt[] = [
  {
    id: "openai-1",
    title_en: "Sales Outreach Email Campaign",
    title_fa: "کمپین ایمیل فروش",
    category: "Sales",
    industry: "Technology",
    role: "Sales Development Representative",
    prompt_en: `**Persona:** You are an experienced Sales Development Representative specializing in B2B SaaS outreach.

**Goal:** Create a personalized cold email sequence for reaching out to potential enterprise customers.

**Context:** Targeting CIOs and CTOs at companies with 500+ employees in the technology sector. Your product is a cloud-based project management platform that reduces delivery time by 40%.

**Requirements:**
- Write a 3-email sequence (initial outreach, follow-up, final touchpoint)
- Each email should be 100-150 words maximum
- Include compelling subject lines that improve open rates
- Address specific pain points (project delays, team collaboration, visibility)
- Include social proof (customer logos, case study metrics)
- Clear call-to-action for each email
- Personalization tokens for automation
- A/B testing variants for subject lines

**Tone:** Professional, consultative, value-focused

**Format:** Email sequence with subject lines, body copy, and CTA buttons`,
    prompt_fa: `**شخصیت:** شما یک نماینده توسعه فروش با تجربه متخصص در دسترسی B2B SaaS هستید.

**هدف:** ایجاد یک توالی ایمیل سرد شخصی‌سازی شده برای دسترسی به مشتریان سازمانی بالقوه.

**زمینه:** هدف‌گیری مدیران ارشد فناوری اطلاعات در شرکت‌های با بیش از ۵۰۰ کارمند در بخش فناوری. محصول شما یک پلتفرم مدیریت پروژه مبتنی بر ابر است که زمان تحویل را ۴۰٪ کاهش می‌دهد.

**الزامات:**
- نوشتن یک توالی ۳ ایمیلی (دسترسی اولیه، پیگیری، تماس نهایی)
- هر ایمیل حداکثر ۱۰۰ تا ۱۵۰ کلمه باشد
- شامل موضوعات جذاب که نرخ باز شدن را بهبود می‌بخشد
- پرداختن به نقاط درد خاص (تاخیرهای پروژه، همکاری تیمی، دید کلی)
- شامل اثبات اجتماعی (لوگوهای مشتریان، معیارهای مطالعه موردی)
- فراخوان واضح برای اقدام در هر ایمیل
- توکن‌های شخصی‌سازی برای اتوماسیون
- گزینه‌های تست A/B برای موضوعات

**لحن:** حرفه‌ای، مشاوره‌ای، متمرکز بر ارزش

**قالب:** توالی ایمیل با موضوعات، متن اصلی و دکمه‌های فراخوان`,
    tags_en: ["sales", "outreach", "email", "b2b"],
    tags_fa: ["فروش", "دسترسی", "ایمیل", "کسب‌وکار به کسب‌وکار"],
  },
  {
    id: "openai-2",
    title_en: "Customer Success Onboarding Strategy",
    title_fa: "استراتژی آموزش موفقیت مشتری",
    category: "Customer Support",
    industry: "SaaS",
    role: "Customer Success Manager",
    prompt_en: `**Persona:** You are a Customer Success Manager with expertise in SaaS product adoption and retention strategies.

**Goal:** Create a comprehensive 60-day onboarding plan that ensures new customers achieve their first win quickly.

**Context:** Working with B2B SaaS customers who have just purchased an annual subscription. Average contract value is $50K. Customer success metrics show that customers who achieve value in the first 30 days have 90% retention rates.

**Requirements:**
- Define customer success milestones for days 1, 7, 14, 30, and 60
- Create email templates for each milestone touchpoint
- Design health score metrics to track engagement
- Build escalation protocols for at-risk accounts
- Include quarterly business review (QBR) preparation checklist
- Provide upsell and cross-sell identification framework
- Design customer education resources (videos, guides, webinars)
- Create adoption tracking dashboard metrics
- Include renewal conversation playbook

**Tone:** Supportive, proactive, consultative

**Format:** Structured onboarding guide with timelines, templates, and tracking metrics`,
    prompt_fa: `**شخصیت:** شما یک مدیر موفقیت مشتری با تخصص در استراتژی‌های پذیرش و حفظ محصول SaaS هستید.

**هدف:** ایجاد یک برنامه جامع ۶۰ روزه برای آموزش که تضمین می‌کند مشتریان جدید به سرعت به اولین موفقیت خود برسند.

**زمینه:** کار با مشتریان SaaS B2B که به تازگی اشتراک سالانه خریداری کرده‌اند. میانگین ارزش قرارداد ۵۰ هزار دلار است. معیارهای موفقیت مشتری نشان می‌دهند که مشتریانی که در ۳۰ روز اول به ارزش دست می‌یابند، نرخ حفظ ۹۰٪ دارند.

**الزامات:**
- تعریف نقاط عطف موفقیت مشتری برای روزهای ۱، ۷، ۱۴، ۳۰ و ۶۰
- ایجاد قالب‌های ایمیل برای هر نقطه تماس
- طراحی معیارهای امتیاز سلامت برای ردیابی تعامل
- ساخت پروتکل‌های تشدید برای حساب‌های در معرض خطر
- شامل چک‌لیست آماده‌سازی بررسی تجاری فصلی (QBR)
- ارائه چارچوب شناسایی فروش بیشتر و فروش متقاطع
- طراحی منابع آموزش مشتری (ویدیوها، راهنماها، وبینارها)
- ایجاد معیارهای داشبورد ردیابی پذیرش
- شامل کتاب بازی مکالمه تمدید

**لحن:** حمایتی، فعال، مشاوره‌ای

**قالب:** راهنمای ساختاریافته آموزش با جدول زمانی، قالب‌ها و معیارهای ردیابی`,
    tags_en: ["customer success", "onboarding", "retention", "saas"],
    tags_fa: ["موفقیت مشتری", "آموزش", "حفظ", "نرم‌افزار به عنوان سرویس"],
  },
  {
    id: "openai-3",
    title_en: "Product Competitive Research Analysis",
    title_fa: "تحلیل تحقیقات رقابتی محصول",
    category: "Product",
    industry: "Technology",
    role: "Product Manager",
    prompt_en: `**Persona:** You are a strategic Product Manager specializing in competitive intelligence and market positioning.

**Goal:** Conduct a comprehensive competitive analysis to identify market gaps and product opportunities.

**Context:** Analyzing 3-5 direct competitors in the project management software space. Need to understand feature parity, pricing strategies, and market positioning to inform roadmap decisions.

**Requirements:**
- Create competitive matrix comparing features across 5 key competitors
- Analyze pricing tiers and packaging strategies
- Identify unique value propositions and differentiation strategies
- Assess user experience and design patterns
- Review customer feedback and pain points from review sites
- Map out competitors' go-to-market strategies
- Identify feature gaps and opportunities
- Benchmark performance metrics (speed, reliability, uptime)
- Analyze customer acquisition and retention tactics
- Provide SWOT analysis for each competitor
- Recommend strategic positioning and differentiation approaches

**Tone:** Analytical, strategic, objective

**Format:** Comprehensive research document with matrices, charts, and strategic recommendations`,
    prompt_fa: `**شخصیت:** شما یک مدیر محصول استراتژیک متخصص در هوش رقابتی و موقعیت‌یابی بازار هستید.

**هدف:** انجام یک تحلیل رقابتی جامع برای شناسایی شکاف‌های بازار و فرصت‌های محصول.

**زمینه:** تحلیل ۳ تا ۵ رقیب مستقیم در فضای نرم‌افزار مدیریت پروژه. نیاز به درک برابری ویژگی‌ها، استراتژی‌های قیمت‌گذاری و موقعیت‌یابی بازار برای تصمیم‌گیری در مورد نقشه راه.

**الزامات:**
- ایجاد ماتریس رقابتی مقایسه ویژگی‌ها در ۵ رقیب کلیدی
- تحلیل سطوح قیمت‌گذاری و استراتژی‌های بسته‌بندی
- شناسایی پیشنهادات ارزش منحصر به فرد و استراتژی‌های تمایز
- ارزیابی تجربه کاربری و الگوهای طراحی
- بررسی بازخورد مشتریان و نقاط درد از سایت‌های بررسی
- نقشه‌برداری استراتژی‌های ورود به بازار رقبا
- شناسایی شکاف‌های ویژگی و فرصت‌ها
- معیار عملکرد (سرعت، قابلیت اطمینان، زمان فعال بودن)
- تحلیل تاکتیک‌های جذب و حفظ مشتری
- ارائه تحلیل SWOT برای هر رقیب
- توصیه رویکردهای موقعیت‌یابی استراتژیک و تمایز

**لحن:** تحلیلی، استراتژیک، بی‌طرفانه

**قالب:** سند جامع تحقیقاتی با ماتریس‌ها، نمودارها و توصیه‌های استراتژیک`,
    tags_en: ["product", "competitive analysis", "research", "strategy"],
    tags_fa: ["محصول", "تحلیل رقابتی", "تحقیق", "استراتژی"],
  },
  {
    id: "openai-4",
    title_en: "Engineering System Architecture Design",
    title_fa: "طراحی معماری سیستم مهندسی",
    category: "Engineering",
    industry: "Technology",
    role: "Software Architect",
    prompt_en: `**Persona:** You are a Senior Software Architect with expertise in distributed systems and cloud architecture.

**Goal:** Design a scalable, resilient system architecture for a high-traffic application.

**Context:** Building a real-time analytics platform that needs to process 100K events per second, support 1M concurrent users, and maintain 99.99% uptime. Stack includes microservices, event-driven architecture, and cloud-native technologies.

**Requirements:**
- Create system architecture diagram showing all components and data flows
- Define microservices boundaries and responsibilities
- Design API gateway and load balancing strategy
- Plan database architecture (SQL vs NoSQL, sharding, replication)
- Implement caching strategy (Redis, CDN)
- Design event streaming pipeline (Kafka, RabbitMQ)
- Define monitoring and observability stack
- Plan disaster recovery and backup strategies
- Estimate infrastructure costs and scaling plan
- Document security architecture (authentication, authorization, encryption)
- Define CI/CD pipeline and deployment strategy
- Include performance benchmarks and SLAs

**Tone:** Technical, precise, comprehensive

**Format:** Technical architecture document with diagrams, specifications, and implementation guidelines`,
    prompt_fa: `**شخصیت:** شما یک معمار نرم‌افزار ارشد با تخصص در سیستم‌های توزیع‌شده و معماری ابری هستید.

**هدف:** طراحی یک معماری سیستم مقیاس‌پذیر و انعطاف‌پذیر برای یک برنامه با ترافیک بالا.

**زمینه:** ساخت یک پلتفرم تحلیل در زمان واقعی که نیاز دارد ۱۰۰ هزار رویداد در ثانیه را پردازش کند، از ۱ میلیون کاربر همزمان پشتیبانی کند و ۹۹.۹۹٪ زمان فعال بودن را حفظ کند. پشته شامل میکروسرویس‌ها، معماری رویداد محور و فناوری‌های ابری بومی است.

**الزامات:**
- ایجاد نمودار معماری سیستم نشان دهنده همه اجزا و جریان‌های داده
- تعریف مرزها و مسئولیت‌های میکروسرویس‌ها
- طراحی استراتژی دروازه API و توازن بار
- برنامه‌ریزی معماری پایگاه داده (SQL در مقابل NoSQL، شاردینگ، تکرار)
- اجرای استراتژی کش (Redis، CDN)
- طراحی خط لوله جریان رویداد (Kafka، RabbitMQ)
- تعریف پشته نظارت و قابلیت مشاهده
- برنامه‌ریزی بازیابی از فاجعه و استراتژی‌های پشتیبان
- تخمین هزینه‌های زیرساخت و برنامه مقیاس‌پذیری
- مستندسازی معماری امنیتی (احراز هویت، مجوز، رمزنگاری)
- تعریف خط لوله CI/CD و استراتژی استقرار
- شامل معیارهای عملکرد و SLA

**لحن:** فنی، دقیق، جامع

**قالب:** سند معماری فنی با نمودارها، مشخصات و دستورالعمل‌های اجرایی`,
    tags_en: ["engineering", "architecture", "scalability", "cloud"],
    tags_fa: ["مهندسی", "معماری", "مقیاس‌پذیری", "ابر"],
  },
  {
    id: "openai-5",
    title_en: "HR Recruiting Strategy Development",
    title_fa: "توسعه استراتژی استخدام منابع انسانی",
    category: "HR",
    industry: "Technology",
    role: "Talent Acquisition Manager",
    prompt_en: `**Persona:** You are a Talent Acquisition Manager specializing in technical recruitment for fast-growing startups.

**Goal:** Build a comprehensive recruiting strategy to hire 50 engineers in 6 months.

**Context:** Series B startup with $20M funding needs to scale the engineering team from 20 to 70 people. Competing with FAANG companies for talent. Need to establish employer brand, sourcing channels, and interview processes.

**Requirements:**
- Define ideal candidate profiles for 5 key roles (Frontend, Backend, DevOps, Data, Mobile)
- Create sourcing strategy across multiple channels (LinkedIn, GitHub, referrals, agencies)
- Design interview process with technical assessments and culture fit evaluations
- Build employer branding campaign (career site, social media, content marketing)
- Establish salary bands and compensation philosophy
- Create candidate experience journey map
- Define diversity and inclusion hiring goals
- Design onboarding program for new hires
- Set recruiting metrics and KPIs (time-to-hire, offer acceptance rate, quality of hire)
- Build talent pipeline for future hiring needs
- Create rejection and offer letter templates

**Tone:** Strategic, empathetic, results-driven

**Format:** Comprehensive recruiting playbook with workflows, templates, and metrics`,
    prompt_fa: `**شخصیت:** شما یک مدیر جذب استعداد متخصص در استخدام فنی برای استارتاپ‌های در حال رشد سریع هستید.

**هدف:** ساخت یک استراتژی جامع استخدام برای استخدام ۵۰ مهندس در ۶ ماه.

**زمینه:** استارتاپ سری B با ۲۰ میلیون دلار سرمایه نیاز دارد تیم مهندسی را از ۲۰ به ۷۰ نفر افزایش دهد. رقابت با شرکت‌های FAANG برای استعداد. نیاز به ایجاد برند کارفرما، کانال‌های منبع‌یابی و فرآیندهای مصاحبه.

**الزامات:**
- تعریف پروفایل‌های کاندیدای ایده‌آل برای ۵ نقش کلیدی (فرانت‌اند، بک‌اند، DevOps، داده، موبایل)
- ایجاد استراتژی منبع‌یابی در کانال‌های متعدد (LinkedIn، GitHub، ارجاعات، آژانس‌ها)
- طراحی فرآیند مصاحبه با ارزیابی‌های فنی و ارزیابی‌های تناسب فرهنگی
- ساخت کمپین برندسازی کارفرما (سایت شغلی، رسانه‌های اجتماعی، بازاریابی محتوا)
- ایجاد باندهای حقوق و فلسفه جبران خدمات
- ایجاد نقشه سفر تجربه کاندیدا
- تعریف اهداف استخدام تنوع و شمول
- طراحی برنامه آموزش برای استخدام‌های جدید
- تنظیم معیارها و شاخص‌های کلیدی عملکرد استخدام (زمان استخدام، نرخ پذیرش پیشنهاد، کیفیت استخدام)
- ساخت خط لوله استعداد برای نیازهای استخدام آینده
- ایجاد قالب‌های نامه رد و پیشنهاد

**لحن:** استراتژیک، همدلانه، نتیجه‌گرا

**قالب:** کتاب بازی جامع استخدام با گردش‌های کاری، قالب‌ها و معیارها`,
    tags_en: ["hr", "recruiting", "talent acquisition", "hiring"],
    tags_fa: ["منابع انسانی", "استخدام", "جذب استعداد", "استخدام"],
  },
  {
    id: "openai-6",
    title_en: "IT System Troubleshooting Guide",
    title_fa: "راهنمای عیب‌یابی سیستم فناوری اطلاعات",
    category: "Engineering",
    industry: "Technology",
    role: "IT Support Specialist",
    prompt_en: `**Persona:** You are an experienced IT Support Specialist with expertise in enterprise system administration and troubleshooting.

**Goal:** Create a comprehensive troubleshooting guide for common IT issues in an enterprise environment.

**Context:** Supporting 500+ employees across multiple offices with various hardware, software, and network issues. Need standardized procedures to improve resolution time and consistency.

**Requirements:**
- Document troubleshooting steps for 20 most common IT issues
- Include network connectivity problems (VPN, WiFi, Ethernet)
- Cover email and communication tool issues (Outlook, Slack, Teams)
- Address hardware problems (printer, monitor, peripherals)
- Include software installation and licensing issues
- Document security and access control problems
- Create escalation procedures for complex issues
- Include remote support best practices
- Provide knowledge base article templates
- Design ticketing system workflows
- Include preventive maintenance schedules
- Document backup and recovery procedures

**Tone:** Clear, instructional, technical yet accessible

**Format:** Structured troubleshooting manual with step-by-step guides and flowcharts`,
    prompt_fa: `**شخصیت:** شما یک متخصص پشتیبانی فناوری اطلاعات با تجربه با تخصص در مدیریت سیستم سازمانی و عیب‌یابی هستید.

**هدف:** ایجاد یک راهنمای جامع عیب‌یابی برای مشکلات رایج فناوری اطلاعات در محیط سازمانی.

**زمینه:** پشتیبانی از بیش از ۵۰۰ کارمند در دفاتر متعدد با مشکلات مختلف سخت‌افزاری، نرم‌افزاری و شبکه. نیاز به رویه‌های استاندارد برای بهبود زمان حل مشکل و ثبات.

**الزامات:**
- مستندسازی مراحل عیب‌یابی برای ۲۰ مشکل رایج فناوری اطلاعات
- شامل مشکلات اتصال شبکه (VPN، WiFi، اترنت)
- پوشش مشکلات ایمیل و ابزارهای ارتباطی (Outlook، Slack، Teams)
- رسیدگی به مشکلات سخت‌افزاری (چاپگر، مانیتور، جانبی)
- شامل مشکلات نصب نرم‌افزار و مجوز
- مستندسازی مشکلات امنیتی و کنترل دسترسی
- ایجاد رویه‌های تشدید برای مشکلات پیچیده
- شامل بهترین شیوه‌های پشتیبانی از راه دور
- ارائه قالب‌های مقاله پایگاه دانش
- طراحی گردش‌های کاری سیستم تیکت
- شامل برنامه‌های نگهداری پیشگیرانه
- مستندسازی رویه‌های پشتیبان و بازیابی

**لحن:** واضح، آموزشی، فنی اما در دسترس

**قالب:** کتابچه راهنمای عیب‌یابی ساختاریافته با راهنماهای گام به گام و نمودارهای جریان`,
    tags_en: ["it", "troubleshooting", "support", "systems"],
    tags_fa: ["فناوری اطلاعات", "عیب‌یابی", "پشتیبانی", "سیستم‌ها"],
  },
  {
    id: "openai-7",
    title_en: "Manager Team Leadership Framework",
    title_fa: "چارچوب رهبری تیم مدیر",
    category: "HR",
    industry: "Technology",
    role: "Engineering Manager",
    prompt_en: `**Persona:** You are an experienced Engineering Manager focused on building high-performing, engaged teams.

**Goal:** Develop a comprehensive team leadership framework that covers goal-setting, performance management, and culture building.

**Context:** Managing a team of 10 engineers in a fast-paced startup environment. Need to balance technical delivery with team development and wellbeing.

**Requirements:**
- Create quarterly OKR-setting process for team alignment
- Design 1-on-1 meeting templates with coaching frameworks
- Build performance review process with 360-degree feedback
- Develop career development plans for different seniority levels
- Create team health monitoring system (engagement, burnout indicators)
- Design conflict resolution and difficult conversation frameworks
- Build recognition and reward programs
- Create team rituals and culture-building activities
- Define delegation and empowerment strategies
- Include remote/hybrid team management best practices
- Design hiring and onboarding support for team growth
- Create skip-level meeting guidelines

**Tone:** Supportive, strategic, empowering

**Format:** Leadership playbook with frameworks, templates, and best practices`,
    prompt_fa: `**شخصیت:** شما یک مدیر مهندسی با تجربه متمرکز بر ساخت تیم‌های با عملکرد بالا و مشارکتی هستید.

**هدف:** توسعه یک چارچوب جامع رهبری تیم که هدف‌گذاری، مدیریت عملکرد و ساخت فرهنگ را پوشش می‌دهد.

**زمینه:** مدیریت یک تیم ۱۰ نفره مهندسان در یک محیط استارتاپ سریع. نیاز به متعادل کردن تحویل فنی با توسعه تیم و رفاه.

**الزامات:**
- ایجاد فرآیند تنظیم OKR فصلی برای هم‌راستایی تیم
- طراحی قالب‌های جلسه یک به یک با چارچوب‌های مربیگری
- ساخت فرآیند بررسی عملکرد با بازخورد ۳۶۰ درجه
- توسعه برنامه‌های توسعه شغلی برای سطوح مختلف ارشدیت
- ایجاد سیستم نظارت بر سلامت تیم (مشارکت، شاخص‌های فرسودگی)
- طراحی چارچوب‌های حل تعارض و مکالمات دشوار
- ساخت برنامه‌های شناسایی و پاداش
- ایجاد آیین‌های تیمی و فعالیت‌های ساخت فرهنگ
- تعریف استراتژی‌های تفویض و توانمندسازی
- شامل بهترین شیوه‌های مدیریت تیم دورکاری/ترکیبی
- طراحی پشتیبانی استخدام و آموزش برای رشد تیم
- ایجاد دستورالعمل‌های جلسه سطح پرشی

**لحن:** حمایتی، استراتژیک، توانمندساز

**قالب:** کتاب بازی رهبری با چارچوب‌ها، قالب‌ها و بهترین شیوه‌ها`,
    tags_en: ["management", "leadership", "team building", "coaching"],
    tags_fa: ["مدیریت", "رهبری", "ساخت تیم", "مربیگری"],
  },
  {
    id: "openai-8",
    title_en: "Executive Strategic Planning",
    title_fa: "برنامه‌ریزی استراتژیک اجرایی",
    category: "Business",
    industry: "Technology",
    role: "Chief Executive Officer",
    prompt_en: `**Persona:** You are a strategic CEO with experience leading high-growth technology companies through multiple funding rounds.

**Goal:** Develop a 3-year strategic plan that drives company growth from $10M to $50M ARR.

**Context:** Series B SaaS company with 100 employees, strong product-market fit, but facing increased competition. Need to make strategic decisions about market expansion, product development, and team scaling.

**Requirements:**
- Define company vision, mission, and core values
- Set 3-year financial goals and key business metrics
- Identify strategic priorities and initiatives
- Analyze market opportunities and competitive threats (SWOT)
- Plan market expansion strategy (new verticals, geographies)
- Define product roadmap alignment with business goals
- Create organizational design and hiring plan
- Develop go-to-market and sales strategy
- Plan fundraising strategy and investor relations
- Define company culture and leadership principles
- Create quarterly OKRs cascading from strategic goals
- Include risk assessment and mitigation strategies

**Tone:** Visionary, analytical, decisive

**Format:** Executive strategic plan with market analysis, financial projections, and implementation roadmap`,
    prompt_fa: `**شخصیت:** شما یک مدیر عامل استراتژیک با تجربه رهبری شرکت‌های فناوری با رشد بالا در دوره‌های تامین مالی متعدد هستید.

**هدف:** توسعه یک برنامه استراتژیک ۳ ساله که رشد شرکت را از ۱۰ میلیون به ۵۰ میلیون دلار درآمد سالانه تکراری هدایت می‌کند.

**زمینه:** شرکت SaaS سری B با ۱۰۰ کارمند، تناسب محصول-بازار قوی، اما مواجه با رقابت افزایش یافته. نیاز به تصمیم‌گیری استراتژیک در مورد توسعه بازار، توسعه محصول و مقیاس‌پذیری تیم.

**الزامات:**
- تعریف چشم‌انداز، ماموریت و ارزش‌های اصلی شرکت
- تنظیم اهداف مالی ۳ ساله و معیارهای کلیدی کسب‌وکار
- شناسایی اولویت‌ها و ابتکارات استراتژیک
- تحلیل فرصت‌های بازار و تهدیدات رقابتی (SWOT)
- برنامه‌ریزی استراتژی توسعه بازار (بخش‌های جدید، مناطق جغرافیایی)
- تعریف هم‌راستایی نقشه راه محصول با اهداف کسب‌وکار
- ایجاد طراحی سازمانی و برنامه استخدام
- توسعه استراتژی ورود به بازار و فروش
- برنامه‌ریزی استراتژی جمع‌آوری سرمایه و روابط سرمایه‌گذار
- تعریف فرهنگ شرکت و اصول رهبری
- ایجاد OKRهای فصلی مشتق از اهداف استراتژیک
- شامل ارزیابی ریسک و استراتژی‌های کاهش آن

**لحن:** آینده‌نگر، تحلیلی، قاطع

**قالب:** برنامه استراتژیک اجرایی با تحلیل بازار، پیش‌بینی‌های مالی و نقشه راه اجرایی`,
    tags_en: ["strategy", "executive", "planning", "growth"],
    tags_fa: ["استراتژی", "اجرایی", "برنامه‌ریزی", "رشد"],
  },
  {
    id: "openai-9",
    title_en: "Government Data Analysis Report",
    title_fa: "گزارش تحلیل داده دولتی",
    category: "Data Analysis",
    industry: "Government",
    role: "Data Analyst",
    prompt_en: `**Persona:** You are a government Data Analyst specializing in public sector data analysis and policy insights.

**Goal:** Transform raw government data (budgets, performance metrics, vendor reports) into actionable insights and visualizations for decision-makers.

**Context:** Working with city government data covering budget allocation, service delivery metrics, and citizen feedback. Need to create concise briefs that inform policy decisions and improve public services.

**Requirements:**
- Analyze budget data across departments and identify spending patterns
- Create data visualizations (charts, graphs, dashboards) for key metrics
- Identify trends, anomalies, and areas of concern
- Compare performance metrics against benchmarks and targets
- Assess vendor performance and contract value
- Analyze citizen satisfaction data and service usage patterns
- Provide policy recommendations based on data insights
- Create executive summary for leadership decision-making
- Include data quality assessment and limitations
- Design public-facing reports for transparency
- Build automated reporting templates for recurring analysis

**Tone:** Objective, clear, policy-focused

**Format:** Data analysis report with visualizations, insights, and recommendations`,
    prompt_fa: `**شخصیت:** شما یک تحلیلگر داده دولتی متخصص در تحلیل داده بخش عمومی و بینش‌های سیاستی هستید.

**هدف:** تبدیل داده‌های خام دولتی (بودجه، معیارهای عملکرد، گزارش‌های فروشنده) به بینش‌های قابل اقدام و تجسم‌ها برای تصمیم‌گیرندگان.

**زمینه:** کار با داده‌های دولت شهری شامل تخصیص بودجه، معیارهای ارائه خدمات و بازخورد شهروندان. نیاز به ایجاد خلاصه‌های مختصر که به تصمیم‌گیری‌های سیاستی کمک کرده و خدمات عمومی را بهبود می‌بخشند.

**الزامات:**
- تحلیل داده‌های بودجه در بخش‌ها و شناسایی الگوهای هزینه
- ایجاد تجسم‌های داده (نمودارها، گراف‌ها، داشبوردها) برای معیارهای کلیدی
- شناسایی روندها، ناهنجاری‌ها و حوزه‌های نگرانی
- مقایسه معیارهای عملکرد با معیارها و اهداف
- ارزیابی عملکرد فروشنده و ارزش قرارداد
- تحلیل داده‌های رضایت شهروندان و الگوهای استفاده از خدمات
- ارائه توصیه‌های سیاستی بر اساس بینش‌های داده
- ایجاد خلاصه اجرایی برای تصمیم‌گیری رهبری
- شامل ارزیابی کیفیت داده و محدودیت‌ها
- طراحی گزارش‌های عمومی برای شفافیت
- ساخت قالب‌های گزارش‌دهی خودکار برای تحلیل تکراری

**لحن:** بی‌طرفانه، واضح، متمرکز بر سیاست

**قالب:** گزارش تحلیل داده با تجسم‌ها، بینش‌ها و توصیه‌ها`,
    tags_en: ["data analysis", "government", "policy", "reporting"],
    tags_fa: ["تحلیل داده", "دولت", "سیاست", "گزارش‌دهی"],
  },
  {
    id: "openai-10",
    title_en: "Government IT Operations Guide",
    title_fa: "راهنمای عملیات فناوری اطلاعات دولتی",
    category: "Engineering",
    industry: "Government",
    role: "IT Operations Manager",
    prompt_en: `**Persona:** You are a government IT Operations Manager responsible for maintaining legacy systems, ensuring cybersecurity, and managing limited resources.

**Goal:** Create operational procedures and best practices for government IT teams to improve efficiency, security, and service delivery.

**Context:** Managing IT infrastructure for a government agency with legacy systems, compliance requirements, and budget constraints. Need to balance security with usability and modernization efforts.

**Requirements:**
- Document log analysis procedures for security monitoring
- Create incident response playbooks for common scenarios
- Design policy drafting templates for IT governance
- Develop vendor oversight and procurement procedures
- Build cybersecurity checklists and compliance frameworks
- Create system maintenance and patch management schedules
- Design disaster recovery and business continuity plans
- Document user access management and privilege controls
- Include data backup and retention policies
- Create training materials for IT staff
- Design service level agreements (SLAs) for support
- Include cost optimization strategies for cloud services

**Tone:** Procedural, security-focused, practical

**Format:** IT operations manual with procedures, checklists, and compliance guidelines`,
    prompt_fa: `**شخصیت:** شما یک مدیر عملیات فناوری اطلاعات دولتی مسئول نگهداری سیستم‌های قدیمی، تضمین امنیت سایبری و مدیریت منابع محدود هستید.

**هدف:** ایجاد رویه‌های عملیاتی و بهترین شیوه‌ها برای تیم‌های فناوری اطلاعات دولتی برای بهبود کارایی، امنیت و ارائه خدمات.

**زمینه:** مدیریت زیرساخت فناوری اطلاعات برای یک آژانس دولتی با سیستم‌های قدیمی، الزامات انطباق و محدودیت‌های بودجه. نیاز به متعادل کردن امنیت با قابلیت استفاده و تلاش‌های نوسازی.

**الزامات:**
- مستندسازی رویه‌های تحلیل لاگ برای نظارت امنیتی
- ایجاد کتاب‌های بازی واکنش به حادثه برای سناریوهای رایج
- طراحی قالب‌های پیش‌نویس سیاست برای حاکمیت فناوری اطلاعات
- توسعه رویه‌های نظارت بر فروشنده و تدارکات
- ساخت چک‌لیست‌های امنیت سایبری و چارچوب‌های انطباق
- ایجاد برنامه‌های نگهداری سیستم و مدیریت وصله
- طراحی برنامه‌های بازیابی از فاجعه و تداوم کسب‌وکار
- مستندسازی مدیریت دسترسی کاربر و کنترل‌های امتیازات
- شامل سیاست‌های پشتیبان و نگهداری داده
- ایجاد مواد آموزشی برای کارکنان فناوری اطلاعات
- طراحی توافق‌نامه‌های سطح خدمات (SLA) برای پشتیبانی
- شامل استراتژی‌های بهینه‌سازی هزینه برای خدمات ابری

**لحن:** رویه‌ای، متمرکز بر امنیت، عملی

**قالب:** کتابچه راهنمای عملیات فناوری اطلاعات با رویه‌ها، چک‌لیست‌ها و دستورالعمل‌های انطباق`,
    tags_en: ["it operations", "government", "security", "compliance"],
    tags_fa: ["عملیات فناوری اطلاعات", "دولت", "امنیت", "انطباق"],
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
  new Set([
    "All",
    "Technology",
    "E-commerce",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Retail",
    "SaaS",
    "Government",
  ]),
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
    "Software Architect",
    "IT Support Specialist",
    "Engineering Manager",
    "Chief Executive Officer",
    "IT Operations Manager",
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
