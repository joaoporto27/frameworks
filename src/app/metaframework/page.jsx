import React from "react";
import styles from "./page.module.css";
import CardDescricao from "../../components/CardDescricao";
import CardImage from "../../components/CardImage";
import ProseContrasCard from "../../components/ProseContrasCard";

export default function MetaFramework() {
    return (
        <div className={styles.container}>
            <CardDescricao 
            title="O que são Metaframeworks?"
            description="Um meta-framework é um nível acima: ele combina e/ou estende frameworks existentes para criar um ambiente de desenvolvimento ainda mais produtivo, flexível ou especializado. Ele gerencia ou organiza vários frameworks e ferramentas. Costuma ser usado para facilitar integração, performance e escalabilidade."
            />
            <CardDescricao 
            title="Exemplos de Metaframeworks"
            description="Alguns exemplos de meta-frameworks incluem o Next.js (que é construído sobre o React) e o NestJS (que é construído sobre o Express)."
            />
            <ProseContrasCard 
                        vantagens="Abstrai configurações complexas.
                            Melhora performance (ex: renderização híbrida).
                            Integrações prontas (API, SSR, autenticação)."
                        desvantagens="Difícil de entender o que está por trás.
                            Maior dependência de ferramentas externas."
                        />
            <CardDescricao
            title="Funcionalidades principais"
            description="Organização de múltiplos frameworks, Configuração zero ou mínima, SEO otimizado (no caso de front-ends), Renderização híbrida (CSR + SSR), Deploy facilitado"
            />
            <CardDescricao 
            title="Utilizada em sala de aula"
            description="O meta framework que será utilizado em sala de aula é o Next.js"
            />
            <div className={styles.images}>
                <CardImage 
                src="/images/Next-Icon.png"
                alt="Descrição da imagem"
                width={200}
                height={200}
                title="Next.js"
                description="Um framework React para produção"
                />  
                 <CardImage 
                src="/images/nuxt.png"
                alt="Descrição da imagem"
                width={200}
                height={200}
                title="Nuxt.js"
                description="Um framework Vue para produção"
                />  
                 <CardImage 
                src="/images/nest.jpg"
                alt="Descrição da imagem"
                width={200}
                height={200}
                title="Nest.js"
                description="Um framework Node.js para construção de aplicações eficientes"
                />  
            </div>
        </div>
    );
}
