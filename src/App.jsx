import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Clinica from "./pages/Clinica/Clinica";
import Tratamentos from "./pages/Tratamentos/Tratamentos";
import Profissionais from "./pages/Profissionais/Profissionais";

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
        <Routes>       
          <Route path="/" element={<Home />} />
          <Route path="/clinica" element={<Clinica />} />
          <Route path="/tratamentos" element={<Tratamentos />} />
          <Route path="/profissionais" element={<Profissionais />} />
          
        </Routes>
      <Footer />
    </BrowserRouter>    
    
  )
}

