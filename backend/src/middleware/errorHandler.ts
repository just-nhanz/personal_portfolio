import { Request, Response, NextFunction } from 'express'

export interface AppError extends Error {
  status?: number
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status  = err.status  || 500
  const message = err.message || 'Internal server error'
  console.error(`[ERROR] ${status} — ${message}`)
  res.status(status).json({ success: false, message })
}

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({ success: false, message: `Route ${req.path} not found` })
}
