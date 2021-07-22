import React from 'react';
import { Link } from 'react-router-dom';
import './styles.module.scss';


export default function Navbar(): JSX.Element {
    return (
        <aside>
            <Link  to="/">Home</Link>
            <Link to="/clientes">Clientes</Link>
            <Link to="/produtos">Produtos</Link>
        </aside>
    );
}