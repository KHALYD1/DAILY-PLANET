import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';


function App() {
  return (
    <div className="App" >
      <Navbar />
      <header className="App-header">
      <Aboutus /> 
      </header>
      <Footer />
    </div>
  );
}

export default App;
