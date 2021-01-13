import logo from './logo.svg';
import './App.css';
import './scss/main.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    <div>
      <header >
          <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
      </main>
    </div>
  );
}

export default App;
