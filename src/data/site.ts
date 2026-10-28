// ------------------------------------------------------------
// Site-wide settings. Edit this file first.
// Leave a link as an empty string ('') to hide it everywhere.
// ------------------------------------------------------------

export const site = {
  url: 'https://avinashmaskey.com.np',
  name: 'Avinash Maskey',
  givenName: 'Avinash',
  familyName: 'Maskey',
  initials: 'AM',

  role: 'Lecturer',
  department: 'Department of STEAM Education',
  school: 'School of Education',
  institution: 'Kathmandu University',
  institutionUrl: 'https://kusoed.edu.np/',
  company: 'Prajanya Soft Pvt. Ltd.',
  location: 'Kathmandu, Nepal',

  // Used in search results and link previews (aim for 150 to 160 characters).
  description:
    'Avinash Maskey, Lecturer at Kathmandu University, Nepal, studies information systems, digital platforms and fintech with econometric and machine learning methods.',

  emails: [
    { label: 'Kathmandu University', note: 'Lecturer', address: 'avinash.maskey@kusoed.edu.np' },
    { label: 'Prajanya Soft', note: 'Co-founder', address: 'avinash.maskey@prajanya.com' },
    { label: 'Personal', note: '', address: 'avinash.maskey11@gmail.com' },
  ],
  // The address used for "Email" buttons and structured data.
  emailPrimary: 'avinash.maskey@kusoed.edu.np',

  links: {
    scholar: 'https://scholar.google.com/citations?hl=en&user=CI15U6MAAAAJ',
    linkedin: 'https://www.linkedin.com/in/avinash-maskey-5294a411b/',
    orcid: '', // e.g. 'https://orcid.org/0000-0000-0000-0000'
    github: '', // e.g. 'https://github.com/avinashmaskey'
    ssrn: '', // add once the working paper is on SSRN
  },

  cvPdf: '/cv/Avinash_Maskey_CV.pdf',

  // Put a portrait JPG at public/images/avinash.jpg and set this to true.
  photo: true,
  photoPath: '/images/avinash.jpg',

  // Google Search Console > Add property > HTML tag > paste only the content="..." value.
  googleVerification: '',

  // The note shown under the introduction. Set to '' to hide.
  openTo:
    'I welcome research roles and collaborations in digital platforms and fintech, causal inference and machine learning for economic data, and educational technology.',
};

// Shown on the home page and the Research page.
export const interests = [
  {
    title: 'Digital platforms and fintech',
    text: 'Adoption and use of digital payments, mobile wallets and online trading platforms, and how users and firms respond to system failures and sudden policy changes.',
  },
  {
    title: 'Causal inference and machine learning for economic data',
    text: 'Double Machine Learning, time series econometrics and tree-based models, evaluated against simple benchmarks and realistic costs.',
  },
  {
    title: 'Educational technology',
    text: 'Metacognitive learning behaviors in LMS-supported learning environments and students’ use of generative AI in their coursework.',
  },
];

// Short list for search engines and structured data only (not shown on the page).
export const topics = [
  'information systems',
  'digital platforms',
  'fintech',
  'digital payments',
  'causal inference',
  'machine learning',
  'econometrics',
  'Nepal Stock Exchange',
  'educational technology',
  'metacognition',
  'learning management systems',
];
