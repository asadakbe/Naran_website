import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import './css/naran.css'
import Home from './view/Home'
import Footer from './common/Footer';
import SideIcon from './common/SideIcon';

function App() {
  return (
    <>
    <header>
        <Header />
    </header>

    <Home />

    <footer>
      <Footer />
    </footer>

    <SideIcon />
   </>
  );
}

export default App;
