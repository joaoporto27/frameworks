import styles from "./nextjs.module.css";
import CardNextjs from "@/components/CardNextjs/CardNextjs";

export default function NextJs() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Next.js 15</h2>
            <div className={styles.whatisit}>
            <h4 className={styles.subtitle}>O que é Next.js 15?</h4>
            <p>Next.js é um framework JavaScript de código aberto construído sobre o React, projetado para facilitar o desenvolvimento de aplicações web, especialmente aquelas com foco em performance e SEO.</p>
            </div>
            <div className={styles.cards}>
                <p className={styles.titleCard}>Pontos Fortes</p>
                <div className={styles.style}>
                <CardNextjs className={styles.card} title="Renderização híbrida" description="O Next.js oferece flexibilidade ao permitir três formas de renderização: no servidor (SSR), no cliente (CSR) e com geração estática (SSG). Isso possibilita escolher a abordagem mais adequada para cada página, otimizando o desempenho e a experiência do usuário." />
                <CardNextjs className={styles.card} title="Otimização para SEO" description="O Next.js facilita a otimização para mecanismos de busca, com recursos como a renderização no servidor, que garante que o conteúdo seja acessível para os crawlers, e componentes para adicionar metadados relevantes." />
                <CardNextjs className={styles.card} title="Roteamento automático" description= "O Next.js oferece roteamento baseado em arquivos, facilitando a criação e organização das rotas da aplicação." />  
                <CardNextjs className={styles.card} title="Melhor desempenho" description="O framework foi projetado para otimizar o desempenho, com recursos como divisão de código, pré-carregamento de páginas e otimização automática de imagens." />
                <CardNextjs className={styles.card} title="Experiência do desenvolvedor aprimorada" description="O Next.js oferece recursos como o Fast Refresh para desenvolvimento rápido e uma comunidade ativa que facilita o aprendizado e a resolução de problemas." />
                <CardNextjs className={styles.card} title="Componentes de servidor" description="O Next.js oferece suporte robusto para TypeScript, uma linguagem que adiciona tipagem estática ao JavaScript." />
                <CardNextjs className={styles.card} title="Integração com TypeScript" description="O Next.js oferece recursos como o Fast Refresh para desenvolvimento rápido e uma comunidade ativa que facilita o aprendizado e a resolução de problemas." />
                <CardNextjs className={styles.card} title="Facilidade de autenticação" description="O Next.js facilita a implementação de autenticação, com bibliotecas como Auth.js (anteriormente NextAuth.js), que oferece suporte para diversos métodos de autenticação" />
                </div>
            </div>
        </div>
    )
}