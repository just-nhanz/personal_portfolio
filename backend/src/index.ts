import express        from 'express'
import helmet         from 'helmet'
import morgan         from 'morgan'
import { env }        from './config/env'
import { corsMiddleware } from './middleware/corsMiddleware'
import { errorHandler, notFound } from './middleware/errorHandler'
import routes         from './routes'

const app = express()

// Core middleware
app.use(helmet())
app.use(corsMiddleware)
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))
if (env.NODE_ENV !== 'test') app.use(morgan('dev'))

// Routes
app.use('/api', routes)

// 404 + error handler
app.use(notFound)
app.use(errorHandler)

app.listen(env.PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${env.PORT}`)
  console.log(`   ENV: ${env.NODE_ENV}`)
})

export default app
