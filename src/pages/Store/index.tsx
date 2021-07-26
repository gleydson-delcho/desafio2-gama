import React, { FormEvent, useEffect, useState } from 'react';
import { api } from '../../api/api';
import HomeIcon from '../../assets/images/homeIcon.png';
import Header from '../../components/Header';
import Json from '../../server.json';
import Navbar from '../../components/Navbar';
import Styles from './styles.module.scss';

type Products = {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    price: number;
}

type ClientData = {
    id: number;
    name: string;
    email: string;
    fone1: string;
    fone2?: string;
    endereco: string;
}

export const props = {
    title: 'ESCOLHA O PRODUTO DE SEUS CLIENTES AQUI!',
    icon: HomeIcon,
    subtitle: 'Caso o cliente não seja listado favor cadastrar novo cliente'
}

export default function Store() {

    const [allProducts, setAllProducts] = useState<Products[]>();
    const [clients, setClients] = useState<ClientData[]>();
    const [clientId, setClientId] = useState(0);
    const [productId, setProductId] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const saleData = JSON.parse(String(localStorage.getItem('SaleData'))) || [];

    const date = `${new Date().getDate()}-${new Date().getUTCMonth() + 1}-${new Date().getFullYear()}`


    const formValues = {
        productId,
        date: date,
        clientId,
        quantity
    }

    const initialValues = () => {
        setProductId(0);
        setQuantity(0);
    }


    const checkValues =
        formValues.quantity === 0;

    useEffect(() => {

        const clientData = JSON.parse(String(localStorage.getItem('ClientData'))) || [];
        setClients(clientData)

        const Response = async () => {
            const data = await Json.produtos;
            const products = data;
            setAllProducts(products);
        }
        Response();
    }, [])

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (checkValues) {
            alert('Erro: Um ou mais campos estão vazios!')
        } else {
            saleData.push(formValues);
            localStorage.setItem('SaleData', JSON.stringify(saleData));
            initialValues();
            alert('Sua compra foi salva em nosso localStorage')
        }
    }

    return (
        <>
            <Header title={props.title} icon={props.icon} subtitle={props.subtitle} />
            <div className={Styles.container}>
                <Navbar />
                <div className={Styles.containerContent}>
                    <div className={Styles.content}>
                        <h2>Loja virtual de nossos produtos</h2>
                        <form className={Styles.form} onSubmit={handleSubmit}>
                            <h1>Adicione seus produtos aqui</h1>
                            <fieldset>
                                <select value={productId} onChange={e => setProductId(
                                    Number(e.target.value))}>
                                    <option value="">Selecione o item desejado</option>
                                    {
                                        allProducts?.map(item => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </fieldset>
                            <fieldset>
                                <select value={clientId} onChange={e => setClientId(
                                    Number(e.target.value))}>
                                    <option value="">Selecione o item desejado</option>
                                    {
                                        clients?.map(item => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </fieldset>
                            <fieldset>
                                <label htmlFor="quantity">Informe a quantidade:</label>
                                <input type="number"
                                    min="0" value={quantity}
                                    onChange={e => { setQuantity(Number(e.target.value)) }} />
                            </fieldset>

                            <button type="submit" >Salvar</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}