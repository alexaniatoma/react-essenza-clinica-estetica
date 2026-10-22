import tratamentos from "../../data/tratamentos";
import TratamentoCard from "../../components/TratamentoCard";


export default function Tratamentos() {
  return (
    <main>
      <section className="bg-[#FAF9F6] px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#68705A]">Nossos tratamentos</h1>
          <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed max-w-2xl mx-auto">
            Descubra cuidados personalizados para realçar sua beleza e promover seu bem-estar
          </p>
        </div>
      </section>
      <section className="bg-[#FAF9F6] px-8 py-12">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Navegação por categorias de tratamentos"
            className="flex flex-wrap justify-center gap-4">
              {tratamentos.map((categoria) => (
                <a
                  key={categoria.id}
                  href={`#${categoria.id}`}
                  className="rounded-full border border-[#68705A/40] px-6 py-3 text-[#68705A] transition duration-300 hover:bg-[#68705A] hover:text-[#FAF9F6]">
                    {categoria.categoria}
                </a>
              ))}
          </nav>

        </div>
      </section>
      {tratamentos.map((categoria, index) => (
      <section
        key={categoria.id}
        id={categoria.id}
        className={`px-8 py-20 ${
        index % 2 === 0 ? "bg-[#E8DED2]" : "bg-[#FAF9F6]"
        }`}        
      >          
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#68705A]">{categoria.categoria}</h2>
            <p className="mt-6 text-lg text-[#6B5B50] leading-relaxed max-w-2xl mx-auto">
              Cuidados personalizados para valorizar sua pele e realçar sua beleza natural.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.procedimentos.map((procedimento) => (
              <TratamentoCard
                key={procedimento.id}
                nome={procedimento.nome}
                descricao={procedimento.descricao}
              />
            ))}
             
          </div>
        </div>
      </section>
      ))}
      <section className="bg-[#E8DED2] px-8 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-medium text-[#6B5B50] md:text-4xl">Seu momento de cuidado começa aqui</h2>
          <p className="mt-8 inline-block rounded-full bg-[#FAF9F6] px-8 py-3 font-medium text-[#68705A] transition duration-300 hover:bg-[#E8DED2]">Cada pessoa é única. Agende uma avaliação e descubra quais tratamentos fazem sentido para você</p>
          <a
            href="https://wa.me/5513000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#FAF9F6] px-8 py-3 font-medium text-[#68705A] transition duration-300 hover:bg-[#E8DED2]"
          >
            Agende sua avaliação
          </a>
        </div>
      </section>
    </main>
  );
}
