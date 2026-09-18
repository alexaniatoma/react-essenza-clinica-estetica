import { NavLink } from "react-router-dom";
import heroEssenza from "../../assets/hero-essenza.jpg";
import depoimentoAnaM from "../../assets/depoimentoAnaM.jpg";
import depoimentoJulianaR from "../../assets/depoimentoJulianaR.jpg";


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
            className="inline-block mt-8 bg-[#68705A] text-[#FAF9F6] hover:bg-[#5D654F] transition-colors duration-300 py-3 px-6 rounded"
          >
            Conheça a clínica
          </NavLink>
        </div>
      </section>
      <section className="bg-[#FAF9F6] px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">Nossos tratamentos</h2>
          <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">
            Cuidados personalizados para realçar sua beleza e promover seu bem-estar
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#E8DED2] p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-medium text-[#68705A]">Faciais</h3>
              <p className="mt-3 text-[#6B5B50] leading-relaxed">
                Cuidados personalizados para uma pele mais saudável e revitalizada.
              </p>
            </div>
            <div className="bg-[#E8DED2] p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-medium text-[#68705A]">Injetáveis</h3>
              <p className="mt-3 text-[#6B5B50] leading-relaxed">
                Procedimentos que valorizam a harmonia e a naturalidade da sua beleza.
              </p>
            </div>
            <div className="bg-[#E8DED2] p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-medium text-[#68705A]">Corporais</h3>
              <p className="mt-3 text-[#6B5B50] leading-relaxed">
                Técnicas voltadas ao cuidado, contorno e bem-estar do corpo.
              </p>
            </div>
            <div className="bg-[#E8DED2] p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-medium text-[#68705A]">Depilação a Laser</h3>
              <p className="mt-3 text-[#6B5B50] leading-relaxed">
                Tecnologia e cuidado para uma experiência mais confortável e segura.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <NavLink
            to="/tratamentos"
            className="inline-block mt-10 bg-[#68705A] text-[#FAF9F6] hover:bg-[#5D654F] transition-colors duration-300 py-3 px-6 rounded"
          >
            Ver todos os tratamentos
          </NavLink>
        </div>
      </section>
      <section className="bg-[#E8DED2] px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">Nossa Equipe</h2>
          <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">
            Profissionais preparados para cuidar de você com atenção e conhecimento.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medim text-[#68705A]">Mariana Alves</h3>
                <p className="mt-2 text-[#6B5B50]">Fundadora e especialista em estética</p>
              </div>
            </div>
            <div className="bg-[#FAF9F6] rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medim text-[#68705A]">Camila Ferreira</h3>
                <p className="mt-2 text-[#6B5B50]">Especialista em tratamentos faciais</p>
              </div>
            </div>
            <div className="bg-[#FAF9F6] rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medim text-[#68705A]">Juliana Martins</h3>
                <p className="mt-2 text-[#6B5B50]">Especialista em tratamentos corporais</p>
              </div>
            </div>
            <div className="bg-[#FAF9F6] rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medim text-[#68705A]">Renata Oliveira</h3>
                <p className="mt-2 text-[#6B5B50]">Especialista em depilação a laser</p>
              </div>
            </div>
            <div className="bg-[#FAF9F6] rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medim text-[#68705A]">Beatriz Souza</h3>
                <p className="mt-2 text-[#6B5B50]">Especialista em estética e bem-estar</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <NavLink
              to="/profissionais"
              className="inline-block mt-10 bg-[#68705A] text-[#FAF9F6] hover:bg-[#5D654F] transition-colors duration-300 py-3 px-6 rounded"
            >
              Conheça nossa equipe
            </NavLink>
          </div>
        </div>
      </section>
      <section className="bg-[#FAF9F6] px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">O que nossas clientes dizem</h2>
          <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">Experiências de quem já viveu o cuidado Essenza</p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto bg-[#E8DED2] p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={depoimentoAnaM} alt="Cliente da Essenza" className="w-24 h-24 rounded-full object-cover"/>
            <div>
              <p className="text-[#6B5B50] leading-relaxed">
                "Um espaço acolhedor, atendimento impecável e profissionais que realmente cuidam de cada detalhe. Me
                senti muito bem desde o primeiro atendimento."
              </p>
              <p className="mt-6 font-medium text-[#68705A]">Ana M.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 max-w-4xl mx-auto bg-[#E8DED2] p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={depoimentoJulianaR} alt="Cliente da Essenza" className="w-24 h-24 rounded-full object-cover"/>
            <div>
              <p className="text-[#6B5B50] leading-relaxed">
                "Fui muito bem recebida desde o primeiro contato. O atendimento é cuidadoso, o ambiente é maravilhoso e o resultado superou minhas expectativas."
              </p>
              <p className="mt-6 font-medium text-[#68705A]">Juliana R.</p>
            </div>
          </div>
        </div>        
      </section>
    </main>
  );
}
