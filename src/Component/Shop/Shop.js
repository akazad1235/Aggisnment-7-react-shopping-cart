import React, { useState } from 'react';
import courseInfo from '../../fakeData/CourseInfo';

const  Shop = () => {
    const [product, setProduct] = useState(courseInfo);

    
    return (
        <div>
            <h1>Product: {product.length}/h1>
        </div>
    );
};

export default Shop;