import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from './components/footer';
import Home from "./pages/home";
import Products from "./pages/products";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
