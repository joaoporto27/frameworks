import React from 'react';

export default function Home() {
    return (
    <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
        <h2>Título do Card</h2>
        <p>Este é um card simples feito com React.</p>
    </div>
    );
}