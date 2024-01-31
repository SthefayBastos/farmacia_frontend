

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'

import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'




function App() {
  return (
    <>
    
    <BrowserRouter>
          <Navbar />
          
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              </Routes>
          </div>

          <Footer />
        </BrowserRouter>
    </>
  )
}
   
export default App
