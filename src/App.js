
import Header from './header/Header';
import Main from './main/Main';
import GridImg from './grid/GridImg';
import Delivering from './delivering/Delivering';
import AffordablePricing from './affordablepricing/AffordablePricing';
import Footer from './footer/Footer';
import './App.css';

const App = () => {
  
  return (
    <div>
      <Header />
      <Main />
      <GridImg/>
      <Delivering/>
      <AffordablePricing/>
      <Footer/>
    </div>
  );
}

export default App;
