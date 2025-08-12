import Link from "next/link";

export const SpecialArchive = [
    {
        title: "error.js",
        description: "lida com erros específicos de componentes/rotas, fornecendo tratamento localizado, substituindo o componente o com erro.",
        link: "'/error'"
    },
    {
        title: "global-error.js",
        description: " lida com erros globais, fornecendo um fallback para toda a aplicação.",
        link: "'/global-error'"
    },
    {
        title: "loading.js",
        description: "lida com estados de carregamento, exibindo um indicador de carregamento enquanto os dados estão sendo buscados.",
        link: "'/loading'"
    },
    {
        title: "notFound.js",
        description: "é usado para exibir uma página personalizada quando o usuário entra em uma rota não existente na sua aplicação.",
        link: "'/notFound'"
    },
    {
        title: "layout.js global",
        description: " para fazer com que a aplicação do layout seja global, basta colocar o layout na pasta app, e ele engloba todo o site.",
        link: ""
    },
    {
        title: "layout.js por rota",
        description: " para fazer com que a aplicação seja só em determinadas pastas, basta criar uma pasta para cada aplicação e colocar o layout.js dentro dessa pasta, assim o layout será aplicado em todos os arquivos dentro dessa pasta.",
        link: ""
    },
    {
        title: "page.js",
        description: "define o conteúdo da página que será renderizado quando essa rota for acessada. Ele atua como o componente principal para cada rota, tornando-a acessível ao público. Essencialmente, é o arquivo que define a interface do usuário específica para cada rota.",
        link: "'/page'"
    }
]