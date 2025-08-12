import React from "react";
import styles from "./page.module.css";

export default function Framework() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre o Framework</h1>
            <p className={styles.description}>Esta é a página dedicada ao Framework.</p>
        </div>
    );
}
