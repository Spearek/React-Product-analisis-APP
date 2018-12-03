import React from 'react';
import './ProductCard.css';


const product = (props) => {

    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            <img src={require('../../assets/products_images/'+ props.image)} alt='xxx' />
            <p>{props.description}</p>
            <div className="Prices">
                <p>Current purchase price: {props.purchacePrice}</p>
                <p>Current sale price: {props.salePrice}</p>
            </div>
        </div>
    )
}

export default product;