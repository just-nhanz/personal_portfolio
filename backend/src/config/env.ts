import dotenv from 'dotenv'
dotenv.config()

export const env = {
  PORT:           parseInt(process.env.PORT || '4000'),
  NODE_ENV:       process.env.NODE_ENV || 'development',
  DATABASE_URL:   process.env.DATABASE_URL || '',
  CORS_ORIGIN:    process.env.CORS_ORIGIN || 'http://localhost:5173',
  AI_SERVICE_URL: process.env.AI_SERVICE_URL || 'http://localhost:8000',
  SMTP: {
    HOST: process.env.SMTP_HOST || '',
    PORT: parseInt(process.env.SMTP_PORT || '587'),
    USER: process.env.SMTP_USER || '',
    PASS: process.env.SMTP_PASS || '',
    TO:   process.env.SMTP_TO   || '',
  },
}
