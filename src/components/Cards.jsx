import React from 'react';
import styles from './Cards.module.css';

export default function Home({ titulo, nome, descricao }) {
    return (
    <div className={styles.card}>
        <h2>{titulo}</h2>
        <h3>{nome}</h3>
        <p>{descricao}</p>
    </div>
    );
}