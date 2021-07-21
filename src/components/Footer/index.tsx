import { FaHeart, FaRegCopyright } from 'react-icons/fa'
import Styles from './styles.module.scss';

export default function Footer() {
    return (
        <footer className={Styles.footer} >
            <span>
                Desenvolvido com <span><FaHeart color="#a83f39" size="11" /></span> por
                <strong> Gleydson</strong>
            </span>
            <p><FaRegCopyright size="11" />Todos os direitos reservados.</p>
        </footer>
    )
}