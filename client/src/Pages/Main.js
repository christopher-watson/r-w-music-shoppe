// main react imports
import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from 'mdbreact';
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


      <MDBRow>
      <MDBCol>
        <MDBCard wide>
        <MDBCardTitle><strong>Welcome to R-W Music Shoppe</strong></MDBCardTitle>
          <MDBCardImage cascade className="img-fluid" src={Records} />
          <MDBCardBody cascade>
            
            <MDBCardText>Enjoy a refreshing mix of classic albums on the only format that matters!</MDBCardText>
            <MDBBtn href="/NewArrivals">Our main collection</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
           </MDBRow>
  )
}

export default Main;
