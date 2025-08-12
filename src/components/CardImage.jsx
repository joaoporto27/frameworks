import react from "react";
import Image from "next/image";
import styles from "./CardImage.module.css";

export default function CardImage({ src, alt, width, height, title, description }) {
    return (
        <div className={styles.container}>
            <Image 
            src={src} 
            alt={alt} 
            width={width} 
            height={height} />
            <div className={styles.title}>
            <h3>{title}</h3>
            </div>
            <div className={styles.description}>
            <p>{description}</p>
            </div>
        </div>
    );
}
