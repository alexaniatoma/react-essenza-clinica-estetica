export default function Contato() {
  return (
    <main>
      <section className="bg-[#FAF9F6] px-8 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#68705A]">Estamos aqui para você</p>

          <h1 className="mt-4 font-serif text-4xl font-medium text-[#68705A] md:text-5xl">Entre em contato</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B5B50] md:text-lg">
            Será um prazer receber você na Essenza. Entre em contato para esclarecer suas dúvidas, conhecer nossos
            tratamentos ou encontrar o melhor momento para cuidar de si.
          </p>
        </div>
      </section>
      <section className="bg-[#FAF9F6] px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#68705A]">Fale conosco</p>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#6B5B50]">
              Preencha o formulário abaixo. Será um prazer conversar com você
            </p>
          </div>
          <form className="rounded-lg border border-[#D8C2B8]/50 bg-white p-6 shadow-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="nome" className="mb-2 block text-sm font-medium text-[#6B5B50]">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  required
                  className="w-full rounded-md border border-[#D8C2B8] bg-[#FAF9F6] px-4 py-3 text-[#292825] outline-nome focus:border-[#68705A] focus:ring-1 focus:ring-[#68705A]"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#6B5B50]">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-[#D8C2B8] bg-[#FAF9F6] px-4 py-3 text-[#292825] outline-nome focus:border-[#68705A] focus:ring-1 focus:ring-[#68705A]"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
            </div>
            <div className="my-8 border-t border-[#D8C2B8]/50">
              <h3 className="mb-6 font-serif text-2xl font-medium text-[#68705A]">Endereço</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="cep" className="mb-2 block text-sm font-medium text-[#6B5B50]">
                    CEP
                  </label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    inputMode="numeric"
                    maxLength={9}
                    autoComplete="postal-code"
                    required
                    className="w-full rounded-md border border-[#D8C2B8] bg-[#FAF9F6] px-4 py-3 text-[#292825] outline-nome focus:border-[#68705A] focus:ring-1 focus:ring-[#68705A]"
                    placeholder="00000-000"
                  />
                </div>
                <div>
                  <label htmlFor="rua" className="mb-2 block text-sm font-medium text-[#6B5B50]">
                    Rua
                  </label>
                  <input
                    type="text"
                    id="rua"
                    name="rua"                    
                    autoComplete="address-line1"
                    required
                    className="w-full rounded-md border border-[#D8C2B8] bg-[#FAF9F6] px-4 py-3 text-[#292825] outline-nome focus:border-[#68705A] focus:ring-1 focus:ring-[#68705A]"
                    placeholder="Nome da rua ou avenida"
                  />
                </div>
                <div>
                  <label htmlFor="numero" className="mb-2 block text-sm font-medium text-[#6B5B50]">
                    Número
                  </label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"                    
                    autoComplete="address-line2"
                    required
                    className="w-full rounded-md border border-[#D8C2B8] bg-[#FAF9F6] px-4 py-3 text-[#292825] outline-nome focus:border-[#68705A] focus:ring-1 focus:ring-[#68705A]"
                    placeholder="Nº"
                  />
                </div>
                
                <div>
                  <label htmlFor="bairro" className="mb-2 block text-sm font-medium text-[#6B5B50]">
                    Bairro
                  </label>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"                    
                    autoComplete="address-level3"
                    required
                    className="w-full rounded-md border border-[#D8C2B8] bg-[#FAF9F6] px-4 py-3 text-[#292825] outline-nome focus:border-[#68705A] focus:ring-1 focus:ring-[#68705A]"
                    placeholder="Seu bairro"
                  />
                </div>
                <div>
                  <label htmlFor="cidade" className="mb-2 block text-sm font-medium text-[#6B5B50]">
                    Cidade
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"                    
                    autoComplete="address-level2"
                    required
                    className="w-full rounded-md border border-[#D8C2B8] bg-[#FAF9F6] px-4 py-3 text-[#292825] outline-nome focus:border-[#68705A] focus:ring-1 focus:ring-[#68705A]"
                    placeholder="Sua cidade"
                  />
                </div>
                <div>
                  <label htmlFor="estado" className="mb-2 block text-sm font-medium text-[#6B5B50]">
                    Estado
                  </label>
                  <input
                    type="text"
                    id="estado"
                    name="estado"                    
                    autoComplete="address-level1"
                    required
                    className="w-full rounded-md border border-[#D8C2B8] bg-[#FAF9F6] px-4 py-3 text-[#292825] outline-nome focus:border-[#68705A] focus:ring-1 focus:ring-[#68705A]"
                    placeholder="Ex.:SP"
                  />
                </div>
                <div className="md:col-span-2">                 
                  <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-[#6B5B50]">
                    Mensagem
                  </label>
                  <textarea                    
                    id="mensagem"
                    name="mensagem"             
                    required
                    className="w-full resize-y rounded-md border border-[#D8C2B8] bg-[#FAF9F6] px-4 py-3 text-[#292825] outline-none focus:border-[#68705A] focus:ring-1 focus:ring-[#68705A]"
                    placeholder="Escreva sua mensagem"
                  />                
                </div>
              </div>
              <div className="mt-8 text-center">
                <button type="submit" className="rounded-full bg-[#68705A] px-10 py-4 font-medium text-[#FAF9F6] transition-colors duration-300 hover:bg-[#526047] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68705A]">Enviar Mensagem</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-[#E8DED2] px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-lg bg-[#FAF9F6] p-8 text-center shadow-sm">
              <h2 className="font-serif text-2xl font-medium text-[#68705A]">Endereço</h2>
              <p className="mt-4 leading-relaxed text-[#6B5B50]">Santos, São Paulo</p>
            </article>
            <article className="rounded-lg bg-[#FAF9F6] p-8 text-center shadow-sm">
              <h2 className="font-serif text-2xl font-medium text-[#68705A]">Telefone e WhatsApp</h2>
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
              <h2 className="font-serif text-2xl font-medium text-[#68705A]">Horário de atendimento</h2>
              <p className="mt-4 leading-relaxed text-[#6B5B50]">Segunda a sexta</p>
              <p className="mt-4 leading-relaxed text-[#6B5B50]">Das 9h às 18h</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
