import React, { FormEvent } from 'react';
import { useState } from 'react';
import Styles from './styles.module.scss';

type FormValues = {
    id: number;
    name: string;
    local: string;
    price: string;
    quantity: number;
}



export default function ProductForm() {

    const [name, setName] = useState('');
    const [local, setLocal] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const productData = JSON.parse(String(localStorage.getItem('ProductData'))) || [];

    const initialValues = () => {
        setName('');
        setLocal('');
        setPrice(0);
        setQuantity(0);
    }

    const formValues: FormValues = {
        id: productData.length + 1,
        name,
        local,
        price: `R$ ${price.toFixed(2).toString().replace('.', ',')}`,
        quantity
    }

    const checkValues =
        formValues.name.trim() === '' || formValues.local.trim() === '';

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (checkValues) {
            alert('Erro: Um ou mais campos estão vazios!')
        } else {
            productData.push(formValues);
            localStorage.setItem('ProductData', JSON.stringify(productData));
            alert('Seus dados foram salvos!');
            initialValues();
        }
    }
    return (
        <>
            <div className={Styles.container} >
                <form className={Styles.form} onSubmit={handleSubmit} >
                    <h1>Adicione seus produtos aqui</h1>
                    <fieldset>
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" value={name} onChange={e => { setName(e.target.value) }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="local">Endereço do estoque:</label>
                        <input type="text" value={local} onChange={e => { setLocal(e.target.value) }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="price">Preço:</label>
                        <input step="0.01" type="number" value={price} min="0"
                            onChange={e => { setPrice(Number(e.target.value)) }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="quantity">Quantidade:</label>
                        <input type="text" value={quantity} onChange={e => { setQuantity(Number(e.target.value)) }} />
                    </fieldset>
                    <button type="submit" >Salvar</button>
                </form>
            </div >
        </>
    );
}
