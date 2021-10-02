import { GlobalStyle } from './global/GlobalStyles';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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

      </Switch>

    </Router >
  );
}


