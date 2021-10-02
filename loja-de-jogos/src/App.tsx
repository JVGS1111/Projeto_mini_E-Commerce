import { GlobalStyle } from './global/GlobalStyles';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Home } from './pages/Home';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SideBar />
      <Home />
    </>
  );
}


