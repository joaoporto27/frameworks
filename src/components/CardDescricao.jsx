import React from "react";
import styles from "./CardDescricao.module.css"


export default function CardDescricao({ title, description }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
