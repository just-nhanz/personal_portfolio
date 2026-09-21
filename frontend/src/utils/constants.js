export const PROFILE = {
  name: 'Nguyen Nhan',
  role: 'Developer',
  tagline: 'available for opportunities',
  bio: [
    "I'm a student fascinated by how <strong>machine learning</strong> can transform raw data into meaningful predictions. From building end-to-end ML pipelines to crafting interactive web apps, I love the full journey from data to deployed product.",
    "Currently studying computer science, I work with <strong>Python, React, and modern AI tools</strong> to bring ideas to life. My projects span gaming analytics, language learning, and AI-powered portfolio experiences.",
    "I believe the best code is code that solves real problems — and I'm always chasing that next <strong>meaningful project</strong>.",
  ],
  github:   'https://github.com/just-nhanz',
  linkedin: 'https://linkedin.com/in/just-nhanz',
  email:    'nguyennhan@email.com',
  stats: [
    { num: 5,  suffix: '+', label: 'Projects built' },
    { num: 3,  suffix: '',  label: 'Languages' },
    { num: 2,  suffix: '+', label: 'Years coding' },
  ],
}

export const SKILLS = [
  {
    id: 'sg1',
    category: 'machine learning & ai',
    tags: ['Python','Scikit-learn','TensorFlow','Pandas','NumPy','Matplotlib','Seaborn','Streamlit'],
  },
  {
    id: 'sg2',
    category: 'frontend',
    tags: ['React','JavaScript','TypeScript','HTML / CSS','Tailwind','Vite','Figma'],
  },
  {
    id: 'sg3',
    category: 'backend & infra',
    tags: ['Node.js','FastAPI','PostgreSQL','Prisma','Docker','REST API','RAG','Nginx'],
  },
]

export const SKILL_BARS = [
  { icon:'🤖', label:'Machine Learning', value:'Scikit-learn · TensorFlow · Pandas', pct:82 },
  { icon:'🌐', label:'Web Development',  value:'React · Node.js · FastAPI',          pct:72 },
  { icon:'🗄️', label:'Data Engineering', value:'PostgreSQL · Prisma · Docker',       pct:65 },
  { icon:'🗣️', label:'English',          value:'Technical writing · Presentations',  pct:70 },
]

export const PROJECTS = [
  {
    id: 1,
    featured: true,
    icon: '🎮',
    type: 'featured · machine learning',
    title: 'Game Sales Predictor',
    desc: 'An end-to-end ML pipeline that predicts global video game sales across platforms and genres. Built multiple regression and ensemble models, then deployed as an interactive Streamlit app where users can input game details and get real-time predictions.',
    stack: [
      { label:'Python',      cls:'' },
      { label:'Scikit-learn',cls:'' },
      { label:'Pandas',      cls:'' },
      { label:'Streamlit',   cls:'st-mint' },
      { label:'Data Science',cls:'st-mint' },
    ],
    github: 'https://github.com/just-nhanz',
    demo: '#',
    visualCls: 'pv-ml',
  },
  {
    id: 2,
    featured: false,
    icon: '📊',
    type: 'infographic · english language',
    title: 'Advertising Techniques Infographic',
    desc: "A visual analysis of persuasion techniques in \"Confessions of a Shopaholic\" — exploring emotional appeals, bandwagon effect, and scarcity tactics as an English language learning project.",
    stack: [
      { label:'Design',          cls:'st-coral' },
      { label:'English',         cls:'st-coral' },
      { label:'Visual Analysis', cls:'' },
    ],
    github: null,
    demo: '#',
    visualCls: 'pv-info',
  },
  {
    id: 3,
    featured: false,
    icon: '🤖',
    type: 'full-stack · ai',
    title: 'AI Portfolio Assistant',
    desc: 'A RAG-powered AI chatbot embedded into this portfolio. Uses vector embeddings and retrieval pipelines to answer questions about my projects and background in natural language.',
    stack: [
      { label:'React',     cls:'' },
      { label:'FastAPI',   cls:'' },
      { label:'RAG',       cls:'st-mint' },
      { label:'ChromaDB',  cls:'st-mint' },
    ],
    github: 'https://github.com/just-nhanz',
    demo: '#',
    visualCls: 'pv-ai',
  },
]

export const CONTACTS = [
  { icon:'✉️', label:'email',    value:'nguyennhan@email.com',        href:'mailto:nguyennhan@email.com' },
  { icon:'💼', label:'linkedin', value:'linkedin.com/in/just-nhanz',  href:'https://linkedin.com/in/just-nhanz' },
  { icon:'🐙', label:'github',   value:'github.com/just-nhanz',       href:'https://github.com/just-nhanz' },
]
