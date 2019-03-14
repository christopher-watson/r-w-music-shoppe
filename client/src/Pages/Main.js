// main react imports
import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from 'mdbreact';

// components/utils
//import Navbar from '../components/Navbar';
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
     
          <MDBCardGroup>
            <MDBCard>
              <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="MDBCard image cap" top hover
                overlay="white-slight" />
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn color="primary" size="md">
                  read more
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
 </MDBCardGroup>
 
    )
  }
}

export default Main;
