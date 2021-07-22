import React from 'react';
import Styles from './styles.module.scss';

type HeaderProps = {
    title: string;
    icon: string;
    subtitle: string;
}

const Header = (props: HeaderProps) => {
    return (
        <div className={Styles.containerHeader} >
                <a href="/">
                    <img src={props.icon} alt="logo" />
                </a>
            <header className={Styles.header}>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>               
            </header>
        </div>
    );
}

export default Header;