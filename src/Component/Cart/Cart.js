import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cartinfo from '../CartInfo/Cartinfo';


const Cart = (props) => {
    //console.log(props);
    const cart = props.cart;
    const totalPrice = cart.reduce((total, pro)=> total+pro.price, 0);
    // let totalPrice = 0
    // for (let i = 0; i < cart.length; i++) {
    //     const element = cart[i];
    //     totalPrice=totalPrice+element.price
        
    // }
    // console.log(totalPrice);
   
    return (
        <div className="cart">
            <h3>Total Item: <FontAwesomeIcon icon={faShoppingCart}/> <span className='text-success'>{cart.length}</span></h3>
             <p><storng>Total Price:</storng>${totalPrice}</p>
            <div>
                {
                    cart.map(sort => <Cartinfo name={sort.name} price={sort.price} img={sort.img}></Cartinfo>)
                }
               
            </div>


             <button className="btn btn-success checkout-btn ">Checkout</button>
        </div>
    );
};

export default Cart;