import React from 'react';
import './ProductCard.css';


const product = (props) => {

    let margin = Math.round((((props.salePrice - props.purchacePrice)/props.salePrice)*100) * 100) / 100;

    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            <img src={require('../../assets/products_images/'+ props.image)} alt='xxx' />
            <p>{props.description}</p>
            <div className="Prices">
                <p>Current purchase price: {props.purchacePrice}</p>
                <p>Margin: {margin}%</p>
                <p>Current sale price: {props.salePrice}</p>
            </div>
        </div>
    )
}

export default product;