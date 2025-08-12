import "./globals.css";

export const metadata = {
    title: "Projeto Framework",
    description: "Projeto sobre frameworks ",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}