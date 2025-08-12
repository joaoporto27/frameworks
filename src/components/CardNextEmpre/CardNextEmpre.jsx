import styles from "./CardNextEmpre.module.css";
import Image from "next/image";

export default function CardNextEmpre({image, alt, title, description}) {
    return (
        <div className={styles.card}>
            <Image className={styles.image} src={image} alt={alt} width={100} height={100} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    )
}