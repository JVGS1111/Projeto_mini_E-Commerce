import { GlobalStyle } from './global/GlobalStyles';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Home } from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Pagina404 } from './pages/404/404';
import { Marca } from './pages/Marca'
import { ProductContextData } from './hook/ProductContext';

export function App() {
  return (
    <Router>
      <GlobalStyle />

      <Header />
      <SideBar />
      <ProductContextData>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/product/:id'>
            <ProductPage />
          </Route>

          <Route exact path='/marca/:id'>
            <Marca />
          </Route>

          <Route>
            <Pagina404 />
          </Route>

        </Switch>
      </ProductContextData>

    </Router >
  );
}


