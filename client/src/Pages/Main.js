// main react imports
import React, { Component } from "react";
import {MDBMask, MDBIcon, MDBttn, MDBButton, MDBJumbotron, MDBView, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from 'mdbreact';
import Records from "../img/records.jpeg";


// components/utils

//import Navbar from '../components/Navbar';
// import Navbar from '../components/Navbar';

// import API from '../utils/API';

// images
// import BG from "../components/Images/bg.png";

// // Main react component
// class Main extends Component {
//   // main component state
//   state = {

//   }

//   // whent the component mounts to the DOM
//   componentDidMount() {

//   }

//   // handle input change for state
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     })
//   }


const Main = props => {
  return (

    <MDBJumbotron center>
      <MDBContainer>
        <h1 className="text-center"><strong>Welcome to R & W Music Shoppe</strong></h1>
        <h2 className="text-center">Definitely better than Amazon</h2>
        <MDBBtn className="btn-center" href="/NewArrivals"> Our New Arrivals!</MDBBtn>
      </MDBContainer>
    </MDBJumbotron>
  )

}

  

export default Main;
