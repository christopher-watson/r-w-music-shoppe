// main react imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// containers
import Main from './Pages/Main';
import OnSale from './Pages/OnSale';
import Navbar from './components/Navbar'
import NewArrivals from './Pages/NewArrivals';

// css/images
import './App.css';

// backend integration
import API from "./utils/API";

// MAIN APP
class App extends Component{

  state = {
    userID: null,
    loggedIn: false,
    userInfo: null,
    defaultImage: 'https://res.cloudinary.com/yowats0n/image/upload/v1527687540/default_user.png',
    brubeck: '5c9b9ba2348c093988199509',
    sonic: '5c9b9bd0348c09398819950a',
    kv: '5c9b9b5f348c093988199508',
    bowie: '5c9b9c1e348c09398819950b',
    wutang: '5c9b9c49348c09398819950d',
    otis: '5c9b9c39348c09398819950c',
  };

  componentDidMount() {
    this.userCheck()
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  login = () => {
    API
      .login()
  }

  logout = () => {
    API
      .logout()
    this.setState({ loggedIn: false });
  }

  getUserInfo = (a) => {
    API
      .getUserInfo(a)
      .then(res => {
        console.log(res.data)
        this.setState({ userInfo: res.data })
      })
  }

  userCheck = () => {
    const userID = window.location.href.split('?=')[1]
    if(userID){
      console.log(userID)
      this.setState({ userID: userID, loggedIn: true })
      this.getUserInfo(userID)
    }
    else{
      console.log("👎🏽");
    }
  }

  checkProps = (e) => {
    console.log('this')
  }

  render() {
    return (
      <Router>
      <div className="main-container">
        <Navbar /> 
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/OnSale" component={OnSale} click={this.checkProps} />
          <Route exact path="/NewArrivals" component={NewArrivals} click={this.checkProps} />
          {/* <Route component={Main} /> */}
        </Switch>
      </div>
    </Router>
    )  
  }
} 


export default App;