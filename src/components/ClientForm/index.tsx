import React, { FormEvent, ReactNode } from 'react';
import { useState, createContext } from 'react';
import Styles from './styles.module.scss';

interface ClientContextData {
    client: {
        id: number;
        name: string;
        email: string;
        fone1: string;
        fone2?: string;
        endereco: string;
    }
}

type FormValues = {
    id: number;
    name: string;
    email: string;
    fone1: string;
    fone2?: string;
    endereco: string;
}

interface ClientProviderProps {
    children: ReactNode;
}

export const ClientContext = createContext({} as ClientContextData);

export default function ClientFormProvider({ children }: ClientProviderProps): JSX.Element {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [fone1, setFone1] = useState('');
    const [fone2, setFone2] = useState('');
    const [endereco, setEndereco] = useState('');

    const clientData = JSON.parse(String(localStorage.getItem('ClientData'))) || [];

    const initialValues = () => {
        setName('');
        setEmail('');
        setFone1('');
        setFone2('');
        setEndereco('');
    }

    const formValues: FormValues = {
        id: clientData.length + 1,
        name,
        email,
        fone1,
        fone2,
        endereco
    }

    const checkValues =
        formValues.name.trim() === '' || formValues.email.trim() === '' ||
        formValues.fone1.trim() === '' || formValues.endereco.trim() === '';

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (checkValues) {
            alert('Erro: Um ou mais campos estão vazios!')
        } else {
            console.log(formValues);
            clientData.push(formValues);
            localStorage.setItem('ClientData', JSON.stringify(clientData));
            alert('Seus dados foram salvos');
            initialValues();
        }
    }

    return (
        <>
            <div className={Styles.container} >
                <form className={Styles.form} onSubmit={handleSubmit} >
                    <h1>Adicione seus clientes aqui</h1>
                    <fieldset>
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" value={name} onChange={e => { setName(e.target.value) }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" value={email} onChange={e => { setEmail(e.target.value) }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="fone1">Telefone 1:</label>
                        <input type="text" value={fone1} onChange={e => { setFone1(e.target.value) }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="fone2">Telefone 2:</label>
                        <input type="text" value={fone2} onChange={e => { setFone2(e.target.value) }} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" value={endereco} onChange={e => { setEndereco(e.target.value) }} />
                    </fieldset>
                    <button type="submit" >Salvar</button>
                </form>
            </div >
        
            <ClientContext.Provider value={{
                client: formValues
            }}>
                {children}
            </ClientContext.Provider>
        </>

    );
}