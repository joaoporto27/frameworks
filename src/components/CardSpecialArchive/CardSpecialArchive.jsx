import styles from './CardSpecialArchive.module.css';
import Link from 'next/link';

export default function Card({ SpecialArchive }) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{SpecialArchive.title}</h3>
            <p className={styles.description}>{SpecialArchive.description}</p>
        </div>
    );
}