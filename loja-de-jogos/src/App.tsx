import { GlobalStyle } from './global/GlobalStyles';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SideBar />
    </>
  );
}


