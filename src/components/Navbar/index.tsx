import React from 'react';
import './styles.module.scss';

export default function Navbar(): JSX.Element {
    return (
        <aside>
            <a href="/">Home</a>
            <a href="/clientes">Clientes</a>
            <a href="/produtos">Produtos</a>
        </aside>
    );
}