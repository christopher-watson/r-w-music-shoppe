import React from 'react';
import { MDBCardGroup, MDBContainer } from 'mdbreact';
import Record from '../components/Record';
import DB from "../img/ziggy.jpg";
import WT from "../img/wutang.jpg";
import OR from "../img/otis.jpg";

const OnSale = props => {
  return (
    <MDBContainer>
      <MDBCardGroup deck>
        <Record title='Ziggy Stardust' artist='David Bowie' text='A must own! On sale Now!' image={DB} price='19' click={props.click} id='5c9b9c1e348c09398819950b' />
        <Record title='36 Chambers' artist='Wu-Tang CLan' text='A must own! On sale Now!' image={WT} price='19' click={props.click} id='5c9b9c49348c09398819950d' />
        <Record title='Otis Redding' artist='Otis Redding' text='A must own! On sale Now!' image={OR} price='19' click={props.click}  id='5c9b9c39348c09398819950c' />
      </MDBCardGroup>
    </MDBContainer>
  )
}


export default OnSale;