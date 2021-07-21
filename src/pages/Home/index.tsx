import React from 'react';
import Header from '../../components/Header';
import HomeIcon from '../../assets/images/homeIcon.png';

export const props = {
    title: 'SISTEMA DE GERENCIAMENTO DE CADASTROS',
    icon: HomeIcon,
    subtitle: 'Os dados cadastros serão exibidos em suas respectivas páginas'
}

export default function Home() {
    return(
        <>
        <Header title={props.title} icon={props.icon} subtitle={props.subtitle} />
        <h1>Home</h1>
        <a href="/clientes">Clientes</a>
        <a href="/produtos">Produtos</a>
        </>
    );
}