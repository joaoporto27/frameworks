import React from "react";
import styles from "./page.module.css";
import Cards from "../components/Cards";

export default function Home() {
    return (
        <div className={styles.container}>
            <Cards />
        </div>
    );
}
