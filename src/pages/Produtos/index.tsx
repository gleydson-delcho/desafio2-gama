import React from 'react';
import Header from '../../components/Header';
import ProductLogo from '../../assets/images/productBox.png';

export const props = {
    title: 'SISTEMA DE CADASTRO DE PRODUTOS',
    icon: ProductLogo,
    subtitle: 'Aqui poderá fazer consultas, inserções ou alterações de produtos'
}

export default function Produtos() {
    return (
        <>
            <Header title={props.title} icon={props.icon} subtitle={props.subtitle} />
            <h1>Produtos</h1>
        </>
    );
}