import React from 'react';
import { MDBIcon, MDBTooltip, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from 'mdbreact';
import DB from "../img/ziggy.jpg";
import WT from "../img/wutang.jpg";
import OR from "../img/otis.jpg";


const OnSale = props => {
return (
<MDBContainer>
  <MDBCardGroup deck>
    
            <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
                <MDBCardImage cascade top src={DB}
                waves />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>
                  <a href="#!"><strong>Ziggy Stardust</strong></a>
                </MDBCardTitle>
                <MDBCardTitle tag="h5">
                  <strong>David Bowie</strong>
                </MDBCardTitle>
                <MDBCardText>
                 A must own! On sale Now!
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


<MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
                <MDBCardImage cascade top src={OR}
                waves />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>
                  <a href="#!"><strong>Otis Redding</strong></a>
                </MDBCardTitle>
                <MDBCardTitle tag="h5">
                  <strong>Otis Redding</strong>
                </MDBCardTitle>
                <MDBCardText>
                 A must own! On sale Now!
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








            <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
                <MDBCardImage cascade top src={WT}
                waves />
              <MDBCardBody cascade className="text-center">
               
                <MDBCardTitle>
                  <a href="#!"><strong>36 Chambers</strong></a>
                </MDBCardTitle>
             <MDBCardTitle tag="h5">
                 <strong>Wu-Tang Clan</strong> 
                </MDBCardTitle>  
                 <MDBCardText>
                 A must own! On sale Now!
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
            </MDBCardGroup>

  </MDBContainer>
    );
  };


export default OnSale;

