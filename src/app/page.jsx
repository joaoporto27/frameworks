import React from "react";
import styles from "./page.module.css";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.activitytitle}>
        <h1>Atividade Mini Wiki Tech + Pesquisa de Tecnologias</h1>
      </div>


        
            <div className={styles.title}>

      <div className={styles.title}>
        <h1>Grupo</h1>
      </div>
      <div className={styles.cardsContainer}>
        <Cards nome="Ana Beatriz" descricao="Integrante do grupo" />
        <Cards nome="Isabela Borin" descricao="Integrante do grupo" />
        <Cards nome="João Vitor" descricao="Integrante do grupo" />
        <Cards nome="Leonardo Pedro" descricao="Integrante do grupo" />
        <Cards nome="Lucas Zani" descricao="Integrante do grupo" />
        <Cards nome="Luiz Gabriel" descricao="Integrante do grupo" />
      </div>
      <h1>Nossa Mini Tech Wiki aborda tópicos como :</h1>


      <div className={styles.milagre}>
        <div className={styles.subtopicContainer}>
          <div className={styles.subtopic}>
            <h2>Frameworks e Meta-frameworks</h2>
            <p>O que são;</p>
            <p>Exemplos populares;</p>
            <p>Vantagens e desvantagens;</p>
          </div>
          <div className={styles.subtopic}>
            <h2>Bibliotecas de Estilo</h2>
            <p>Exemplos;</p>
            <p>Comparativo entre elas;</p>
            <p>Qual utilizar e por quê;</p>
          </div>
        </div>

        <div className={styles.subtopicContainer}>
          <div className={styles.subtopic}>
            <h2>Next.js 15</h2>
            <p>Principais recursos e novidades;</p>
            <p>Evolução em relação a versões anteriores;</p>
            <p>Empresas que utilizam;</p>
          </div>
          <div className={styles.subtopic}>
            <h2>Arquivos Especiais do App Router</h2>
            <p>O que fazem;</p>
            <p>Como são aplicados no projeto;</p>
          </div>
        </div>
      </div>
    </div>
  );
}