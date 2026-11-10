// Single source of truth for all site content. Edit here, not in the components.

export const profile = {
  name: 'Vera Zoll',
  headline:
    'MSc Business Analytics @ NOVA SBE | Ex-Porsche APAC & Water-Tech Startup | Curious about ML & GenAI, driven by dreams (and data)',
  location: 'Lisbon, Portugal',
  traits: ['Results-driven', 'Analytical', 'Hands-on', 'Ambitious', 'Communicative'],
  motto: 'Passionate about whatever drives me.',
  motto2: "Either I'm all in or all out.",
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
      'Worked side by side with markets and dealers overseas – from market deep dives to on-site presentations.',
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
      'Key Account for Porsche Middle East and Porsche Ibérica; shaped the Service Churn Project.',
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
      { name: 'Aftersales Business Development', detail: 'Developed a "Used Car Check" concept to generate additional revenue, based on a Business Model Canvas; monthly revenue reporting' },
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
    { name: 'Asia Pacific', countries: ['Thailand', 'Malaysia'] }, // TODO: confirm Malaysia
    { name: 'East Asia', countries: ['Japan', 'South Korea', 'Taiwan'] },
    { name: 'Australia', countries: ['Australia'] },
    // Porsche Middle East & Africa: UAE plus (almost) all of Africa
    { name: 'Middle East & Africa', countries: ["United Arab Emirates", "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Central African Rep.", "Chad", "Congo", "Côte d'Ivoire", "Dem. Rep. Congo", "Djibouti", "Egypt", "Eq. Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "S. Sudan", "Senegal", "Sierra Leone", "Somalia", "Somaliland", "South Africa", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "W. Sahara", "Zambia", "Zimbabwe", "eSwatini"] },
    { name: 'Latin America', countries: ['Brazil', 'Chile', 'Colombia', 'Peru', 'Argentina'] },
    { name: 'Iberia', countries: ['Spain', 'Portugal'] },
  ],
  // Dots = places I worked on site (markets I only worked with remotely are just highlighted)
  hubs: [
    { name: 'Stuttgart', note: 'Porsche AG HQ', lon: 9.18, lat: 48.78 },
    { name: 'Singapore', note: 'Porsche Asia Pacific regional office', lon: 103.82, lat: 1.35 },
    { name: 'Melbourne', note: 'Porsche Cars Australia', lon: 144.96, lat: -37.81 },
    { name: 'Bangkok', note: 'Porsche Thailand', lon: 100.5, lat: 13.76 },
    // remote: market too small to see on the map, shown as a hollow ring (no on-site work)
    { name: 'Dubai', note: 'Porsche Middle East', lon: 55.27, lat: 25.2, remote: true },
  ],
};

export const education = [
  { title: 'MSc Business Analytics', org: 'NOVA School of Business and Economics, Lisbon', period: '2026 – 2027', note: 'Data analytics & machine learning in a business context' },
  { title: 'B.Eng. Industrial Engineering', org: 'DHBW Stuttgart · dual programme with Porsche AG', period: '2018 – 2021', note: 'Grade 1.5', focus: ['Mechanical Engineering', 'International Technical Sales'] },
  { title: 'Abitur (High School Diploma)', org: 'Kreisgymnasium Riedlingen', period: '2017', note: 'Grade 1.0', focus: ['Physics focus', 'Advanced Maths +2 h/week'] },
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
    kind: 'Start-up · 2025',
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
    { src: '/images/psc/psc-kite-team.jpg', alt: 'Porsche Surf Club team in red jackets with kites on the beach' },
    { src: '/images/psc/psc-wave-pool.jpg', alt: 'Surfing in a wave pool, seen from above', pos: '35% center' },
    { src: '/images/psc/psc-sunset.jpg', alt: 'Club members waving in the water at sunset' },
    { src: '/images/psc/psc-letters.jpg', alt: 'Club members forming the letters PSC on the beach, seen from above' },
    { src: '/images/psc/psc-beach-sunset.jpg', alt: 'Two club members on the beach at sunset' },
    { src: '/images/psc/psc-classic.jpg', alt: 'Club members next to a classic Porsche 356' },
    { src: '/images/psc/psc-illustration-2.jpg', alt: 'Illustration of me surfing with a laptop' },
    { src: '/images/psc/psc-night.jpg', alt: 'Club members at Porscheplatz at night' },
    { src: '/images/psc/psc-club.jpg', alt: 'Porsche Surf Club members talking at an event' },
    { src: '/images/psc/psc-boat.jpg', alt: 'Selfie in the boat mirror on the way to the water' },
    { src: '/images/psc/psc-meetup.jpg', alt: 'Porsche Surf Club meetup next to classic Porsche cars' },
    { src: '/images/psc/psc-plaque.jpg', alt: 'Farewell plaque from the Porsche Surf Club: "Vera – there is no substitute"' },
  ],
};

// Newest first, like the CV (order based on photo dates where available)
export const workGallery = [
  { src: '/images/work/farewell.jpg', caption: 'Farewell at Porsche Asia Pacific – in “Bangkok traffic” work mode' },
  { src: '/images/work/workshop-screen.jpg', caption: 'Presenting the sales funnel score in Singapore', pos: '15% center' },
  { src: '/images/work/deep-dive.jpg', caption: 'Presenting a deep-dive analysis at Porsche Thailand' },
  { src: '/images/work/team.jpg', caption: 'Sales funnel management workshop with dealers in Bangkok' },
  { src: '/images/work/sales-funnel.jpg', caption: 'Strategic council with market CEOs and sales leadership from Porsche AG in Weissach' },
  { src: '/images/work/colleagues.jpg', caption: 'With colleagues at the office in Singapore' },
  { src: '/images/work/welcome-apac.jpg', caption: 'At the Porsche Asia Pacific office', pos: 'center 0%' },
  { src: '/images/work/presenting-room.jpg', caption: 'Sales funnel training for dealer sales, marketing and CRM teams in Melbourne', pos: '0% center' },
  { src: '/images/work/market-visit.jpg', caption: 'After the dealer trainings at the Porsche training centre in Melbourne' },
  { src: '/images/work/porsche-centre.jpg', caption: 'Porsche Studio Singapore' },
  { src: '/images/work/sydney-south.jpg', caption: 'Dealer visit at Porsche Centre Sydney South' },
  { src: '/images/work/barcelona-conference.jpg', caption: 'Representing Porsche at the After Sales Conference in Barcelona' },
  { src: '/images/work/installation-shooting.jpg', caption: 'Photo shoot for Porsche Installation Services (Aftersales Communication)' },
];

// `stat` is shown instead of a photo when no image is set.
// `line` is the punchline shown big in the orbit centre, `text` links the hobby to how I work.
export const beyond = [
  {
    title: 'Surfing',
    line: 'Patience, timing and commitment.',
    text: 'Waiting for the right wave, then committing to it.',
    image: '/images/hobbies/surfing-wave.jpg',
  },
  {
    title: 'Beach Volleyball',
    line: 'Read the game.',
    text: 'A technical and tactical team sport. I play regional tournaments.',
    image: '/images/hobbies/beach-volleyball.jpg',
    pos: 'center 75%',
  },
  {
    title: 'Ski Instructor',
    line: 'Free riding and teaching others.',
    text: 'B-Trainer and head of the junior group at Skizunft TSV Ertingen.',
    image: '/images/hobbies/ski.jpg',
  },
  {
    title: 'HYROX',
    line: 'Consistency pays off.',
    text: '4th place at the 2022 HYROX World Championship in Las Vegas.',
    image: '/images/hobbies/hyrox.jpg',
    pos: 'center 45%',
    stat: '4th',
  },
  {
    title: 'Skateboarding',
    line: 'Fall and fight back.',
    text: 'A skateboard accident kept me off sports for almost a year – getting back on track took patience.',
    image: '/images/hobbies/skate.jpg',
  },
  {
    title: 'Dance',
    line: 'Expression.',
    text: 'Commercial and hip-hop – a creative counterpart to working with data.',
    image: '/images/hobbies/dance.jpg',
    pos: 'center 0%',
  },
  {
    title: 'Travel',
    line: 'Curious and open-minded.',
    text: 'From Work & Travel in Australia, New Zealand and Indonesia to working across cultures in nine international markets.',
    image: '/images/hobbies/travel.jpg',
    pos: 'center 56%',
  },
  {
    title: 'Handstanding',
    line: 'Trying to balance [life].',
    text: 'Being upside down sometimes gives you a new perspective.',
    image: '/images/hobbies/handstand.jpg',
  },
];
