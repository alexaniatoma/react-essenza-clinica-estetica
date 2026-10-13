import nossaHistoria from "../../assets/nossaHistoria.jpg";

export default function Clinica() {
  return (
    <main>
      <section className="bg-[#FAF9F6] px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#68705A]">A Essenza</h1>
          <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed max-w-2xl mx-auto">
            Um espaço pensando para cuidar de você com atenção, acolhimento e propósito.
          </p>
        </div>
      </section>
      <secion className="bg-[#E8DED2] px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">Nossa história</h2>
            <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">
              A Essenza nasceu do desejo de oferecer um cuidado que vai além da estética, valorizando a individualidade,
              o bem-estar e a beleza de cada pessoa.
            </p>
            <p className="mt-4 text-[#6B5B50] leading-relaxed">
              Cada detalhe do nosso espaço e de cada atendimento foi pensado para proporcionar uma experiencia
              acolhedora, personalizada e especial.
            </p>
          </div>
          <div>
            <img
              src={nossaHistoria}
              alt="Ambiente acolhedor da clínica Essenza"
              className="w-full h-[450px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </secion>
      <section className="bg-[#FAF9F6] px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">O que nos inspira</h2>
            <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">
              Nosso propósito é oferecer mais do que tratamentos: queremos proporcionar cuidado, confiança e bem-estar
              em cada experiência.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <article className="bg-[#E8DED2] p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-medium text-[#68705A]">Nossa missão</h3>
              <p className="mt-4 text-[#6B5B50] leading-relaxed">
                Promover beleza e bem-estgar por meio de cuidados personalizados, com atenção às necessidades de cada
                pessoa.
              </p>
            </article>
            <article className="bg-[#E8DED2] p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-medium text-[#68705A]">Nossa visão</h3>
              <p className="mt-4 text-[#6B5B50] leading-relaxed">
                Ser reconhecida pela qualidade dos atendimentos, pelo acolhimento e pelo compromisso com cada cliente.
              </p>
            </article>
            <article className="bg-[#E8DED2] p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-medium text-[#68705A]">Nossos valores</h3>
              <p className="mt-4 text-[#6B5B50] leading-relaxed">
                Ética, respeito, segurança, empatia e dedicação em cada detalhe do cuidado.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-[#E8DED2] px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-meidum text-[#68705A]">Cuidado em cada detalhe</h2>
            <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed">
              Acreditamos que uma experiência especial começa no acolhimento e se revela em cada detalhe, desde a
              chegada à clínica até o cuidado pós cada procedimento.
            </p>
            <ul className="mt-8 space-y-4 text-[#6B5B50]">
                <li className="flex gap-3">
                    <span className="text-[#68705A]">✓</span>
                    Atendimento personalizado
                </li>
                <li className="flex gap-3">
                    <span className="text-[#68705A]">✓</span>
                    Atendimento acolhedor e confortável
                </li>
                <li className="flex gap-3">
                    <span className="text-[#68705A]">✓</span>
                    Atenção às necessidades individuais
                </li>
                <li className="flex gap-3">
                    <span className="text-[#68705A]">✓</span>
                    Compromisso com segurança e qualidade
                </li>
            </ul>
          </div>
          <div classsName="bg-[#FAF9F6] rounded-lg p-10 md:p-12">
            <p className="font-serif italic text-3xl md:text-4xl text-[#68705A] leading-snug">"Cuidar de você é respeitar sua essência."</p>
            <p className="mt-6 text-[#6B5B50]">Essenza Clínica de Estética</p>
          </div>
        </div>
      </section>
    </main>
  );
}
