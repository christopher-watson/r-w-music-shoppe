// main react imports
import React, { Component } from "react";
// components/utils
import Navbar from '../components/Navbar';
// import API from '../utils/API';

// images
// import BG from "../components/Images/bg.png";

// Main react component
class Main extends Component {
  // main component state
  state = {

  }

  // whent the component mounts to the DOM
  componentDidMount() {

  }

  // handle input change for state
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }


  // render method for Main
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-container">
          MAIN
        </div>
      </div>
    )
  }
}

export default Main;
