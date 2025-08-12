import styles from "./nextjs.module.css";
import CardNextjs from "../../components/CardNextjs/CardNextjs";
import CardNextEmpre from "../../components/CardNextEmpre/CardNextEmpre";

export default function NextJs() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Next.js 15</h2>
            <div className={styles.whatisit}>
            <h4 className={styles.subtitle}>O que é Next.js 15?</h4>
            <p className={styles.description}>Next.js é um framework JavaScript de código aberto construído sobre o React, projetado para facilitar o desenvolvimento de aplicações web, especialmente aquelas com foco em performance e SEO.</p>
            </div>
            <div className={styles.cards}>
                <p className={styles.titleCard}>Pontos Fortes</p>
                <div className={styles.style}>
                <CardNextjs title="Renderização híbrida" description="O Next.js oferece flexibilidade ao permitir três formas de renderização: no servidor (SSR), no cliente (CSR) e com geração estática (SSG). Isso possibilita escolher a abordagem mais adequada para cada página, otimizando o desempenho e a experiência do usuário." />
                <CardNextjs title="Otimização para SEO" description="O Next.js facilita a otimização para mecanismos de busca, com recursos como a renderização no servidor, que garante que o conteúdo seja acessível para os crawlers, e componentes para adicionar metadados relevantes." />
                <CardNextjs title="Roteamento automático" description= "O Next.js oferece roteamento baseado em arquivos, facilitando a criação e organização das rotas da aplicação." />  
                <CardNextjs title="Melhor desempenho" description="O framework foi projetado para otimizar o desempenho, com recursos como divisão de código, pré-carregamento de páginas e otimização automática de imagens." />
                <CardNextjs title="Experiência do desenvolvedor aprimorada" description="O Next.js oferece recursos como o Fast Refresh para desenvolvimento rápido e uma comunidade ativa que facilita o aprendizado e a resolução de problemas." />
                <CardNextjs title="Componentes de servidor" description="O Next.js oferece suporte robusto para TypeScript, uma linguagem que adiciona tipagem estática ao JavaScript." />
                <CardNextjs title="Integração com TypeScript" description="O Next.js oferece recursos como o Fast Refresh para desenvolvimento rápido e uma comunidade ativa que facilita o aprendizado e a resolução de problemas." />
                <CardNextjs title="Facilidade de autenticação" description="O Next.js facilita a implementação de autenticação, com bibliotecas como Auth.js (anteriormente NextAuth.js), que oferece suporte para diversos métodos de autenticação" />
                </div>
            </div>
            <div className={styles.cards}>
                <p className={styles.titleCard}>Novidades em relação às versões anteriores</p>
                <div className={styles.style}>
                <CardNextjs title="Turbopack Estável" description="O Turbopack, substituto do Webpack, agora está estável e oferece inicializações de                   servidor locais mais rápidas e atualizações de código mais rápidas durante o desenvolvimento." />
                <CardNextjs title="Novo Sistema de Cache" description="O Next.js 15 reimagina o cache, permitindo controle mais granular sobre a frescura dos dados, com opções para especificar partes estáticas e dinâmicas da aplicação e a frequência de revalidação dos dados." />
                <CardNextjs title="Novo Componente <Form>" description="O novo componente <Form> estende o elemento <form> HTML, oferecendo recursos como pré-busca, navegação do lado do cliente e aprimoramento progressivo. " />
                <CardNextjs title="Suporte ao React 19" description="O Next.js 15 oferece suporte completo ao React 19, com a possibilidade de usar a versão estável sem a necessidade de Release Candidates ou Canary. " />
                <CardNextjs title="Mudanças no Cache de Rotas" description="Manipuladores de rota GET não são mais armazenados em cache por padrão, visando melhorar a segurança do servidor. Essa mudança pode ser revertida com a opção dynamic = 'force-static'. ." />
                <CardNextjs title="IDs de Ação Segura" description="Introdução de IDs de ação segura para aprimorar a segurança do servidor." />
                <CardNextjs title="Eliminação de Código Morto" description="Melhorias na eliminação de código morto para otimizar o tamanho do pacote. " />
                <CardNextjs title="Indicador Estático no Desenvolvimento" description="Um indicador estático é exibido durante o desenvolvimento para identificar rotas estáticas e dinâmicas. " />
                <CardNextjs title="Melhorias no Erro de Hidratação" description="Mensagens de erro e visualização aprimoradas para erros de hidratação, com sugestões de como lidar com o problema.  " />
                </div>
            </div>
            <div className={styles.cards}>
                <p className={styles.titleCard}>Curiosidades e características interessantes do Next.js:</p>
                <div className={styles.style}>
                <CardNextjs title="Roteamento Simplificado" description="Ao contrário do React puro, o Next.js possui roteamento integrado, eliminando a necessidade de bibliotecas adicionais como o React Router. Além disso, oferece suporte para rotas dinâmicas, o que é muito útil em muitos casos." />
                <CardNextjs title="Otimização de Imagens" description="O Next.js possui otimização automática de imagens, o que pode ser uma grande vantagem, já que gerenciar e otimizar imagens manualmente pode ser demorado." />
                <CardNextjs title="Renderização Híbrida" description= "O Next.js suporta tanto a renderização do lado do servidor (SSR) quanto a geração estática de sites (SSG), permitindo escolher a melhor abordagem para cada página ou seção do seu site/aplicação." />  
                <CardNextjs title="SEO Amigável" description="O Next.js facilita a otimização de SEO, permitindo que seus sites e aplicações sejam mais facilmente encontrados pelos motores de busca. " />
                <CardNextjs title="Construído para o Futuro" description="O Next.js está sempre evoluindo e incorporando as últimas novidades do ecossistema React, como Componentes de Servidor e Ações." />
                <CardNextjs title="Desempenho" description="O Next.js é conhecido por seu desempenho rápido, com recursos como pré-busca de rotas, carregamento otimizado de recursos e geração de imagens responsiva." />
                <CardNextjs title="Otimização com Turbopack" description="O Next.js está integrando o Turbopack, um empacotador incremental otimizado para JavaScript e TypeScript, escrito em Rust, para builds ainda mais rápidos." />
                <CardNextjs title="Empresa Vercel" description="O Next.js foi criado por Guillermo Rauch, que também é o CEO da Vercel, a empresa por trás do framework. " />
            </div>
            <div className={styles.cards}>
                <p className={styles.titleCard}>Empresas usuárias </p>
            <div className={styles.style}>
                <CardNextEmpre image="/images/netflix.png" alt="Netflix" title="Netflix" />
                <CardNextEmpre image="/images/nike.png" alt="Nike" title="Nike"  />
                <CardNextEmpre image="/images/openai.png" alt="OpenAI" title="OpenAI"  />
                <CardNextEmpre image="/images/claudeai.png" alt="Claude AI" title="Claude AI"  />
                <CardNextEmpre image="/images/dynamox.png" alt="Dynamox" title="Dynamox"  />
                <CardNextEmpre image="/images/kenlo.png" alt="Kenlo" title="Kenlo"  />
                <CardNextEmpre image="/images/nerdWallet.png" alt="NerdWallet" title="NerdWallet"  />
            </div>
            </div>
            <div className={styles.cards}>
                <p className={styles.titleCard}>Áreas de atuação</p>
                <div className={styles.style}>
                <CardNextjs title="Desenvolvimento Front-end" description="O Next.js é amplamente utilizado para criar interfaces de usuário responsivas e performáticas, incluindo páginas estáticas e aplicações com renderização do lado do servidor." />
                <CardNextjs title="Desenvolvimento Full-stack" description="É possível combinar Next.js com outros frameworks backend, como o NestJS, para construir aplicações completas, com foco em escalabilidade e otimização." />
                <CardNextjs title="Desenvolvimento de Micro-SaaS" description= "Next.js é uma excelente escolha para criar e lançar micro-serviços, devido à sua capacidade de otimizar o carregamento de páginas e a experiência do usuário." />  
                <CardNextjs title="Sites e Portais de Conteúdo" description="Sua capacidade de lidar com grandes volumes de conteúdo, juntamente com o desempenho otimizado, torna o Next.js ideal para blogs, portais de notícias e sites com muito conteúdo. " />
                </div>
            </div>
            <div className={styles.cards}>
                <p className={styles.titleCard}>Oportunidade de carreira</p>
                <div className={styles.style}>
                <CardNextjs title="Desenvolvedor Next.js" description="Empresas de diversos tamanhos procuram desenvolvedores com experiência em Next.js para projetos que variam de sites estáticos a aplicações web complexas." />
                <CardNextjs title="Desenvolvedor Front-end com Next.js" description="A crescente demanda por desenvolvedores que dominam React e Next.js abre portas para vagas que exigem conhecimentos em renderização do lado do servidor, otimização de imagens e outros recursos avançados. " />
                <CardNextjs title="Desenvolvedor Full-stack com Next.js" description= "A combinação de Next.js com frameworks backend como NestJS cria oportunidades para desenvolvedores que buscam trabalhar em projetos mais abrangentes e com foco em desempenho e escalabilidade. " />  
                </div>
            </div>
        </div>
        </div>
    )
}