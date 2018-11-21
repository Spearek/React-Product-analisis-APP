import React from 'react';
import './Switcher.css';

const switcher = () => {

    return (
        <div className="products">
            <select>
             <option value="product_1">Product 1</option>  
             <option value="product_2">Product 2</option>  
             <option value="product_3"> Product 3</option> 
             <option value="product_4"> Product 4</option> 
            </select>
        </div>
    )
}