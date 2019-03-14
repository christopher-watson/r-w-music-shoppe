import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from 'mdbreact';
import DB from "../img/ziggy.jpg";
import WT from "../img/wutang.jpg";


const OnSale = props => {
return (
<MDBContainer>
  <MDBCardGroup deck>
    <MDBCard xstyle={{ width: "22rem" }}>
      <MDBCardBody>
           <MDBCardTitle tag="h5">David Bowie</MDBCardTitle>
           <MDBCardImage className="img-fluid" src={DB} waves />
        <MDBCardText>
Ziggy Stardust and the Spiders From Mars
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter tag="h5">
      <a href ="#" target="_blank" download="Dental">Add to Cart </a>
      </MDBCardFooter>
    </MDBCard>


    <MDBCard cascade>
      <MDBCardBody cascade>
        <MDBCardTitle  tag="h5">Wu Tang</MDBCardTitle>
        <MDBCardImage cascade className="img-fluid" src={WT} waves />
        <MDBCardText>
        36 Chambers
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter tag="h5">
      <a> 36 Chambers </a>
      </MDBCardFooter>
    </MDBCard>
  </MDBCardGroup>
 
 
 
  </MDBContainer>
    );
  };


export default OnSale;

