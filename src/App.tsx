import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Routes from './Routes';
import './styles/global.scss';

export default function App(props: any) {
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
