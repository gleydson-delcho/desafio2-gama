import React from 'react';
import Header from '../../components/Header';
import ClientForm from '../../components/ClientForm';
import UserIcon from '../../assets/images/userIcon.png';
import Styles from './styles.module.scss';
import Enter from '../../assets/images/entrada.svg';
import Exit from '../../assets/images/saida.svg';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

type ResponseType = {
    id: number;
    name: string;
    email: string;
    fone1: string;
    fone2?: string;
    endereco: string;
}

export const props = {
    title: 'SISTEMA DE CADASTRO DE CLIENTES',
    icon: UserIcon,
    subtitle: 'Aqui poderá fazer consultas, inserções  ou alterações de clientes'
}


export default function Clientes(): JSX.Element {

    const clientData = JSON.parse(String(localStorage.getItem('ClientData'))) || [];

    const [form, setForm] = useState(false)

    const handleOpenForm = () => {
        if (form === false) {
            setForm(true);
        } else {
            setForm(false);
        }
    }

    return (
        <>
            <Header title={props.title} icon={props.icon} subtitle={props.subtitle} />
            <div className={Styles.container}>
                <div className={Styles.containerContent}>
                    <Navbar />
                    <div className={Styles.content}>

                        <button onClick={handleOpenForm}>Clientes <img src={form ? Exit : Enter} alt="plus" /></button>
                        {
                            form && <ClientForm children />
                        }
                        <section className={Styles.data}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome Completo</th>
                                        <th>E-mail</th>
                                        <th>Telefone 1</th>
                                        <th>Telefone 2</th>
                                        <th>Endereço</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        clientData &&
                                        clientData.map((item: ResponseType) => {
                                            return (
                                                <tr key={item.id}>
                                                    <th>{item.name}</th>
                                                    <th>{item.email}</th>
                                                    <th>{item.fone1}</th>
                                                    <th>{item.fone2 ? item.fone2 : '-'}</th>
                                                    <th>{item.endereco}</th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
