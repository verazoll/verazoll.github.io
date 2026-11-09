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
      'Worked side by side with markets and dealers overseas – from market deep dives to on-site presentations, close to where the real insights are.',
      'Built strong working relationships across departments and continents.',
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
      { name: 'Aftersales Business Development', detail: 'Developed a "Used Car Check" concept to evaluate the condition of used Porsche vehicles – a new service generating additional Aftersales revenue; monthly revenue reporting' },
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

export const education = [
  { title: 'MSc Business Analytics', org: 'NOVA School of Business and Economics, Lisbon', period: '2026 – 2027', note: 'Data analytics & machine learning in a business context' },
  { title: 'B.Eng. Industrial Engineering', org: 'DHBW Stuttgart · dual programme with Porsche AG', period: '2018 – 2021', note: 'Grade 1.5' },
  { title: 'Abitur (High School Diploma)', org: 'Kreisgymnasium Riedlingen', period: '2017', note: 'Grade 1.0' },
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
  text: 'Surf trips, community events and sunsets in the water – and the place where I met many great cross-departmental colleagues and some of my best friends, with many more days to come.',
  gallery: [
    { src: '/images/psc/psc-letters.jpg', alt: 'Club members forming the letters PSC on the beach, seen from above' },
    { src: '/images/psc/psc-beach-sunset.jpg', alt: 'Two club members on the beach at sunset' },
    { src: '/images/psc/psc-classic.jpg', alt: 'Club members next to a classic Porsche 356' },
    { src: '/images/psc/psc-sunset.jpg', alt: 'Club members waving in the water at sunset' },
    { src: '/images/psc/psc-illustration-2.jpg', alt: 'Illustration of me surfing with a laptop' },
    { src: '/images/psc/psc-night.jpg', alt: 'Club members at Porscheplatz at night' },
    { src: '/images/psc/psc-club.jpg', alt: 'Porsche Surf Club members talking at an event' },
    { src: '/images/psc/psc-boat.jpg', alt: 'Selfie in the boat mirror on the way to the water' },
    { src: '/images/psc/psc-meetup.jpg', alt: 'Porsche Surf Club meetup next to classic Porsche cars' },
    { src: '/images/psc/psc-plaque.jpg', alt: 'Farewell plaque from the Porsche Surf Club: "Vera – there is no substitute"' },
  ],
};

export const workGallery = [
  { src: '/images/work/team.jpg', caption: 'Dealer workshop on SAFE in Bangkok' },
  { src: '/images/work/sales-funnel.jpg', caption: 'Strategic council with market CEOs and sales leadership' },
  { src: '/images/work/deep-dive.jpg', caption: 'Presenting a deep-dive analysis at Porsche Thailand' },
  { src: '/images/work/welcome-apac.jpg', caption: 'At the Porsche Asia Pacific office' },
  { src: '/images/work/sydney-south.jpg', caption: 'Dealer visit at Porsche Centre Sydney South' },
  // TODO: confirm captions below
  { src: '/images/work/workshop-screen.jpg', caption: 'Presenting sales funnel insights' },
  { src: '/images/work/presenting-room.jpg', caption: 'Workshop with market colleagues' },
  { src: '/images/work/market-visit.jpg', caption: 'Market visit at Porsche Cars Australia' },
  { src: '/images/work/porsche-centre.jpg', caption: 'Visiting a Porsche Centre' },
  { src: '/images/work/colleagues.jpg', caption: 'With colleagues at the office' },
  { src: '/images/work/farewell.jpg', caption: 'Farewell at Porsche Asia Pacific' },
];

// `stat` is shown instead of a photo when no image is set.
// `line` is the punchline shown big in the orbit centre, `text` links the hobby to how I work.
export const beyond = [
  {
    title: 'Surfing',
    line: 'Patience, confidence, courage.',
    text: 'Wait for the right wave, then commit fully – the same goes for good business decisions.',
    image: '/images/hobbies/surfing-wave.jpg',
  },
  {
    title: 'Beach Volleyball',
    line: 'Read. Decide. Attack.',
    text: 'The most technical and tactical sport I know: read the game, find the open spot, hit it. Playing regional tournaments.',
    image: '/images/hobbies/beach-volleyball.jpg',
    pos: 'center 75%',
  },
  {
    title: 'Ski Instructor',
    line: 'Sharing what I can do.',
    text: 'Teaching others makes me happy – and trains me to explain complex things simply. B-Trainer at Skizunft TSV Ertingen.',
    image: '/images/hobbies/ski.jpg',
  },
  {
    title: 'HYROX',
    line: 'No shortcut to success.',
    text: 'Commitment and consistency are key – on the race course and in every project. 4th at the 2022 World Championship.',
    image: '/images/hobbies/hyrox.jpg',
    pos: 'center 45%',
    stat: '4th',
  },
  {
    title: 'Skateboarding',
    line: 'Fall. Recover. Ride again.',
    text: 'An injury kept me off the board for almost a year. Setbacks are part of the ride – patience and resilience bring you back.',
    image: '/images/hobbies/skate.jpg',
  },
  {
    title: 'Dance',
    line: 'Express. Connect. Feel free.',
    text: 'The best way to express myself and connect with my body – my creative counterbalance to data.',
    image: '/images/hobbies/dance.jpg',
    pos: 'center 0%',
  },
  {
    title: 'Travel',
    line: 'Never get stuck.',
    text: 'Adapting to new cultures again and again – from Work & Travel in Australia to business in nine international markets.',
    image: '/images/hobbies/travel.jpg',
    pos: 'center 56%',
  },
];
