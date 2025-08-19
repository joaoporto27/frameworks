
import React from "react";
import styles from "./ProseContrasCard.module.css";


export default function ProseContrasCard({ vantagens, desvantagens }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Prós e Contras</h2>
            <div className={styles.centro}>
                <div className={styles.pros}>
                    <h3 className={styles.h3}>Prós</h3>
                    <div>{vantagens}</div>
                </div>
                <div className={styles.linha}></div>
                <div className={styles.contras}>
                    <h3 className={styles.h3}>Contras</h3>
                    <div>{desvantagens}</div>
                </div>
            </div>
        </div>
    );
}