import { GlobalStyle } from './global/GlobalStyles';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Home } from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ProductPage } from './pages/ProductPage/ProductPage';

export function App() {
  return (
    <Router>
      <GlobalStyle />

      <Header />
      <SideBar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/product/:id'>
          <ProductPage />
        </Route>

      </Switch>

    </Router >
  );
}


