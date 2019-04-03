import React, { Component } from 'react';
import { MDBIcon, MDBTooltip } from 'mdbreact';


const CartButton = props => class extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        console.log(this.id)
        this.setState({
            recordID: this.id
        })
    }
    render() {
        return (
            <div>
                <MDBIcon icon="cart-plus" onClick={this.handleClick} id={props.id} />
                <MDBTooltip placement="top" componentClass="cart-plus" tag="a" component="i" tooltipContent="Added to Cart" />
            </div>
        )
    }
}
export default CartButton;

