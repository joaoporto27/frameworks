import React from "react";
import styles from "./page.module.css";
import CardDescricao from "@/components/CardDescricao";
import CardImage from "@/components/CardImage";
import ProseContrasCard from "@/components/ProseContrasCard";

export default function Framework() {
    return (
        <div className={styles.container}>
            <CardDescricao 
            title="O que é um Framework?"
            description="Um framework é uma estrutura de suporte que facilita o desenvolvimento de software, fornecendo uma base reutilizável e um conjunto de diretrizes."
            />
            <CardDescricao 
            title="Exemplos de Frameworks"
            description="Alguns exemplos de frameworks incluem o React (para construção de interfaces) e o Express (para desenvolvimento de APIs)."
            />
            <ProseContrasCard 
            vantagens="Facilita o desenvolvimento, promove boas práticas e é geralmente bem documentado."
            desvantagens="Pode ter uma curva de aprendizado íngreme e pode ser excessivamente opinativo."
            />
        </div>
    );
}
