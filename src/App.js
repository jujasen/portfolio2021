import './App.css';
import './scss/main.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Copyright from './components/elements/Copyright'


function App() {
  return (
    <div>
      <header >
          <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <Projects></Projects>
        <About></About>
        <Skills></Skills>
        <Contact></Contact>
        <Copyright></Copyright>
      </main>
    </div>
  );
}

export default App;
