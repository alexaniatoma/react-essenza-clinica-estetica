import { NavLink } from "react-router-dom";
import { WhatsappLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react"

export default function Footer(){
    return(
        <>
        <footer className="bg-[#68705A]">
            <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row md:items-start justify-between gap-10">
                <div className=" text-[#FAF9F6] flex flex-col items-center gap-1">
                    <NavLink
                        to="/"
                        className="font-serif italic text-3xl font-medium text-[#FAF9F6] hover:text-[#A5AD98] transition-colors duration-300"
                    >
                        Essenza
                    </NavLink>
                    <NavLink to="/" className="font-sans text-xs font-medium tracking-widest text-[#FAF9F6]">
                        Clínica de Estética
                    </NavLink>
                </div>
                <div className="flex flex-col">
                    <NavLink
                        to="/clinica"
                        className="text-[#FAF9F6] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]"
                    >
                        A Clínica
                    </NavLink>
                    <NavLink
                        to="/tratamentos"
                        className="text-[#FAF9F6] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]"
                    >
                        Tratamentos
                    </NavLink>
                    <NavLink
                        to="/profissionais"
                        className="text-[#FAF9F6] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]"
                    >
                        Profissionais
                    </NavLink>
                    <NavLink
                        to="/contato"
                        className="text-[#FAF9F6] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]"
                    >
                        Contato
                    </NavLink>
                    <NavLink
                        to="/agendamento"
                        className="text-[#FAF9F6] transition-colors duration-300 border-b border-transparent hover:border-[#A5AD98]"
                    >
                        Agende seu horário
                    </NavLink>
                </div>
                <div className="flex flex-col text-[#FAF9F6]">
                    <h3 className="font-serif text-xl mb-4">Fale conosco</h3>
                     <a
                        href="https://wa.me/5513000000-0000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#A5AD98] transition-colors duration-300"
                    >
                        <WhatsappLogoIcon size={30} weight="regular" />                            
                    </a>                    
                    <p className="mt-2">Santos-Sp</p>
                </div>
                <div className="flex flex-col text-[#FAF9F6]">
                    <h3 className="font-serif text-xl mb-4">Redes Sociais</h3>
                    <div className="flex gap-4">
                        <a
                            href="https://wa.me/5513000000-0000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#A5AD98] transition-colors duration-300"
                            >
                            <WhatsappLogoIcon size={30} weight="regular" />                            
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#A5AD98] transition-colors duration-300"
                        >
                            <InstagramLogoIcon size={30} weight="regular"/>                            
                        </a>                       
                    </div>                              
                </div>
            </div> 
            <div className="border-t border-[#A5AD98]/40">
                <div className="max-w-7xl mx-auto px-8 py-6 text-center">
                    <p className="text-sm text-[#FAF9F6]/80">@ 2026 Essenza Clínica de Estética. Todos os direitos reservados.</p>
                </div>
            
            </div>         
        </footer>
        </>
    );
}