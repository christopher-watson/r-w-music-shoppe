import React, { Compomdbnent } from "react";
import { MDBIcon, MDBTooltip, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from 'mdbreact';
import TF from "../img/davebrubeck.jpg";
import SB from "../img/sonics.jpg";
import KV from "../img/kvelertak.jpg";

const NewArrivals = props => {
    return (
     
        <MDBContainer>
        <MDBCardGroup deck>
          
                  <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
                      <MDBCardImage cascade top src={KV}
                      waves />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>
                        <a href="#!"><strong> Kvelertak </strong></a>
                      </MDBCardTitle>
                      <MDBCardTitle tag="h5">
                        <strong>Kvelertak </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                       All the way from Norway! 
                      </MDBCardText>
                      <MDBCardFooter>
                        <span className="float-left">25$</span>
                        <span className="float-right">
                        <MDBIcon icon="cart-plus" />
                          <MDBTooltip placement="top" componentClass="cart-plus" tag="a" component="i" tooltipContent="Added to Cart" />
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
      
      
      <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
                      <MDBCardImage cascade top src={TF}
                      waves />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>
                        <a href="#!"><strong>Take Five</strong></a>
                      </MDBCardTitle>
                      <MDBCardTitle tag="h5">
                        <strong>Dave Brubeck Quartet</strong>
                      </MDBCardTitle>
                      <MDBCardText>
                       The jazz album for any occassion!
                      </MDBCardText>
                      <MDBCardFooter>
                        <span className="float-left">25$</span>
                        <span className="float-right">
                        <MDBIcon icon="cart-plus" />
                          <MDBTooltip placement="top" componentClass="cart-plus" tag="a" component="i" tooltipContent="Added to Cart" />
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
      
      
      
      
                  <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
                      <MDBCardImage cascade top src={SB}
                      waves />
                    <MDBCardBody cascade className="text-center">
                     
                      <MDBCardTitle>
                        <a href="#!"><strong>BOOM!</strong></a>
                      </MDBCardTitle>
                   <MDBCardTitle tag="h5">
                       <strong>The Sonics</strong> 
                      </MDBCardTitle>  
                       <MDBCardText>
                       The classic Garage Rock band with a repress of their classic album!
                      </MDBCardText>
                      <MDBCardFooter>
                        <span className="float-left">25$</span>
                        <span className="float-right">
                        <MDBIcon icon="cart-plus" />
                          <MDBTooltip placement="top" componentClass="cart-plus" tag="a" component="i" tooltipContent="Added to Cart" />
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCardGroup>
      
        </MDBContainer>
          );
        }
        

export default NewArrivals; 