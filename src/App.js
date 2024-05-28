import './App.css';
import Header from './components/header'; 
import Hero from './components/hero'; 
import Services from './components/services';
import USP from './components/usp';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Services/>
      <USP/>  
    </div>
  );
}

export default App;
