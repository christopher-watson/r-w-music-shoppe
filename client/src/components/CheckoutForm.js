import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    if(token){
      let response = await fetch("/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
      });
      console.log(response)
      if (response.ok) console.log("Purchase Complete!")
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>
    return (
      <div className="checkout">
        <p className="checkout-text">Complete Purchase</p>
        <CardElement />
        <button className="checkout-button" onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);