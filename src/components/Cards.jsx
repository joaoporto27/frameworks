import React from 'react';
import styles from './Cards.module.css';

export default function Home({nome, descricao }) {
    return (
    <div className={styles.card}>
        <h3>{nome}</h3>
        <p>{descricao}</p>
    </div>
    );
}