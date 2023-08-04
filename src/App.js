
import './App.css';
import HeaderMain from './main/header/headerMain';
import HomeMain from './main/header/body/home/homeMain';
import Apartado from './components/calculadora/apartado';
import Projects from './main/header/body/projects/projects';
import Contact from './main/header/body/contact/contact';

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <HomeMain />
      <Apartado />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
