import React, { useState } from 'react';
import courseInfo from '../../fakeData/CourseInfo';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

const  Shop = () => {

    const limits = courseInfo.slice(0, 10)

    const [product, setProduct] = useState(limits);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        // console.log('product added', product);
          const newCart = [...cart, product];
          setCart(newCart);
          
     }
    
    
    return (
        <div className="shop-layout">
            <div className="product-container">
                
                {
                product.map((pd ) => <Product product={pd} handleAddProduct={handleAddProduct}></Product>)
              }
            </div>
            <div className='cart-cotainer'>
              <Cart cart={cart}></Cart>
            </div>
            

        </div>
    );
};

export default Shop;