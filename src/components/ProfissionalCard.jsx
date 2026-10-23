export default function ProfissionalCard({ nome, especialidade, descricao, imagem }) {
    return(
        <article className="overflow-hidden rounded-lg bg-[#FAF9F6] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <img
            src={imagem}
            alt={`Foto de ${nome}`}
            className="h-80 w-full object-cover"
            />
            <div className="p-6">
                <h2 className="font-serif text-2xl font-medium text-[#68705A]">{nome}</h2>
                <p>{especialidade}</p>
                <p className="mt-4 leading-relaxed text-[#6B5B50]">{descricao}</p>
            </div>            
        </article>
    );
}