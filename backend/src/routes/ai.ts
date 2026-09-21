import { Router } from 'express'
import { aiController } from '../controllers/aiController'
import { apiLimiter }   from '../middleware/rateLimiter'

const router = Router()
router.post('/chat', apiLimiter, aiController.chat)
export default router
