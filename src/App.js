
import './App.css';
import HeaderMain from './main/header/headerMain';
import HomeMain from './main/header/body/home/homeMain';
import AboutMe from './main/header/body/aboutMe/aboutMe';
import Education from './main/header/body/education/education';
import Skills from './main/header/body/skills/skills';
import Projects from './main/header/body/projects/projects';
import Contact from './main/header/body/contact/contact';

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <HomeMain />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
