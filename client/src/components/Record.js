import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter } from 'mdbreact';
import CartButton from './CartButton'

const Record = props => {
  return (
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
      <MDBCardImage cascade top src={props.image} waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle>
          <a href="#!"><strong>{props.title}</strong></a>
        </MDBCardTitle>
        <MDBCardTitle tag="h5">
          <strong>{props.artist}</strong>
        </MDBCardTitle>
        <MDBCardText>
          {props.text}
        </MDBCardText>
        <MDBCardFooter>
        <span className="float-left">${props.price}</span>
        <span className="float-right">
        {/* <MDBIcon icon="cart-plus" onClick={() => console.log('this')} id={props.id} /> */}
        {/* <MDBTooltip placement="top" componentClass="cart-plus" tag="a" component="i" tooltipContent="Added to Cart" /> */}
        <CartButton id={props.id} />
        </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
      );
  };


export default Record;