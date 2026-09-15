import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="bg-[#FAF9F6] text-[#6B5B50] flex justify-between items-center px-8">
                <div className="flex flex-col items-center text-[#68705A] ">
                    <NavLink to="/" className="font-serif italic text-3xl font-medium text-[#68705A] hover:text-[#A5AD98] transition-colors duration-300">Essenza</NavLink>
                    <NavLink to="/" className="font-sans text-xs font-medium tracking-widest text-[#6B5B50]">Clínica de Estética</NavLink>
                </div>
                <div className="gap-24 hidden md:flex">
                    <NavLink to="/clinica" className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]">A Clínica</NavLink>
                    <NavLink to="/tratamentos" className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]" >Tratamentos</NavLink>
                    <NavLink to="/profissionais" className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]">Profissionais</NavLink>
                    <NavLink to="/contato" className="hover:text-[#68705A] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]">Contato</NavLink>
                </div>                               
                <NavLink to="/agendamento" className="bg-[#68705A] text-[#FAF9F6] hover:bg-[#5D654F] transition-colors duration-300 py-2 px-4 rounded">
                    Agende seu horário
                </NavLink>
            </nav>
        </>
    );
}