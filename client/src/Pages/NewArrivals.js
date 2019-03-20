import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from 'mdbreact';


const NewArrivals = props => {
    return (


// <!--Card--></div>
<div class="card card-cascade card-ecommerce wider">

  {/* <!--Card image--> */}
  <div class="view view-cascade overlay">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(2).jpg"
      alt=""/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>
  {/* <!--/.Card image--> */}

  {/* <!--Card content--> */}
  <div class="card-body card-body-cascade text-center">
    {/* <!--Category & Title--> */}
    <h5>Shoes</h5>
    <h4 class="card-title"><strong><a href="">Product name</a></strong></h4>

    {/* <!--Description--> */}
    <p class="card-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
      eveniet ut et voluptates.</p>

    {/* <!--Card footer--> */}
    <div class="card-footer">
      <span class="float-left">49$</span>
      <span class="float-right">
        <a data-toggle="tooltip" data-placement="top" title="Share"><i class="fas fa-share-alt mr-3"></i></a>
        <a class="active" data-toggle="tooltip" data-placement="top" title="Added to Wishlist"><i class="fas fa-heart"></i></a>
      </span>
    </div>

  </div>
  {/* <!--/.Card content--> */}

</div>

    );
    };


export default NewArrivals; 