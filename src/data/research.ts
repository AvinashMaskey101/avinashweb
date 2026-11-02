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
      'Do NEPSE Sectors Lead Each Other? Rising Connectedness and Weak Lead-Lag in the Nepal Stock Exchange',
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
  venue: 'Master’s thesis, Nepal College of Information Technology, Pokhara University, Nepal',
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
  summary:
    'This working paper asks how shocks travel between sector indices of the Nepal Stock Exchange (NEPSE), a frontier market that has received little research attention. It extends my master’s thesis with rebuilt and audited daily data on ten sector indices. The paper combines lead-lag tests, connectedness measures and out-of-sample machine learning forecasts, and judges the forecasts by whether they would still pay after NEPSE trading costs.',

  questions: [
    'Do past returns in one NEPSE sector help predict next-day returns in another, once volatility and multiple testing are accounted for?',
    'How connected are NEPSE sectors, which sectors transmit and which receive shocks, and how has this changed over time?',
    'Can machine learning models use cross-sector information to forecast better than simple benchmarks?',
    'Would any forecasting gain survive real trading costs?',
  ],

  approach: [
    { title: 'Data', text: 'Daily closing values and turnover for NEPSE sector indices from the public index history, audited against the NEPSE trading calendar and aligned before any model is run.' },
    { title: 'Lead-lag and spillovers', text: 'A vector autoregression with heteroskedasticity-robust Granger tests and multiple-testing corrections, generalized impulse responses, and Diebold-Yilmaz connectedness traced with rolling windows and a time-varying parameter VAR.' },
    { title: 'Forecasting', text: 'An out-of-sample comparison of a random walk, AR, VAR, random forest and XGBoost, with Diebold-Mariano tests and SHAP values to show which inputs the models use.' },
    { title: 'Economic value', text: 'Each forecast is turned into a long-or-cash trading rule and evaluated after NEPSE transaction costs.' },
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
