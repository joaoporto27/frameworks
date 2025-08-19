import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/framework">FrameWork</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/metaframework">Metaframework</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/bibliotecas">Bibliotecas de Estilos</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/next">Next 15</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/arquivosEspeciais">Arquivos Especiais</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}