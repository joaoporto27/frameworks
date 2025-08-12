import styles from './card.module.css';
import Image from 'next/image';

export default function CardNextjs({ title, description }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
}