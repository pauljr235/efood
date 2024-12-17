import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalCss } from '../src/styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Footer from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />

      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
