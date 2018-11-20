import React from 'react';
import './ProductCard.css';


const product = (props) => {

    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            <img src={require('../../assets/products_images/'+ props.image)} alt='xxx' />
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default product;