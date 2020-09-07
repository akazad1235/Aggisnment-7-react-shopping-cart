import React from 'react';
import './Cartinfo.css'
const Cartinfo = (props) => {

    const name =props.name
    const price =props.price
    const img =props.img
    return (
        <div className="cart-info">
            <div className="cart-left">
            <h5>{name}</h5>
            <p><strong>Price:</strong>${price}</p>
            </div>
            <div className="cart-right">
                <img  src={img} />
            </div>
   
        </div>
    );
};

export default Cartinfo;