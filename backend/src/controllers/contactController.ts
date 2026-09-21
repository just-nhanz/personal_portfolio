import { Request, Response, NextFunction } from 'express'
import { contactService }  from '../services/contactService'
import { contactSchema }   from '../validators/contactValidator'

export const contactController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = contactSchema.parse(req.body)
      const msg  = await contactService.create(data)
      res.status(201).json({ success: true, id: msg.id })
    } catch (err: any) {
      if (err.name === 'ZodError') {
        res.status(400).json({ success: false, errors: err.errors })
        return
      }
      next(err)
    }
  },
}
