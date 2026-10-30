// ------------------------------------------------------------
// News, career path, teaching, experience and background.
// ------------------------------------------------------------

export const news = [
  { date: 'Oct 2026', text: 'Released a working paper on shock transmission across NEPSE sector indices.', href: '/research/nepse-connectedness/' },
  { date: '2026', text: 'Published “Resilience of Nepal’s stock market to systemic shocks: A case study of COVID-19” in the SEBON Journal.', href: 'https://www.sebon.gov.np/uploads/2026/06/02/pm5HNv0prSWKfWMohvieF808Mu4BE4oOjzbyz4bC.pdf' },
  { date: '2026', text: 'Co-authored an article on undergraduate perceptions of generative AI, published in Advances in Mobile Learning Educational Research.', href: 'https://doi.org/10.25082/AMLER.2026.01.014' },
  { date: '2026', text: 'Presented a study of stock market awareness and participation among university students at the 1st Joint National Conference on Capital Market in the AI Era.', href: '/publications/#maskey2026awareness' },
  { date: 'Jul 2025', text: 'Joined Kathmandu University as a full-time Lecturer and continued as co-founder of Prajanya Soft.' },
];

// ---------- career path (home page) ----------

export const journey = [
  {
    years: '2006–2012',
    title: 'Schooling in Darjeeling and Kathmandu ',
    text: 'Completed ICSE schooling at Pinehall Academy, Darjeeling, India and higher secondary education in commerce at Rai School, Kathmandu, Nepal where I received the Best Disciplined Student award (2011–12).',
  },
  {
    years: '2014–2018',
    title: 'Bachelor of Information Management, Kist College (Nepal)',
    text: 'Ranked in the top five at Tribhuvan University in two semesters and topped my college in three. Served as President of the Sports Club and later of the IT Club.',
    href: '/background/#student',
  },
  {
    years: '2018–2019',
    title: 'Banking and financial analysis',
    text: 'Worked as an IT intern at Century Commercial Bank and then as a financial analyst at Kriti Capital & Investments, analysing economic and development bank data.',
    href: '/background/#finance',
  },
  {
    years: 'Nov 2019',
    title: 'First teaching appointment, Kist College (Nepal)',
    text: 'Joined my alma mater as a lecturer in the BIM program one year after graduating, and continued teaching part-time at several colleges until 2025.',
    href: '/teaching/#earlier',
  },
  {
    years: '2020–2024',
    title: 'Master of Computer Information System, NCIT College (Nepal)',
    text: 'Graduated as batch topper. My thesis on NEPSE sector indices was my first substantial piece of empirical research.',
  },
  {
    years: '2022–2025',
    title: 'Co-founder, Prajanya Soft (Nepal)',
    text: 'Worked full-time as co-founder, first as Project Manager and later as Director of Product Management, leading fintech, healthcare and e-commerce systems for clients in Nepal and abroad.',
    href: '/background/#industry',
  },
  {
    years: '2024–2025',
    title: 'Visiting Faculty and Curriculum Developer, Kathmandu University (Nepal)',
    text: 'Taught in the BTech Ed (IT) program and developed new undergraduate and master’s syllabi for the Department of STEAM Education.',
    href: '/teaching/#curriculum',
  },
  {
    years: '2025–now',
    title: 'Lecturer, Kathmandu University (Nepal)',
    text: 'Teaching, research supervision, curriculum development and the Focal Person role for five partner institutions. Published my first journal articles in 2026 and began a Delphi study on metacognitive learning in LMS-supported courses.',
    href: '/teaching/',
  },
];

// ---------- teaching ----------

export const thisSemester = {
  term: '',
  courses: [
    { code: 'ITEX 213', title: 'Principles of Internet Technologies and Web Applications' },
    { code: 'ITEX 300', title: 'Management Information System' },
    { code: 'ITEX 499', title: 'Professional IT Project II', note: 'capstone' },
  ],
};

// Courses taught at Kathmandu University, ordered by level and course code.
export const kuCourses = {
  undergraduate: [
    { code: 'ITEX 101', title: 'Software Development' },
    { code: 'ITEX 104', title: 'Database System' },
    { code: 'ITEX 203', title: 'System Analysis and Design' },
    { code: 'ITEX 213', title: 'Principles of Internet Technologies and Web Applications' },
    { code: 'ITEX 300', title: 'Management Information System' },
    { code: 'ITEX 324', title: 'Artificial Intelligence' },
    { code: 'ITEX 499', title: 'Professional IT Project II' },
  ],
  graduate: [{ code: 'STED 508', title: 'AI in STEAM Education', program: 'Master of STEAM Education' }],
};

// Syllabi developed for the Department of STEAM Education.
export const curriculum = {
  graduate: [{ code: 'STED 508', title: 'AI in STEAM Education' }],
  undergraduate: [
    { code: 'ITEX 213', title: 'Principles of Internet Technologies and Web Applications' },
    { code: 'ITEX 320', title: 'Web Engineering' },
    { code: 'ITEX 400', title: 'E-Governance' },
    { code: 'ITEX 499', title: 'Professional IT Project II' },
    { code: 'VPED 442', title: 'Internship: Work-Based Learning' },
    { code: 'TBD', title: 'Database Management System' },
    { code: 'TBD', title: 'Software Engineering' },
  ],
};

export const supervisionAreas = [
  'Machine learning',
  'Educational technology',
  'Information management and systems',
];

export const earlierTeaching = {
  role: 'Visiting and Adjunct Faculty (part-time)',
  period: 'November 2019 to July 2025',
  courses: [
    'Foundation of Information Technology',
    'Database Systems',
    'Web Technology',
    'System Analysis and Design',
    'Software Engineering',
    'E-Commerce',
    'E-Governance',
    'Society and Ethics in IT',
    'Management Information Systems',
  ],
  institutions: [
    { years: '2024–2025', place: 'Kathmandu University, School of Education', programs: 'BTech Ed (IT)' },
    { years: '2022–2025', place: 'Thames International College', programs: 'BIM, BCA, BBA' },
    { years: '2023–2025', place: 'New Summit College', programs: 'BBM' },
    { years: '2024', place: 'Kathmandu Model College', programs: 'BCA' },
    { years: '2022–2024', place: 'Shanker Dev Campus', programs: 'BIM' },
    { years: '2019–2023', place: 'Kist College', programs: 'BIM, BIT' },
    { years: '2023', place: 'Padma Kanya Multiple Campus', programs: 'BBA' },
    { years: '2022–2023', place: 'IMS College', programs: 'BIM' },
  ],
  guest: [
    { year: '2022', text: 'Web Technology II, BIM fourth semester, Oxford College, Butwal' },
    { year: '2025', text: 'Web Technology I, BIM third semester, Sankalpa College, Banepa' },
  ],
};

export const service = [
  {
    years: '2025–now',
    text: 'Focal Person for the BTech Ed (IT) programs at Kathmandu University’s five partner institutions, responsible for admissions coordination, academic monitoring, assessment coordination and reporting to the department.',
  },
  { years: '2024–now', text: 'Curriculum and assessment development for the Department of STEAM Education.' },
  { years: '2019–2025', text: 'Examination question setting and internal assessment moderation.' },
];

// ---------- background page ----------

export const prajanya = {
  period: 'Full-time from January 2022 to July 2025; Now Co-founder',
  roles: 'Co-founder · Project Manager, later Director of Product Management',
  intro:
    'I co-founded Prajanya Soft, a software company based in Kathmandu, in January 2022. Until July 2025 I worked there full-time, first as Project Manager and then as Director of Product Management. The company has delivered web and mobile applications for more than ten clients in Nepal and abroad. I continue as co-founder alongside my full-time position at Kathmandu University.',
  products: [
    {
      title: 'E-commerce platform',
      text: 'An online store with inventory management, order workflows and responsive interfaces, built to balance usability with operational reliability.',
    },
    {
      title: 'Hospital management ERP',
      text: 'An integrated system for patient records, diagnostics, billing and inventory, with role-based access and a strong focus on data integrity.',
    },
    {
      title: 'Trade services platform for an Australian client',
      text: 'An international project for which I coordinated requirements, architecture decisions and delivery across distributed teams.',
    },
    {
      title: 'Fintech and consumer service applications',
      text: 'Web and mobile products for which I set priorities, planned releases and worked with engineers, designers and QA staff to translate business processes into maintainable systems.',
    },
  ],
  lesson:
    'This work shaped my research interests. Many of the questions I now study on digital payments, system disruptions and user behavior come from building and supporting these products.',
};

export const finance = [
  {
    years: '2019',
    title: 'Financial Analyst, Trading and Research Department',
    org: 'Kriti Capital & Investments Ltd. (now Machhapuchchhre Capital Limited)',
    when: 'March to July 2019',
    text: 'Analysed macroeconomic and development bank data and conducted fundamental and technical analysis of listed stocks for the trading and research team.',
  },
  {
    years: '2018',
    title: 'IT Intern, IT Department',
    org: 'Century Commercial Bank Ltd. (now Prabhu Bank Limited)',
    when: 'April to August 2018',
    text: '',
  },
];

export const education = [
  {
    years: '2020–2024',
    degree: 'Master of Computer Information System (MCIS)',
    school: 'Nepal College of Information Technology, Pokhara University, Nepal',
    detail: 'Batch topper; university topper in the third semester.',
    extra: 'Thesis: Forecasting Stock Exchange Sector Indices Using Granger Causality and Vector Autoregressive Models.',
  },
  {
    years: '2014–2018',
    degree: 'Bachelor of Information Management (BIM)',
    school: 'Kist College of Management, Tribhuvan University, Nepal',
    detail: 'University top five in the fifth and eighth semesters; college semester topper in the fifth, sixth and eighth semesters.',
  },
  {
    years: '2010–2012',
    degree: 'High School (Central Board of Secondary Education), Commerce',
    school: 'Rai School, Kathmandu, Nepal',
    detail: 'Best Disciplined Student, 2011–12.',
  },
];

export const studentLife = {
  intro:
    'At Kist College I took an active part in student leadership, serving as President of the Sports Club in 2016–17 and of the IT Club in 2017–18.',
  items: [
    'Organized the Kist Education Fair in 2016, 2017 and 2018 and volunteered as a student counselor.',
    'Served on the organizing committee of a national-level workshop on machine learning and data science (2018).',
    'Developed web applications with the IT Club, including a blood donation system and a college management system, and took part in the KU IT Meet 2018.',
    'Captained the college football team for two years and coached the BBA football team for three years.',
    'Represented the BIM program at the “Let’s Stay in Nepal” event with a presentation on financial opportunities in Nepal.',
    'Won a college music competition with my band.',
  ],
  return:
    'In November 2019, one year after graduating, I joined Kist College as a lecturer in the BIM program and later also taught in the BIT program. It was my first teaching appointment and the start of nearly seven years in university teaching.',
};

export const methods = [
  { label: 'Econometrics', value: 'VAR and Granger causality, impulse responses, Diebold-Yilmaz connectedness, TVP-VAR, GARCH, event studies, ARIMA' },
  { label: 'Causal and ML', value: 'Double Machine Learning, random forests, XGBoost, SHAP, forecast evaluation against benchmarks and costs' },
  { label: 'Survey methods', value: 'Scale reliability, t-tests, ANOVA, logistic and linear regression' },
  { label: 'Programming', value: 'Python (pandas, NumPy, statsmodels, scikit-learn, XGBoost), R, SQL, Java, JavaScript, PHP' },
  { label: 'Tools', value: 'Git, MySQL, Jira, Confluence, Google Analytics 4, Search Console' },
  { label: 'Languages', value: 'English, Nepali, Hindi' },
];

export const honors = [
  'Batch Topper, Master of Computer Information System, NCIT, Pokhara University',
  'University top five, fifth and eighth semesters, BIM, Tribhuvan University',
  'President, IT Club (2017–18) and Sports Club (2016–17), Kist College',
  'Best Disciplined Student, Rai School (2011–12)',
];
