// ------------------------------------------------------------
// Current research, publications and presentations.
// The order inside each list is the order on the site.
// ------------------------------------------------------------

export type Paper = {
  id: string;
  title: string;
  authors: string[]; // write your own name exactly as 'Maskey, A.' so it is bolded
  year: number;
  venue?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string; // publisher page or open PDF
  urlLabel?: string; // text on the link tag, e.g. 'Full text (SEBON)'
  pdf?: string;
  status?: string;
  note?: string;
  type: 'article' | 'working' | 'conference' | 'thesis';
  page?: string; // internal detail page
};

export const me = 'Maskey, A.';

export const publications: Paper[] = [
  {
    id: 'maskey2026resilience',
    title: "Resilience of Nepal's stock market to systemic shocks: A case study of COVID-19",
    authors: ['Maskey, A.'],
    year: 2026,
    venue: 'SEBON Journal',
    volume: '12',
    issue: '1',
    pages: '59–92',
    url: 'https://www.sebon.gov.np/uploads/2026/06/02/pm5HNv0prSWKfWMohvieF808Mu4BE4oOjzbyz4bC.pdf',
    urlLabel: 'Full text (SEBON)',
    type: 'article',
    note: 'Double Machine Learning with Ridge regression and five-fold cross-fitting on 1,371 NEPSE trading days (2018 to 2023), controlling for macroeconomic, pandemic-policy and market variables. Average daily returns during COVID-19 were about 21 basis points higher than the macroeconomic counterfactual. Robustness checks use alternative specifications, GARCH, event studies, sensitivity analysis and 1,000 placebo permutations.',
  },
  {
    id: 'shrestha2026genai',
    title:
      'Undergraduate students’ perceptions of generative artificial intelligence (Gen AI) in academic assignments',
    authors: ['Shrestha, N.', 'Manandhar, N. K.', 'Bhandari, B.', 'Maskey, A.', 'Giri, P. R.'],
    year: 2026,
    venue: 'Advances in Mobile Learning Educational Research',
    volume: '6',
    issue: '1',
    pages: '1809–1823',
    doi: '10.25082/AMLER.2026.01.014',
    type: 'article',
    note: 'A Technology Acceptance Model study of 174 undergraduates using t-tests and one-way ANOVA. 63.8% used generative AI daily and viewed its academic use positively (M = 3.82, SD = 0.44). Adoption depended on ease of use, instructor integration, mobile access and institutional support.',
  },
];

export const workingPapers: Paper[] = [
  {
    id: 'maskey2026connectedness',
    title:
      'Rising Connectedness, Weak Lead-Lag: Evidence from Nepal Stock Exchange Sector Indices Using Econometric and Machine Learning Methods',
    authors: ['Maskey, A.'],
    year: 2026,
    status: 'Working paper',
    type: 'working',
    page: '/research/nepse-connectedness/',
    pdf: '', // e.g. '/papers/Maskey_2026_NEPSE_Connectedness.pdf' once you decide to post it
    note: 'Extends my master’s thesis to ten NEPSE sector indices with a date-alignment audit, Diebold-Yilmaz connectedness, time-varying parameter VARs and out-of-sample machine learning forecasts tested against trading costs.',
  },
  {
    id: 'maskey2026metacognition',
    title:
      'Metacognitive learning behaviors in LMS-supported learning environments: A Delphi study and questionnaire development',
    authors: ['Maskey, A.'],
    year: 2026,
    status: 'In progress',
    type: 'working',
    note: 'A Delphi study with subject experts to build consensus on the metacognitive learning behaviors relevant to LMS-supported courses, followed by the development of a questionnaire to measure them.',
  },
];

// Earlier ideas kept here for later; they are not shown on the site.
export const parked = [
  'Dependence or Resilience? Electronic Payment Reliance and Disruption Losses in Nepali Firms',
  'Where Does Nepal Stand? Digital Payment Growth and Financial Inclusion in Nepal Compared with ASEAN Countries',
  'What users say about digital payment apps in Nepal (app review mining)',
  "Platform switching during Nepal's 2025 social media ban",
];

export const presentations: Paper[] = [
  {
    id: 'maskey2026awareness',
    title:
      'Stock market awareness and participation among university students: A case of Kathmandu University',
    authors: ['Maskey, A.', 'Khatiwada, G.'],
    year: 2026,
    venue: '1st Joint National Conference on Capital Market in the AI Era, Nepal',
    type: 'conference',
    note: 'A cross-sectional survey of 153 Kathmandu University students guided by the Knowledge–Practice model (awareness scale α = 0.877, participation scale α = 0.843). Highly aware students were six times more likely to participate and five times more likely to trade; awareness explained 55.2% of participation intensity. Male students reported higher awareness, but participation did not differ by gender or degree level.',
  },
];

export const thesis: Paper = {
  id: 'maskey2024thesis',
  title:
    'Forecasting Stock Exchange Sector Indices Using Granger Causality and Vector Autoregressive Models',
  authors: ['Maskey, A.'],
  year: 2024,
  venue: 'Master’s thesis, Nepal College of Information Technology, Pokhara University',
  type: 'thesis',
  note: 'An adaptive VAR with an empirically selected window outperformed static and fixed rolling-window models, especially for development banks, finance companies and hydropower. Granger causality and impulse responses traced cross-sector shocks and pointed to banking as a major source of market volatility.',
};

export const earlierWork = [
  {
    year: '2022',
    title: 'Forecasting the NEPSE index with ARIMA',
    text: 'An independent project modelling the NEPSE index with ARIMA using data from 2014 to 2022. This early work led to the research questions in my master’s thesis.',
  },
];

export const metacognition = {
  stage: 'Delphi study and questionnaire development',
  summary:
    'Learning management systems record student activity but reveal little about how students plan, monitor and evaluate their own learning. This study uses a Delphi process with subject experts to build consensus on the metacognitive learning behaviors relevant to LMS-supported courses, and develops a questionnaire to measure them.',
};

// ------------------------------------------------------------
// The featured working paper (its own page at /research/nepse-connectedness/)
// ------------------------------------------------------------
export const featured = {
  abstract:
    'Little is known about how shocks travel between sector indices in frontier equity markets. This paper studies ten sector indices of the Nepal Stock Exchange (NEPSE) from July 2018 to October 2026, with a six-sector panel from 2014 and a twelve-sector panel from 2021 as checks. It first sets out a date-alignment protocol and shows that one- and two-day shifts in a compiled dataset used in earlier work are enough to produce spurious Granger causality. On the aligned data, heteroskedasticity-robust Granger tests find 13 of 90 directed links at the 5% level, none of which survive multiple-testing corrections. Generalized impulse responses show that shocks reach other sectors almost entirely on the same day. The Diebold-Yilmaz total spillover index is 77.9%, with life insurance and development banks as the main net transmitters and hotels as the main net receiver. Rolling and time-varying parameter estimates show total connectedness rising from 26.5% in 2016 to 77.7% in 2022, while commercial banks turned from the main transmitter into a net receiver. A negative market-lead coefficient after 2021 turns out to be relative momentum, not reversal. Out of sample, a random forest beats the random walk in all ten sectors and tree models predict direction on up to 62% of days, while a linear VAR does worse than the random walk. After NEPSE trading costs, however, no direction strategy beats buy and hold.',

  findings: [
    { value: '0 of 90', label: 'Directed Granger links that survive multiple-testing corrections' },
    { value: '77.9%', label: 'Diebold-Yilmaz total spillover index across ten sectors' },
    { value: '26.5% → 77.7%', label: 'Rise in total connectedness, 2016 to 2022' },
    { value: '62%', label: 'Best next-day direction accuracy (tree models), gone after trading costs' },
  ],

  questions: [
    'Do past returns in one NEPSE sector help predict next-day returns in another once heteroskedasticity and multiple testing are taken into account?',
    'How strongly are NEPSE sectors connected, which sectors transmit and which receive shocks, and how has this changed over time?',
    'Can machine learning models use cross-sector information to forecast next-day sector returns better than simple benchmarks, and which inputs do they use?',
    'Is any forecasting gain large enough to survive NEPSE trading costs?',
  ],

  panels: [
    { panel: 'B (main)', period: 'Jul 2018 to Oct 2026', sectors: 10, days: '1,871', members: 'Commercial banks, development banks, finance, hotels, hydropower, life insurance, non-life insurance, microfinance, manufacturing, others' },
    { panel: 'A (long)', period: 'Jan 2014 to Oct 2026', sectors: 6, days: '2,881', members: 'Commercial banks, development banks, finance, hotels, hydropower, others' },
    { panel: 'C (full)', period: 'Mar 2021 to Oct 2026', sectors: 12, days: '1,311', members: 'Panel B plus investment and trading' },
  ],

  keywords: [
    'connectedness',
    'data quality',
    'Diebold-Yilmaz spillover index',
    'forecast evaluation',
    'frontier markets',
    'Granger causality',
    'machine learning',
    'Nepal Stock Exchange',
    'SHAP',
    'time-varying parameter VAR',
  ],
};
