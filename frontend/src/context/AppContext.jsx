import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [aiEnabled] = useState(import.meta.env.VITE_AI_ENABLED === 'true')
  return (
    <AppContext.Provider value={{ aiEnabled }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
