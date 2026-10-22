export default function TratamentoCard({nome, descricao}) {
    return(
        <article className="h-full rounded-lg border border-[#D8C2B8]/40 bg-[#FAF9F6] p-6 shadow-xm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="font-serif text-2xl font-medium text-[#68705A]">{ nome }</h3>
            <p className="mt-3 text-[#6B5B50] leading-relaxed">{ descricao }</p>
        </article>
    );
}