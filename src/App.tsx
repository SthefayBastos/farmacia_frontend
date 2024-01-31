import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formCategoria/FormCategoria"
import ListaCategorias from "./components/categoria/listarcategorias/ListarCategorias"
import Home from "./components/home/Home"


function App() {
  return (
    <>
      
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      
    </>
  )
}

export default App