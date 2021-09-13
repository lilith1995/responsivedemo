import { MainSection } from './components/Mainsection/mainsection';
import { TextSection } from './components/Textsection/textsection';
import { Footer } from './components/Footer/footer';

import './App.scss';

function App() {
  return (
    <div className="flex_container">
      <MainSection />
      <TextSection/>
      <Footer/>
      </div>
  );
}

export default App;
