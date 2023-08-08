import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Contact2 from './components/Contact2';
import Contact3 from './components/Contact3';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Timeline/>
      <Projects />
      <Contact3 />
      <Footer />
    </div>
  );
}

export default App;
