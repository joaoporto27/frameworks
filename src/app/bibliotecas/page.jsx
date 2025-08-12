import React from "react";
import styles from "./biblioteca.module.css"
import CardComponent from "../../components/CardBiblioteca";

export default function Biblioteca() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bibliotecas JavaScript</h1>
            <p className={styles.description}>Esta é a página dedicada às Bibliotecas JavaScript.</p>
            <CardComponent />
            </div>
    )
}
