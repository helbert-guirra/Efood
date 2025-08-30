import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/restaurant/:id" element={<Restaurant></Restaurant>} />
  </Routes>
)

export default Rotas
