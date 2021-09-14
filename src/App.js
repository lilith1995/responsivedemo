import { MainSection } from './components/Mainsection/mainsection';
import { TextSection } from './components/Textsection/textsection';
import { Footer } from './components/Footer/footer';

import './App.scss';

function App() {
  return (
    <div className="flex_container">
      <div className="sectionone"><MainSection /></div>
      <div className="sectiontwo"><TextSection/></div>
      <div className="sectionthird"><Footer/></div>
      </div>
  );
}

export default App;
