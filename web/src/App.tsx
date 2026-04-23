import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProyectosPage from './pages/ProyectosPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
      </Routes>
    </BrowserRouter>
  )
}
