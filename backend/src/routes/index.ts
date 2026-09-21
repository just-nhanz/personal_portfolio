import { Router } from 'express'
import projectRoutes from './projects'
import contactRoutes from './contact'
import aiRoutes      from './ai'

const router = Router()
router.get('/health', (_req, res) => res.json({ status: 'ok', time: new Date().toISOString() }))
router.use('/projects', projectRoutes)
router.use('/contact',  contactRoutes)
router.use('/ai',       aiRoutes)
export default router
