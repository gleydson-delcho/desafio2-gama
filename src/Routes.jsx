import { Switch, Route } from 'react-router-dom';
import Clientes from './pages/Clientes';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Store from './pages/Store';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/clientes" component={Clientes} />
      <Route exact path="/produtos" component={Produtos} />
      <Route exact path="/loja" component={Store} />
    </Switch>
  );
}