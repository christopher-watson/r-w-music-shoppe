import React, { Compomdbnent } from "react";
import { MDBIcon, MDBTooltip, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from 'mdbreact';


const NewArrivals = props => {
    return (
     
            <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
              <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(2).jpg"
                waves />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle tag="h5">
                  Category
                </MDBCardTitle>
                <MDBCardTitle>
                  <a href="#!"><strong>Product name</strong></a>
                </MDBCardTitle>
                <MDBCardText>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                  eveniet ut et voluptates.
                </MDBCardText>
                <MDBCardFooter>
                  <span className="float-left">19$</span>
                  <span className="float-right">
                  <MDBIcon icon="cart-plus" />
                    <MDBTooltip placement="top" componentClass="cart-plus" tag="a" component="i" tooltipContent="Added to Cart" />
                  </span>
                  
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          );
        }
        

export default NewArrivals; 