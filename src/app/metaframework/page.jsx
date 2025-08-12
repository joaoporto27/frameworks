import React from "react";
import styles from "./page.module.css";
import CardDescricao from "../../components/CardDescricao";
import CardImage from "../../components/CardImage";

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
            <div className={styles.carroseldeimagens}>
                <CardImage 
                src="/images/Next-Icon.png"
                alt="Descrição da imagem"
                width={200}
                height={200}
                title="Next.js"
                description="Um framework React para produção"
                />  
                 <CardImage 
                src="/images/Next-Icon.png"
                alt="Descrição da imagem"
                width={200}
                height={200}
                title="Next.js"
                description="Um framework React para produção"
                />  
                 <CardImage 
                src="/images/Next-Icon.png"
                alt="Descrição da imagem"
                width={200}
                height={200}
                title="Next.js"
                description="Um framework React para produção"
                />  
            </div>
        </div>
    );
}
