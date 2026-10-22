const tratamentos = [
    {
        id: "faciais",
        categoria: "Tratamentos faciais",
        procedimentos: [
            {
                id:"limpeza-de-pele",
                nome: "Limpeza de Pele",
                descricao: "Um cuidado voltado a higienização da pele, conforme a avaliação profissional."
            },
            {
                id:"peeling",
                nome: "Peeling",
                descricao: "Um tratamento que envolve a remoção das camadas superiores da pele para promover a renovação celular."
            },
            {
                id:"microagulhamento",
                nome: "Microagulhamento",
                descricao: "Técnica que utiliza pequenas agulhas para estimular a produção de colágeno e melhorar a textura da pele."
            }
        ]

    },
    {
        id: "injetaveis",
        categoria: "Tratamentos injetáveis",
        procedimentos: [
            {
                id:"botox",
                nome: "Botox",
                descricao: "Tratamento injetável utilizado para reduzir a aparência de rugas e linhas de expressão."
            },
            {
                id:"preenchimento-facial",
                nome: "Preenchimento Facial",
                descricao: "Procedimento estético que utiliza substâncias para restaurar volume e contorno facial."
            }
        ]
    },
    {
        id: "corporais",
        categoria: "Tratamentos corporais",
        procedimentos: [
            {
                id:"massagem-modeladora",
                nome: "Massagem modeladora",
                descricao: "Massagem corporal realizada conforme a avaliação e os objetivos individuais."
            },
            {
                id:"drenagem-linfatica",
                nome: "Drenagem linfática",
                descricao: "Técnica de massagem que estimula o sistema linfático, promovendo a eliminação de toxinas e a redução de inchaço."
            }
        ]
    },
    {
        id: "depilacao-laser",
        categoria: "Depilação a laser",
        procedimentos: [
            {
                id:"depilacao-laser",
                nome: "Depilação a Laser",
                descricao: "Procedimento para redução duradoura dos pelos, mediante avaliação profissional."
            }
        ]
    }
];

export default tratamentos;