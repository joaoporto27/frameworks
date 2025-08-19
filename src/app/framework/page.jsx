import React from "react";
import styles from "./page.module.css";
import CardDescricao from "../../components/CardDescricao";
import CardImage from "../../components/CardImage";
import ProseContrasCard from "../../components/ProseContrasCard";

export default function Framework() {
    return (
        <div className={styles.container}>
            <CardDescricao
                title="O que é um Framework?"
                description="Um framework é uma estrutura reutilizável de código (um “esqueleto”) que fornece componentes e diretrizes para desenvolver aplicações de forma mais rápida e padronizada. Ele já tem funcionalidades prontas e espera que o desenvolvedor complete o que falta. Segue o princípio da Inversão de Controle: o framework chama seu código, não o contrário."
            />
            <CardDescricao
                title="Exemplos de Frameworks"
                description="Alguns exemplos de frameworks incluem o React (para construção de interfaces) e o Express (para desenvolvimento de APIs)."
            />
            <div className={styles.carroseldeimagens}>
                <CardImage
                    src="/images/React.png"
                    alt="Descrição da imagem"
                    width={200}
                    height={200}
                    title="React"
                    description="Um framework para construção de interfaces"
                />
                <CardImage
                    src="/images/Angular.png"
                    alt="Descrição da imagem"
                    width={200}
                    height={200}
                    title="Angular"
                    description="Um framework para construção de aplicações web"
                />
                <CardImage
                    src="/images/Vue.png"
                    alt="Descrição da imagem"
                    width={200}
                    height={200}
                    title="Vue.js"
                    description="Um framework para construção de interfaces"
                />
            </div>
            <ProseContrasCard
                vantagens="Facilita o desenvolvimento, promove boas práticas e é geralmente bem documentado, padrões de códigos já definidos, comunidade ativa e suporte, segurança e testes incluídos."
                desvantagens="Pode ter uma curva de aprendizado íngreme e pode ser excessivamente opinativo, pode ter limitações nas personalizações e atualizações às vezes quebram código antigo."
            />
            <CardDescricao
                title="Funcionalidades Principais"
                description="As principais funcionalidades de um framework são o reuso de código, componentes reutilizáveis, testes integrados, segurança e validação, modularidade."
            />
            <CardDescricao
                title="Uso no Mercado e Oportunidades"
                description="Altíssima demanda no mercado de trabalho. Conhecimento de frameworks como React, Angular, Django, Flask é muito valorizado. Startups e grandes empresas usam essas tecnologias para acelerar projetos."
            />
        </div>
    );
}
