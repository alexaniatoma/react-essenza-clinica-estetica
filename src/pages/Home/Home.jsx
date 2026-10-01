import { NavLink } from "react-router-dom";
import heroEssenza from "../../assets/heroEssenza.jpg";
import depoimentoAnaM from "../../assets/depoimentoAnaM.jpg";
import depoimentoJulianaR from "../../assets/depoimentoJulianaR.jpg";
import useScrollReveal from "../../hooks/useScrollReveal";
import depilacaoLaserPerna from "../../assets/depilacaoLserPerna.jpg"
import tratamentosFaciais from "../../assets/tratamentosFaciais.jpg"
import tratamentosInjetaveis from "../../assets/tratamentosInjetaveis.jpg"
import tratamentosLaser from "../../assets/tratamentosLaser.jpg"
import tratamentosCorporais from "../../assets/tratamentosCorporais.jpg"


export default function Home() {
  const {
    ref: essenzaRef,
    isVisible: essenzaVisible
  } = useScrollReveal();

  const {
    ref: procedimentoRef,
    isVisible: procedimentoVisible
  } = useScrollReveal();

  return (
    <main>
      <section className=" px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div className="animate-[fadeIn_1s_ease-out]">
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#68705A] leading-tight">
              Cuidado que valoriza a sua essência
            </h1>
            <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">Beleza, bem estar e cuidado em cada detalhe.</p>
            <NavLink className="inline-block mt-8 bg-[#68705A] text-[#FAF9F6] hover:bg-[#5D654F] transition-colors duration-300 py-3 px-6 rounded">
              Agende seu horário
            </NavLink>
          </div>
          <div className="animate-[fadeIn_1.2s_ease-out]">
            <img src={heroEssenza} alt="Paciente recebendo uma massagem na Essenza" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>
      <section
        ref={essenzaRef}
        className={`bg-[#E8DED2] px-8 py-20 transition-all duration-1000 ${essenzaVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
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
      <section
        ref={procedimentoRef}
        className="bg-[#FAF9F6] px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:gird-cols-2 gap-12 items center">
          <div className={`transition-all duration-1000 ${procedimentoVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
            }`}>
            <img
              src={depilacaoLaserPerna}
              alt="Procedimento de depilação a laser na Essenza"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">Cuidado que valoriza cada detalhe</h2>
            <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">Na Essenza, tecnologia e cuidado caminham juntos para proporcionar tratamentos personalizados e uma experiência acolhedora.</p>
            <p className="mt-4 text-[#6B5B50] leading-relaxed">Cada procedimento é realizado com atenção, segurança e respeito às necessidades de cada pessoa.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#FAF9F6] px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">Nossos tratamentos</h2>
          <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">
            Cuidados personalizados para realçar sua beleza e promover seu bem-estar
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group perspective-[1000px] cursor-pointer">
              <div className="relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="bg-[#E8DED2] h-full w-full p-6 rounded-lg flex flex-col justify-center">
                    <h3 className="font-serif text-2xl font-medium text-[#68705A]">Faciais</h3>
                    <p className="mt-3 text-[#6B5B50] leading-relaxed">
                      Cuidados personalizados para uma pele mais saudável e revitalizada.
                    </p>
                  </div>
                </div>
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img 
                      src={tratamentosFaciais}
                      alt="Mulher recebendo tratamento facial"
                      className="w-full h-full object-cover rounded-lg" 
                    />                  
                  </div>               
              </div>             
            </div>
            <div className="group perspective-[1000px] cursor-pointer">
              <div className="relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="bg-[#E8DED2] h-full w-full p-6 rounded-lg flex flex-col justify-center">
                    <h3 className="font-serif text-2xl font-medium text-[#68705A]">Injetáveis</h3>
                    <p className="mt-3 text-[#6B5B50] leading-relaxed">
                      Cuidados personalizados para uma pele mais saudável e revitalizada.
                    </p>
                  </div>
                </div>
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img 
                      src={tratamentosInjetaveis}
                      alt="Mulher recebendo tratamento injetável no rosto"
                      className="w-full h-full object-cover rounded-lg" 
                    />                  
                  </div>               
              </div>             
            </div>
              <div className="group perspective-[1000px] cursor-pointer">
              <div className="relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="bg-[#E8DED2] h-full w-full p-6 rounded-lg flex flex-col justify-center">
                    <h3 className="font-serif text-2xl font-medium text-[#68705A]">Corporais</h3>
                    <p className="mt-3 text-[#6B5B50] leading-relaxed">
                      Técnicas voltadas ao cuidado, contorno e bem-estar do corpo.
                    </p>
                  </div>
                </div>
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img 
                      src={tratamentosCorporais}
                      alt="Mulher recebendo tratamento facial"
                      className="w-full h-full object-cover rounded-lg" 
                    />                  
                  </div>               
              </div>             
            </div>
            <div className="group perspective-[1000px] cursor-pointer">
              <div className="relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="bg-[#E8DED2] h-full w-full p-6 rounded-lg flex flex-col justify-center">
                    <h3 className="font-serif text-2xl font-medium text-[#68705A]">Depilação a Laser</h3>
                    <p className="mt-3 text-[#6B5B50] leading-relaxed">
                      Tecnologia e cuidado para uma experiência mais confortável e segura.
                    </p>
                  </div>
                </div>
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img 
                      src={tratamentosLaser}
                      alt="Mulher recebendo tratamento facial"
                      className="w-full h-full object-cover rounded-lg" 
                    />                  
                  </div>               
              </div>             
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
            <img src={depoimentoAnaM} alt="Cliente da Essenza" className="w-24 h-24 rounded-full object-cover" />
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
            <img src={depoimentoJulianaR} alt="Cliente da Essenza" className="w-24 h-24 rounded-full object-cover" />
            <div>
              <p className="text-[#6B5B50] leading-relaxed">
                "Fui muito bem recebida desde o primeiro contato. O atendimento é cuidadoso, o ambiente é maravilhoso e o resultado superou minhas expectativas."
              </p>
              <p className="mt-6 font-medium text-[#68705A]">Juliana R.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E8DED2] px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">Visite a Essenza</h2>
            <p className="mt-6 text-[#6B5B50] leading-relaxed">
              Estamos em Santos, em um ambiente pensado para proporcionar conforto, acolhimento e bem-estar.
            </p>
            <div className="mt-8 text-[#6B5B50] leading-relaxed">
              <p>Rua Exemplo, 123 - Santos, SP</p>
              <p>(13)00000-0000</p>
            </div>
          </div>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d466427.50519109034!2d-46.61213765260199!3d-24.03230343729383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1790348926726!5m2!1spt-BR!2sbr"
            className="w-full h-80 md:h-[450px] rounded-lg shadow-md mt-8"
            allowFullscreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin">
          </iframe>
        </div>
      </section>
    </main>
  )
}
