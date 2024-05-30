import './App.css';
import Header from './components/header'; 
import Hero from './components/hero'; 
import Services from './components/services';
import USP from './components/usp';
import Counter from './components/counter';
import About from './components/about';
import Products from './components/products';
import Getintouch from './components/getintouch';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Services/>
      <Counter/>
      <About/>
      <USP/>
      <Products/> 
      <Getintouch/>
    </div>
  );
}

export default App;
