
import Header from './header/Header';
import Main from './main/Main';
import GridImg from './grid/GridImg';
import Delivering from './delivering/Delivering';
import Footer from './footer/Footer';
import CardItem from './card/CardItem';
import './App.css';


const App = () => {
  
  return (
    <div>
      <Header />
      <Main />
      <GridImg/>
      <Delivering/>
      <CardItem/>
      <Footer/>
    </div>
  );
}

export default App;
