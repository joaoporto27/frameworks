import React from "react";
import styles from "./SpecialArchives.module.css"
import CardSpecialArchive from "@/components/CardSpecialArchives/CardSpecialArchives";
import { SpecialArchive } from "../data/SpecialArchive";
import Image from "next/image";

export default function SpecialArchivesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Arquivos especiais</h1>
      <Image
        src="/images/nextJs.png"
        alt="Arquivos especiais"
        width={300}
        height={150}
        className={styles.image}
      />
      <p className={styles.description}>Bem-vindo à página de arquivos especiais!</p>
      <div className={styles.content}>
        <h1>Diferença e função dos arquivos: error.js / global-error.js:</h1>
        <div className={styles.slice}>
            {SpecialArchive.slice(0, 2).map((archive, index) => (
          <CardSpecialArchive key={index} SpecialArchive={archive} />
        ))}
        </div>
      </div>
      <div className={styles.content}>
        <h1>Função e uso de loading.js:</h1>
        <div className={styles.slice}>
          {SpecialArchive.slice(2, 3).map((archive, index) => (
            <CardSpecialArchive key={index} SpecialArchive={archive} />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <h1>Função e uso de not-found.js:</h1>
        <div className={styles.slice}>
          {SpecialArchive.slice(3, 4).map((archive, index) => (
            <CardSpecialArchive key={index} SpecialArchive={archive} />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <h1>Aplicação global e por rota do layout.js:</h1>
        <div className={styles.slice}>
          {SpecialArchive.slice(4, 6).map((archive, index) => (
            <CardSpecialArchive key={index} SpecialArchive={archive} />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <h1>Função do page.js em cada rota:</h1>
        <div className={styles.slice}>
          {SpecialArchive.slice(6, 7).map((archive, index) => (
            <CardSpecialArchive key={index} SpecialArchive={archive} />
          ))}
        </div>
      </div>
    </div>
  );
};