import profissionais from "../../data/profissionais";
import ProfissionalCard from "../../components/ProfissionalCard";

export default function Profissionais() {
  return (
    <main>
      <section className="bg-[#FAF9F6] px-8 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-4x-l font-medium text-[#68705A] md:text-5xl">Nossos Profissionais</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B5B50] md:text-lg">
            Conheça as pessoas que dedicam seu conhecimento e cuidado para valorizar sua beleza e bem-estar.
          </p>
        </div>
      </section>
      <section className="bg-[#E8DED2] px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {profissionais.map((profissional) => (
              <ProfissionalCard
                key={profissional.id}
                nome={profissional.nome}
                especialidade={profissional.especialidade}
                descricao={profissional.descricao}
                imagem={profissional.imagem}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FAF9F6] px-8 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium text-[#68705A] md:text-4xl">
            Encontre o cuidado ideal para você
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B5B50] md:text-lg">
            Nossa equipe está pronta para acolher você e ajudar a encontrar os tratamentos mais adequados às suas
            necessidades.
          </p>
          <a
            href="https://wa.me/5513000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#68705A] px-8 py-4 font-medium text-[#FAF9F6] transition-colors duration-300 hover:bg-[#526047] focus-visible:outline-2 focus-visible:outline-[#68705A]"
          >
            Agende sua avaliação
          </a>
        </div>
      </section>
    </main>
  );
}
