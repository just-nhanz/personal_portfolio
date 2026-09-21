import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.project.deleteMany()

  await prisma.project.createMany({
    data: [
      {
        title:       'Game Sales Predictor',
        description: 'An end-to-end ML pipeline that predicts global video game sales across platforms and genres. Built multiple regression and ensemble models, then deployed as an interactive Streamlit app where users can input game details and get real-time predictions.',
        type:        'featured · machine learning',
        icon:        '🎮',
        visualCls:   'pv-ml',
        stack:       [
          { label: 'Python',       cls: '' },
          { label: 'Scikit-learn', cls: '' },
          { label: 'Pandas',       cls: '' },
          { label: 'Streamlit',    cls: 'st-mint' },
          { label: 'Data Science', cls: 'st-mint' },
        ],
        github:   'https://github.com/just-nhanz',
        demo:     '#',
        featured: true,
        order:    1,
      },
      {
        title:       'Advertising Techniques Infographic',
        description: 'A visual analysis of persuasion techniques found in "Confessions of a Shopaholic" — exploring emotional appeals, bandwagon effect, and scarcity tactics as an English language learning project.',
        type:        'infographic · english language',
        icon:        '📊',
        visualCls:   'pv-info',
        stack:       [
          { label: 'Design',          cls: 'st-coral' },
          { label: 'English',         cls: 'st-coral' },
          { label: 'Visual Analysis', cls: '' },
        ],
        github:   null,
        demo:     '#',
        featured: false,
        order:    2,
      },
      {
        title:       'AI Portfolio Assistant',
        description: 'A RAG-powered AI chatbot embedded into this portfolio. Uses vector embeddings and retrieval pipelines to answer questions about my projects and background in natural language.',
        type:        'full-stack · ai',
        icon:        '🤖',
        visualCls:   'pv-ai',
        stack:       [
          { label: 'React',    cls: '' },
          { label: 'FastAPI',  cls: '' },
          { label: 'RAG',      cls: 'st-mint' },
          { label: 'ChromaDB', cls: 'st-mint' },
        ],
        github:   'https://github.com/just-nhanz',
        demo:     '#',
        featured: false,
        order:    3,
      },
    ],
  })

  console.log('✓ Seed complete — 3 projects inserted')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
