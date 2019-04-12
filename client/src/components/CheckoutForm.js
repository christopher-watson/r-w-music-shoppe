import React, {Component, useContext} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { MDBBtn } from 'mdbreact';
import MyContext from '../App';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false, };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    this.click()
    let {token} = await this.props.stripe.createToken({name: "Name"});
    if(token){
      let response = await fetch("/secure/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
      })
      console.log(response)
      if (response.ok) console.log("Purchase Complete!")
    }
  }

  click = () => {
    console.log('CLICK')
    this.setState({ clicked: true })
    // const thisContext = useContext(MyContext)
    // thisContext.click()
  }


  render() {
    const hideCheck = {
      opacity: 0,
    }

    const showCheck = {
      opacity: 1,
    }

    if (this.state.complete) return <h1>Purchase Complete</h1>
    return (
      // <MyContext.Consumer>
      //   {({ clicked }) => (
        <div className="checkout">
          <p className="checkout-text">Complete Purchase</p>
          <CardElement />
          <div className="below-card">
            <div className="check-mark" style={ this.state.clicked ? showCheck : hideCheck }>
              <i class="fas fa-dollar-sign"></i>
            </div>
            <div className="checkout-button-div">
              <MDBBtn className="checkout-button" onClick={this.submit}>Purchase</MDBBtn>
            </div>
          </div>
        </div>
      //   )}
      // </MyContext.Consumer>
    );
  }
}

export default injectStripe(CheckoutForm);