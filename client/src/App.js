// main react imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// containers
import Main from './Pages/Main';
import OnSale from './Pages/OnSale';
import Navbar from './components/Navbar'
<<<<<<< HEAD
import NewArrivals from './Pages/NewArrivals';
=======
import Cart from './components/Modal/Cart'
>>>>>>> c1ec43a5191eb5a360700bdde4471e7a29d3976a


// css/images
// import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div className="main-container">
      <Navbar/> 
      {/* <Cart /> */}
      <Switch>
        <Route exact path="/Main" component={Main} />
        <Route exact path="/OnSale" component ={OnSale}/>
        <Route exact path="/NewArrivals" component ={NewArrivals}/>

      </Switch>
    </div>
  </Router>
);
export default App;
