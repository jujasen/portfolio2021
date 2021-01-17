import './App.css';
import './scss/main.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'
import About from './components/About'


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
      </main>
    </div>
  );
}

export default App;
