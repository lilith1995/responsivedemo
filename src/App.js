import { Footer } from './components/Footer/footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="showcase">
        <img src="https://www.freedomdebtrelief.com/next-assets/alejandra_hero_1599x531.jpg" className="mainphoto" alt="woman"/>
        <div className="slider">
        <h2 className="maintext">Get Credit Card Debt Help</h2>
        <h2 className="secondtext">From America's top debt relief company</h2>
          <img className="amountpic" src="photo.png" alt="amount" />
        </div>
      </div>
      <Footer/>
      </div>
  );
}

export default App;
