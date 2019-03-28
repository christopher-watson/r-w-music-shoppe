// main react imports
import React from "react";
import {MDBJumbotron, MDBBtn, MDBContainer } from 'mdbreact';
import Record from '../components/Record';
import DB from "../img/ziggy.jpg";
import WT from "../img/wutang.jpg";
import OR from "../img/otis.jpg";

const Main = props => {
  return (

    <MDBJumbotron center>
      <MDBContainer>
        <h1 className="text-center"><strong>Welcome to R & W Music Shoppe</strong></h1>
        <h2 className="text-center">Definitely better than Amazon</h2>
        <MDBBtn className="btn-center" href="/NewArrivals"> Our New Arrivals!</MDBBtn>
        <Record title='Ziggy Stardust' artist='David Bowie' text='A must own! On sale Now!' image={DB} price='19$' />

      </MDBContainer>
    </MDBJumbotron>
  )

}

  

export default Main;
