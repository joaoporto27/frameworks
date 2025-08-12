import styles from "./nextjs.module.css";


export default function NextJs() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Next.js 15</h2>
            <div className={styles.whatisit}>
            <h4 className={styles.subtitle}>O que é Next.js 15?</h4>
            <p>Next.js é um framework JavaScript de código aberto construído sobre o React, projetado para facilitar o desenvolvimento de aplicações web, especialmente aquelas com foco em performance e SEO.</p>
            </div>
        </div>
    )
}