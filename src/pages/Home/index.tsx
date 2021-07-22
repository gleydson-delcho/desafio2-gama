import React from 'react';
import Header from '../../components/Header';
import HomeIcon from '../../assets/images/homeIcon.png';
import Styles from './styles.module.scss';
import Navbar from '../../components/Navbar';

export const props = {
    title: 'SISTEMA DE GERENCIAMENTO DE CADASTROS',
    icon: HomeIcon,
    subtitle: 'Escolha no menu o que deseja realizar o cadastro'
}


export default function Home(): JSX.Element {
    return (
        <>
            <Header title={props.title} icon={props.icon} subtitle={props.subtitle} />
            <div className={Styles.container}>
                <div className={Styles.containerContent}>
                    <Navbar />
                    <div className={Styles.content}>
                        <h2>Bem vindos ao sistema de gerenciamento de cadastros!</h2>
                    </div>
                </div>
            </div>
        </>
    );
}