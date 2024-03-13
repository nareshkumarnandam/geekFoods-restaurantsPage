
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
