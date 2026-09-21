import { Request, Response, NextFunction } from 'express'
import { projectService } from '../services/projectService'

export const projectController = {
  getAll: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const projects = await projectService.findAll()
      res.json(projects)
    } catch (err) {
      next(err)
    }
  },

  getOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const project = await projectService.findById(Number(req.params.id))
      if (!project) {
        res.status(404).json({ success: false, message: 'Project not found' })
        return
      }
      res.json(project)
    } catch (err) {
      next(err)
    }
  },
}
