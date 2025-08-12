import styles from './CardSpecialArchive.module.css';
import Link from 'next/link';

export default function CardSpecialArchive({ SpecialArchive }) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{SpecialArchive.title}</h3>
            <p className={styles.description}>{SpecialArchive.description}</p>
                <Link href={SpecialArchive.link} className={styles.link}>
                    veja mais
                </Link>
        </div>
    );
}
