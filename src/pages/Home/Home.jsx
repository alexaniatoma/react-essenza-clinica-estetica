import { NavLink } from "react-router-dom";
import heroEssenza from "../../assets/hero-essenza.jpg";

export default function Home() {
  return (
    <main>
      <section className=" px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#68705A] leading-tight">
              Cuidado que valoriza a sua essência
            </h1>
            <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">Beleza, bem estar e cuidado em cada detalhe.</p>
            <NavLink className="inline-block mt-8 bg-[#68705A] text-[#FAF9F6] hover:bg-[#5D654F] transition-colors duration-300 py-3 px-6 rounded">
              Agende seu horário
            </NavLink>
          </div>
          <div>
            <img src={heroEssenza} alt="Paciente recebendo uma massagem na Essenza" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>
      <section className="bg-[#E8DED2] px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">A Essenza</h2>
          <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">Cuidado, beleza e bem-estar pensados para você.</p>
          <p className="mt-4 text-[#6B5B50] leading-relaxed">
            Na Essenza, acreditamos que cada pessoa merece um cuidado personalizado, acolhedor e atento a cada detalhe.
          </p>
          <NavLink
          to="/clinica"
            className="inline-block mt-8 bg-[#68705A] text-[#FAF9F6] hover:bg-[#5D654F] transition-colors duration-300 py-3 px-6 rounded">
                Conheça a clínica
            </NavLink>
        </div>
      </section>
    </main>
  );
}
