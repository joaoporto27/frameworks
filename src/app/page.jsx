import React from "react";
import styles from "./page.module.css";
import Cards from "../components/Cards";

export default function Home() {
    return (
        <div className={styles.container}>
            <Cards />

        
            <div className={styles.title}>

            <h1>Grupo</h1>
            </div>
            <div className={styles.cardsContainer}>
            <Cards
                titulo="Título do Card"
                nome="Nome do Card"
                descricao="Descrição do Card"
                />
            <Cards
                titulo="Título do Card"
                nome="Nome do Card"
                descricao="Descrição do Card"
                />
            <Cards
                titulo="Título do Card"
                nome="Nome do Card"
                descricao="Descrição do Card"
                />
            <Cards
                titulo="Título do Card"
                nome="Nome do Card"
                descricao="Descrição do Card"
                />
            <Cards
                titulo="Título do Card"
                nome="Nome do Card"
                descricao="Descrição do Card"
                />
            <Cards
                titulo="Título do Card"
                nome="Nome do Card"
                descricao="Descrição do Card"
                />
                </div>
        </div>
    );
}
