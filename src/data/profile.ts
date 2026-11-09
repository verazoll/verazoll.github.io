// Single source of truth for all site content. Edit here, not in the components.

export const profile = {
  name: 'Vera Zoll',
  headline:
    'MSc Business Analytics @ NOVA SBE | Ex-Porsche APAC & Water-Tech Startup | Curious about ML & GenAI, driven by dreams (and data)',
  location: 'Lisbon, Portugal',
  intro:
    'Eight years at Porsche AG – from dual student to shaping regional CRM, sales and marketing for Asia Pacific and Australia. Now catching a new wave: diving deeper into data analytics and machine learning at NOVA SBE to turn data into business decisions, and building my own products on the side.',
  stats: [
    { value: '8', label: 'years at Porsche AG' },
    { value: '9', label: 'international markets' },
    { value: '5', label: 'languages' },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/vera-zoll-34b5731a5',
    github: 'https://github.com/verazoll',
  },
};

export const experience = [
  {
    role: 'Regional CRM, Sales & Marketing',
    org: 'Porsche Asia Pacific & Porsche Cars Australia',
    period: '02/2024 – 08/2026',
    points: [
      'Managed CRM and marketing projects for the Regional Office in Singapore and the importer Porsche Cars Australia.',
      'Developed the "Sales Funnel Management Excellence" (SAFE) concept for the Overseas & Emerging Markets region – from shaping the strategic framework and reporting, to building a market enablement hub, to dealer trainings across the globe.',
    ],
    tags: ['CRM', 'Sales Funnel', 'Reporting', 'Dealer Training', 'APAC'],
  },
  {
    role: 'VA Talent Program',
    org: 'Porsche AG',
    period: '03/2023 – 03/2024',
    points: ['"Need for Speed": analysed speed bottlenecks in Aftersales and developed measures to accelerate processes.'],
    tags: ['Process Analysis'],
  },
  {
    role: 'Specialist Aftersales Promotion & Communication',
    org: 'Porsche AG',
    period: '10/2021 – 01/2024',
    points: [
      'Developed communication concepts, campaigns and assets for Aftersales products and services.',
      'Prepared and led the "Service Communication Council" with Porsche subsidiaries worldwide.',
      'Key Account for Porsche Middle East and Porsche Ibérica; initiated the Service Churn Project.',
    ],
    tags: ['Marketing', 'Stakeholder Mgmt', 'Churn'],
  },
  {
    role: 'Dual Student – Rotations across the Value Chain',
    org: 'Porsche AG · DHBW Stuttgart',
    period: '09/2018 – 09/2021',
    points: ['Rotations across the value chain alongside the B.Eng. in Industrial Engineering:'],
    stations: [
      { name: 'Aftersales Communication', detail: "Bachelor thesis on the strategic positioning of Aftersales content across Porsche's online channels" },
      { name: 'Controlling Sales', detail: 'Excel/VBA monthly reports, internal cost calculation tool, mid-year budgeting and forecasting' },
      { name: 'Aftersales Business Development', detail: '"Used Car Check" concept for additional revenue; monthly revenue reporting' },
      { name: 'Panamera Development', detail: 'Prototype and vehicle testing' },
      { name: 'Procurement Metal', detail: '' }, // TODO: add a one-liner
      { name: 'Sales Smart Mobility', detail: 'Digital Ecosystem' },
    ],
    tags: ['Controlling', 'VBA', 'Engineering'],
  },
];

// Markets shown on the world map. Country names must match world-atlas (Natural Earth) names.
// `hubs` are drawn as glowing dots (also used for countries too small for the map).
export const markets = {
  regions: [
    { name: 'Home base', countries: ['Germany'] },
    { name: 'Asia Pacific', countries: ['Thailand', 'Malaysia'] }, // TODO: confirm APAC markets
    { name: 'East Asia', countries: ['Japan', 'South Korea', 'Taiwan'] },
    { name: 'Australia', countries: ['Australia'] },
    { name: 'Middle East', countries: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'] },
    { name: 'Latin America', countries: ['Brazil', 'Mexico', 'Chile', 'Colombia', 'Peru', 'Argentina'] }, // TODO: confirm
    { name: 'Iberia', countries: ['Spain', 'Portugal'] },
  ],
  hubs: [
    { name: 'Stuttgart', note: 'Porsche AG HQ', lon: 9.18, lat: 48.78 },
    { name: 'Singapore', note: 'Porsche Asia Pacific regional office', lon: 103.82, lat: 1.35 },
    { name: 'Bahrain', note: 'Porsche Middle East', lon: 50.56, lat: 26.07 },
    { name: 'Melbourne', note: 'Porsche Cars Australia', lon: 144.96, lat: -37.81 },
  ],
};

// What I took away from eight years at Porsche (from my farewell post, in short).
export const values = [
  { title: 'Close to markets', text: 'Working side by side with markets and dealers overseas – that is where the real insights are.' },
  { title: 'Every deep dive', text: 'Every challenge, every discussion, every presentation – I enjoyed them all.' },
  { title: 'People first', text: 'Great colleagues and friends across departments and continents, on and off the water.' },
];

export const education = [
  { title: 'MSc Business Analytics', org: 'NOVA School of Business and Economics, Lisbon', period: '2026 – 2027' },
  { title: 'B.Eng. Industrial Engineering', org: 'DHBW Stuttgart · dual programme with Porsche AG', period: '2018 – 2021' },
];

export const projects = [
  {
    name: 'Surfletics',
    kind: 'Passion Project · 2026',
    text: 'A surf app that matches surf forecasts to the individual surfer. Interactive click dummy live, in-app survey to validate demand, and a planned ML "fit score" model incl. crowd levels.',
    link: 'https://verazoll.github.io/surfletics',
    linkLabel: 'Open click dummy',
    tags: ['Product', 'Machine Learning', 'UX'],
    image: '/images/surfletics.jpg',
  },
  {
    name: 'Aqua Aware',
    kind: 'Start-up · 2026',
    text: 'Supported technical and software development of a water measurement device and represented the start-up at the 9th International Symposium at the Fraunhofer Institute.',
    link: '',
    linkLabel: '',
    tags: ['Hardware', 'Software', 'Pitching'],
    image: '/images/aquaaware/symposium.jpg',
    inset: '/images/aquaaware/device.jpg',
  },
];

export const skills = {
  'Data & Tech': ['Python', 'Machine Learning', 'Excel / VBA', 'Access', 'SolidWorks', 'AI Automation'],
  Business: [
    'CRM',
    'Sales Funnel Management',
    'Reporting',
    'Marketing & Communication',
    'Project Management',
    'Stakeholder Communication',
    'Organisational Skills',
    'Cross-cultural Collaboration',
  ],
  Languages: ['German · native', 'English · C1', 'French · B2', 'Spanish · B2', 'Portuguese · beginner'],
};

export const surfClub = {
  title: 'Porsche Surf Club',
  text: 'Member of the Porsche Surf Club – surf trips, community events and sunsets in the water with colleagues. Surfing is also the reason Surfletics exists.',
  gallery: [
    { src: '/images/psc/psc-letters.jpg', alt: 'Club members forming the letters PSC on the beach, seen from above' },
    { src: '/images/psc/psc-sunset.jpg', alt: 'Club members waving in the water at sunset' },
    { src: '/images/psc/psc-club.jpg', alt: 'Porsche Surf Club members talking at an event' },
    { src: '/images/psc/psc-meetup.jpg', alt: 'Porsche Surf Club meetup next to classic Porsche cars' },
  ],
};

export const workGallery = [
  { src: '/images/work/deep-dive.jpg', caption: 'Presenting a market deep-dive analysis' },
  { src: '/images/work/sales-funnel.jpg', caption: 'Sales funnel workshop' },
  { src: '/images/work/welcome-apac.jpg', caption: 'Welcome at Porsche Asia Pacific' },
  { src: '/images/work/sydney-south.jpg', caption: 'Porsche Centre Sydney South' },
  { src: '/images/work/team.jpg', caption: 'With the team' },
  { src: '/images/work/porsche-platz.jpg', caption: 'Porscheplatz, Stuttgart-Zuffenhausen' },
];

// `stat` is shown instead of a photo when no image is set.
export const beyond = [
  { title: 'Surfing', text: 'Chasing waves wherever I can – the reason Surfletics exists.', image: '/images/hobbies/surfing.jpg' },
  { title: 'Beach Volleyball', text: 'Team sport, sun and sand – my favourite way to switch off.', image: '/images/hobbies/beach-volleyball.jpg', pos: 'center 75%' },
  { title: 'Ski Instructor', text: 'B-Trainer and head of the junior group at Skizunft TSV Ertingen.', image: '/images/hobbies/ski.jpg' },
  { title: 'HYROX', text: '4th place at the HYROX World Championship 2022 in Las Vegas.', image: '/images/hobbies/hyrox.jpg', pos: 'center 45%', stat: '4th', statLabel: 'World Championship 2022' },
  { title: 'Skateboarding', text: 'Concrete waves for the days without swell.', image: '/images/hobbies/skate.jpg' },
  { title: 'Dance', text: 'Rhythm, expression and a great counterbalance to data.', image: '/images/hobbies/dance.jpg', pos: 'center 0%' },
  { title: 'Travel', text: 'Work & Travel in Australia, New Zealand and Indonesia; business trips to Singapore, Australia and Thailand.', image: '/images/hobbies/travel.jpg', pos: 'center 56%' },
  { title: 'Photography', text: 'Capturing places and moments along the way.', image: '/images/hobbies/photography.jpg' },
];
