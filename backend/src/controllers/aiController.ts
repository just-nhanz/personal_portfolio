import { Request, Response, NextFunction } from 'express'
import { aiService } from '../services/aiService'

export const aiController = {
  chat: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { messages } = req.body
      if (!Array.isArray(messages) || messages.length === 0) {
        res.status(400).json({ success: false, message: 'messages array required' })
        return
      }
      const result = await aiService.chat(messages)
      res.json(result)
    } catch (err) {
      next(err)
    }
  },
}
