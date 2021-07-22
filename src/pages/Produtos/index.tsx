import React, { useState } from 'react';
import Header from '../../components/Header';
import ProductLogo from '../../assets/images/productBox.png';
import Enter from '../../assets/images/entrada.svg';
import Exit from '../../assets/images/saida.svg';
import ProductForm from '../../components/ProductForm';
import Styles from './styles.module.scss';
import Navbar from '../../components/Navbar';

type ResponseType = {
    id: number;
    name: string;
    local: string;
    price: string;
    quantity: number;
}

export const props = {
    title: 'SISTEMA DE CADASTRO DE PRODUTOS',
    icon: ProductLogo,
    subtitle: 'Aqui poderá fazer consultas, inserções ou alterações de produtos'
}

export default function Produtos() {

    const productData = JSON.parse(String(localStorage.getItem('ProductData'))) || [];

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
                <Navbar />
                <div className={Styles.containerContent}>
                    <div className={Styles.content}>
                        <button onClick={handleOpenForm}>Produtos<img src={form ? Exit : Enter} alt="plus" /></button>
                        {
                            form && <ProductForm />
                        }
                        <section className={Styles.data}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome do produto</th>
                                        <th>Endereço do estoque</th>
                                        <th>Preço</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productData &&
                                        productData.map((item: ResponseType) => {
                                            return (
                                                <tr key={item.id}>
                                                    <th>{item.name}</th>
                                                    <th>{item.local}</th>
                                                    <th>{item.price}</th>
                                                    <th>{item.quantity}</th>
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