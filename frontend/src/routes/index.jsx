import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home       from '@/pages/Home'

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route path="*" element={<div style={{padding:'4rem',textAlign:'center',color:'#7878A0',fontFamily:'Space Mono'}}>404 — not found</div>} />
    </Routes>
  )
}
