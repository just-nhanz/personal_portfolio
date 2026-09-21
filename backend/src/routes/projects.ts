import { Router } from 'express'
import { projectController } from '../controllers/projectController'

const router = Router()
router.get('/',    projectController.getAll)
router.get('/:id', projectController.getOne)
export default router
