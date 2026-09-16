import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="bg-[#FAF9F6] text-[#6B5B50] flex justify-between items-center px-8 relative">
        <div className="flex flex-col items-center text-[#68705A] gap-1">
          <NavLink
            to="/"
            className="font-serif italic text-3xl font-medium text-[#68705A] hover:text-[#A5AD98] transition-colors duration-300"
          >
            Essenza
          </NavLink>
          <NavLink to="/" className="font-sans text-xs font-medium tracking-widest text-[#6B5B50]">
            Clínica de Estética
          </NavLink>
        </div>
        <div className="gap-24 hidden md:flex items-center">
          <NavLink
            to="/clinica"
            className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]"
          >
            A Clínica
          </NavLink>
          <NavLink
            to="/tratamentos"
            className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]"
          >
            Tratamentos
          </NavLink>
          <NavLink
            to="/profissionais"
            className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]"
          >
            Profissionais
          </NavLink>
          <NavLink
            to="/contato"
            className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]"
          >
            Contato
          </NavLink>
          <NavLink
            to="/agendamento"
            className="bg-[#68705A] text-[#FAF9F6] hover:bg-[#5D654F] transition-colors duration-300 py-2 px-4 rounded"
          >
            Agende seu horário
          </NavLink>
        </div>
        <button
          type="button"
          className="md:hidden text-[#68705A] text-2xl p-2 hover:text-[#A5AD98] transition-colors duration-300"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {" "}
          {menuAberto ? "✕" : "☰"}
        </button>
        {menuAberto && (
          <nav className="absolute right-0 top-full w-full bg-[#FAF9F6] text-[#6B5B50] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/clinica"
                className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98] block py-2"
                onClick={() => setMenuAberto(false)}
              >
                A Clínica
              </NavLink>
              <NavLink
                to="/tratamentos"
                className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98] block py-2"
                onClick={() => setMenuAberto(false)}
              >
                Tratamentos
              </NavLink>
              <NavLink
                to="/profissionais"
                className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98] block py-2"
                onClick={() => setMenuAberto(false)}
              >
                Profissionais
              </NavLink>
              <NavLink
                to="/contato"
                className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98] block py-2"
                onClick={() => setMenuAberto(false)}
              >
                Contato
              </NavLink>
              <NavLink
                to="/agendamento"
                className="bg-[#68705A] text-[#FAF9F6] hover:bg-[#5D654F] transition-colors duration-300 py-2 px-4 mt-2 rounded self-start"
                onClick={() => setMenuAberto(false)}
              >
                Agende seu horário
              </NavLink>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
