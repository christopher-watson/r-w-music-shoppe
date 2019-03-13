import React, { Component } from "react";
import { NavLink } from "react-router-dom";


// Navbar component
class Navbar extends Component {
  // Navbar state
  state = {



    
  }

  // when the componenet mounts to the DOM
  componentDidMount(){

  }

  // render method for Navbar
  render () {
    return (
     <nav>
    <div className="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>


    )
  }
}

export default Navbar;

