import axios from 'axios'
import { env } from '../config/env'

export const aiService = {
  chat: async (messages: Array<{ role: string; content: string }>) => {
    const res = await axios.post(
      `${env.AI_SERVICE_URL}/chat`,
      { messages },
      { timeout: 30_000 }
    )
    return res.data
  },
}
