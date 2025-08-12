import React from "react";
import { Avatar, Card } from 'antd';
import styles from "./CardBiblioteca.module.css"

export default function CardComponent() {
    return (
        <div className={styles.container} style={{ gap: 12 }}>
            <Card
                className={styles.card}
                style={{ width: 160, padding: 12 }}
                cover={
                    <img
                        alt="Express.js"
                        src="https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png"
                        style={{ height: 60, objectFit: "contain", padding: 8 }}
                    />
                }
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" size={28} />
                    <span style={{ marginLeft: 6, fontWeight: "bold", fontSize: "1rem" }}>Express.js</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.85rem" }}>O Express é um framework minimalista para aplicações web em Node.js.</span>
                </div>
            </Card>

            <Card
                className={styles.card}
                style={{ width: 160, padding: 12 }}
                cover={
                    <img
                        alt="React.js"
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        style={{ height: 60, objectFit: "contain", padding: 8 }}
                    />
                }
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" size={28} />
                    <span style={{ marginLeft: 6, fontWeight: "bold", fontSize: "1rem" }}>React.js</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.85rem" }}>React é uma biblioteca JavaScript para construir interfaces de usuário.</span>
                </div>
            </Card>

            <Card
                className={styles.card}
                style={{ width: 160, padding: 12 }}
                cover={
                    <img
                        alt="Vue.js"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                        style={{ height: 60, objectFit: "contain", padding: 8 }}
                    />
                }
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" size={28} />
                    <span style={{ marginLeft: 6, fontWeight: "bold", fontSize: "1rem" }}>Vue.js</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.85rem" }}>Vue.js é um framework progressivo para construção de interfaces web.</span>
                </div>
            </Card>

            <Card
                className={styles.card}
                style={{ width: 160, padding: 12 }}
                cover={
                    <img
                        alt="Angular"
                        src="https://angular.io/assets/images/logos/angular/angular.svg"
                        style={{ height: 60, objectFit: "contain", padding: 8 }}
                    />
                }
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" size={28} />
                    <span style={{ marginLeft: 6, fontWeight: "bold", fontSize: "1rem" }}>Angular</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.85rem" }}>Angular é um framework robusto para desenvolvimento de aplicações web.</span>
                </div>
            </Card>

            <Card
                className={styles.card}
                style={{ width: 160, padding: 12 }}
                cover={
                    <img
                        alt="Next.js"
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                        style={{ height: 60, objectFit: "contain", padding: 8 }}
                    />
                }
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" size={28} />
                    <span style={{ marginLeft: 6, fontWeight: "bold", fontSize: "1rem" }}>Next.js</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.85rem" }}>Next.js é um framework para aplicações React com renderização híbrida.</span>
                </div>
            </Card>

            <Card
                className={styles.card}
                style={{ width: 160, padding: 12 }}
                cover={
                    <img
                        alt="Svelte"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
                        style={{ height: 60, objectFit: "contain", padding: 8 }}
                    />
                }
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=6" size={28} />
                    <span style={{ marginLeft: 6, fontWeight: "bold", fontSize: "1rem" }}>Svelte</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.85rem" }}>Svelte é um framework inovador para construção de interfaces reativas.</span>
                </div>
            </Card>

            <Card
                className={styles.card}
                style={{ width: 160, padding: 12 }}
                cover={
                    <img
                        alt="Nuxt.js"
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/NuxtJS_Logo.png"
                        style={{ height: 60, objectFit: "contain", padding: 8 }}
                    />
                }
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=7" size={28} />
                    <span style={{ marginLeft: 6, fontWeight: "bold", fontSize: "1rem" }}>Nuxt.js</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.85rem" }}>Nuxt.js é um framework para aplicações Vue com renderização SSR.</span>
                </div>
            </Card>

            <Card
                className={styles.card}
                style={{ width: 160, padding: 12 }}
                cover={
                    <img
                        alt="NestJS"
                        src="https://nestjs.com/img/logo-small.svg"
                        style={{ height: 60, objectFit: "contain", padding: 8 }}
                    />
                }
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=9" size={28} />
                    <span style={{ marginLeft: 6, fontWeight: "bold", fontSize: "1rem" }}>NestJS</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.85rem" }}>NestJS é um framework para Node.js focado em escalabilidade e produtividade.</span>
                </div>
            </Card>

            <Card
                className={styles.card}
                style={{ width: 160, padding: 12 }}
                cover={
                    <img
                        alt="Ember.js"
                        src="https://emberjs.com/images/brand/ember_Ember-Light-e42a8c30.svg"
                        style={{ height: 60, objectFit: "contain", padding: 8 }}
                    />
                }
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=10" size={28} />
                    <span style={{ marginLeft: 6, fontWeight: "bold", fontSize: "1rem" }}>Ember.js</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.85rem" }}>Ember.js é um framework para criação de aplicações web ambiciosas.</span>
                </div>
            </Card>
        </div>
    )
}