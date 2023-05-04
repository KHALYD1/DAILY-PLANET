import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import News from './components/News';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App" >
      <Navbar />
      < Hero />
      < News/>
      <header className="App-header">
      <Aboutus /> 
      </header>
      <Footer />
    </div>
  );
}

export default App;
