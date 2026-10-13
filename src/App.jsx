import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Clinica from "./pages/Clinica/Clinica";

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
        <Routes>       
          <Route path="/" element={<Home />} />
          <Route path="/clinica" element={<Clinica />} />
          
        </Routes>
      <Footer />
    </BrowserRouter>    
    
  )
}

