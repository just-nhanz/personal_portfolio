import { useEffect } from 'react'
import Cursor        from '@/components/Cursor'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar        from '@/components/Navbar'
import AiChat        from '@/components/AiChat'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function MainLayout({ children }) {
  useScrollReveal('.sr')
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <AiChat />
    </>
  )
}
