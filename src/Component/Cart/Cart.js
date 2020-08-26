import React from 'react';
import './Cart.css'

const Cart = (props) => {
    //console.log(props);
    const cart = props.cart;
    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalPrice=totalPrice+element.price
        
    }
    console.log(totalPrice);
    return (
        <div style={{border:"1px solid gray"}}>
            <h3>total Item: {cart.length}</h3>
             <p><storng>Total Price:</storng>${totalPrice}</p>
             <button className="btn btn-success wd ">Checkout</button>
        </div>
    );
};

export default Cart;