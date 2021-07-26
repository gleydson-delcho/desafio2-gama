import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import HomeIcon from '../../assets/images/homeIcon.png';
import Navbar from '../../components/Navbar';
import Styles from './styles.module.scss';
import Json from '../../server.json';
import Cart from '../../assets/images/shopping-cart.png';

export const props = {
    title: 'SISTEMA DE GERENCIAMENTO DE CADASTROS',
    icon: HomeIcon,
    subtitle: 'Escolha no menu o que deseja realizar o cadastro'
}

type Products = {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    price: number;
}

export default function Home(): JSX.Element {

    const history = useHistory();
    const [allProducts, setAllProducts] = useState<Products[] >();

    useEffect(() => {
        const Response = async () => {
            const data = await Json.produtos

            const products: any = data;
            setAllProducts(products);
        }
        Response();
    }, [])

    const handlePurchase = () => {
        history.push('/loja')
    }

    return (
        <>
            <Header title={props.title} icon={props.icon} subtitle={props.subtitle} />
            <div className={Styles.container}>
                <div className={Styles.containerContent}>
                    <Navbar />
                    <div className={Styles.content}>
                        <h2>Bem vindos ao sistema de gerenciamento de cadastros!</h2>
                        <div className={Styles.card}>
                            {
                                allProducts?.map(item => {
                                    const formatPrice = 
                                        item.price.toFixed(2).toString().replace('.',',');
                                    return (
                                        <div key={item.id} className={Styles.products}>
                                            <h2>{item.name}</h2>
                                            <img src={item.thumbnail} alt={item.name} />
                                            <p>{item.description}</p>
                                            <span>
                                                <strong>R$ {formatPrice}</strong>
                                                <img onClick={handlePurchase} src={Cart} alt="cart" />
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}