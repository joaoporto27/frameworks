import react from "react";

export default function ProseContrasCard({ vantagens, desvantagens }) {
    return (
        <div className="container">
            <h2>Prós e Contras</h2>
            <div className="pros">
                <h3>Prós</h3>
                <p>{vantagens}</p>
            </div>
            <div className="contras">
                <h3>Contras</h3>
                <div className="desvantagens">
                    <p>{desvantagens}</p>
                </div>
            </div>
        </div>
    );
}