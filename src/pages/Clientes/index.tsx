import React from 'react';
import Header from '../../components/Header';
import ClientForm from '../../components/ClientForm';
import UserIcon from '../../assets/images/userIcon.png';
import Styles from './styles.module.scss';
import Plus from '../../assets/images/plus.svg';
import { useState } from 'react';

export const props = {
    title: 'SISTEMA DE CADASTRO DE CLIENTES',
    icon: UserIcon,
    subtitle: 'Aqui poderá fazer consultas, inserções  ou alterações de clientes'
}

export default function Clientes() {

    const [form, setForm] = useState(false)

    const handleOpenForm = () => {
        if (form === false) {
            setForm(true);
        } else {
            setForm(false);
        }
    }
    const telefone2 = ''

    return (
        <>
            <Header title={props.title} icon={props.icon} subtitle={props.subtitle} />

            <div className={Styles.container}>
                <button onClick={handleOpenForm}>Clientes <img src={Plus} alt="plus" /></button>
                {
                    form ? <ClientForm /> :
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
                                    <tr>
                                        <th>João da Silva</th>
                                        <th>joajo@mail.com</th>
                                        <th>(11) 9999-9999</th>
                                        <th>{telefone2 ? telefone2 : '-'}</th>
                                        <th>Rua tal numero 5</th>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                }

            </div>
        </>
    );
}