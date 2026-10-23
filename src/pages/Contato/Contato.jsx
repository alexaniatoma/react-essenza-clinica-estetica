export default function Contato() {
  return (
    <main>
      <section className="bg-[#FAF9F6] px-8 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#68705A]">Estamos aqui para você</p>

          <h1 className="mt-4 font-serf text-4xl font-medium text-[#68705A] md:text-5xl">Entre em contato</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B5B50] md:text-lg">
            Será um prazer receber você na Essenza. Entre em contato para esclarecer suas dúvidas, conhecer nossos
            tratamentos ou encontrar o melhor momento para cuidar de si.
          </p>
        </div>
      </section>
      <section className="bg-[#E8DED2] px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-lg bg-[#FAF9F6] p-8 text-center shadow-sm">
              <h2 className="font-serif text 2xl font-medium text-[#68705A]">Endereço</h2>
              <p className="mt-4 leading-relaxed text-[#6B5B50]">Santos, São Paulo</p>
            </article>
            <article className="rounded-lg bg-[#FAF9F6] p-8 text-center shadow-sm">
              <h2 className="font-serif text 2xl font-medium text-[#68705A]">Telefone e WhatsApp</h2>
              <p className="mt-4 leading-relaxed text-[#6B5B50]">(13)00000-0000</p>
              <a
                href="https://wa.me/5513000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-medium text-[#68705A] underline underline-offset-4 transition-colors hover:text-[#526047]"
              >
                Fale conosco
              </a>
            </article>
            <article className="rounded-lg bg-[#FAF9F6] p-8 text-center shadow-sm">
              <h2 className="font-serif text 2xl font-medium text-[#68705A]">Horário de atendimento</h2>
              <p className="mt-4 leading-relaxed text-[#6B5B50]">Segunda a sexta</p>
              <p className="mt-4 leading-relaxed text-[#6B5B50]">Das 9h às 18h</p>
            </article>
          </div>
        </div>
      </section>

    </main>
  );
}
