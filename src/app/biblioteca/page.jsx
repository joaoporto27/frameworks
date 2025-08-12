import React from "react";
import styles from "./biblioteca.module.css"
import CardComponent from "../../components/CardBiblioteca";

export default function Biblioteca() {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Bibliotecas JavaScript</h1>
                <p className={styles.description}>
                    <strong>Esta é a página dedicada às Bibliotecas JavaScript.</strong><br />
                    Explore abaixo algumas das principais bibliotecas utilizadas no desenvolvimento web moderno.
                </p>
                <div className={styles.cards}>
                    <CardComponent />
                </div>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>Express.js</h1>
                <p className={styles.description}>
                    <strong>Por que escolhemos este framework?</strong><br />
                    Ele oferece uma base sólida e escalável para o desenvolvimento back-end, permitindo a criação de APIs e serviços com alta performance.<br /><br />
                    <ul style={{textAlign: "left", margin: "0 auto", maxWidth: "700px"}}>
                        <li>Foco no lado do servidor</li>
                        <li>Flexibilidade e boa organização do código</li>
                        <li>Suporte a integrações modernas</li>
                        <li>Ampla comunidade e documentação</li>
                    </ul>
                </p>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>Prós</h1>
                <div className={styles.description}>
                    <ul style={{textAlign: "left", margin: "0 auto", maxWidth: "700px", listStyle: "none", paddingLeft: 0}}>
                        <li>🛠 <strong>Simplicidade e flexibilidade</strong> — fácil de configurar e começar a usar, sem excesso de burocracia.</li>
                        <li>🌎 <strong>Grande comunidade</strong> — ampla base de usuários, tutoriais, exemplos e suporte online.</li>
                        <li>🔌 <strong>Ecossistema de middlewares</strong> — enorme variedade de pacotes para adicionar funcionalidades como autenticação, tratamento de erros e logging.</li>
                        <li>⚡ <strong>Performance satisfatória</strong> para aplicações de pequeno, médio e até grande porte.</li>
                        <li>📦 <strong>Compatibilidade ampla</strong> — funciona com qualquer banco de dados ou biblioteca JavaScript/TypeScript.</li>
                        <li>🔄 <strong>Extensível e modular</strong> — permite estruturar o código de acordo com a necessidade do projeto.</li>
                        <li>🧠 <strong>Curva de aprendizado baixa</strong> — ótimo para quem está iniciando no back-end.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
