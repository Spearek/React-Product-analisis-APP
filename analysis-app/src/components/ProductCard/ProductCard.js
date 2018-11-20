import React from 'react';


const product = (props) => {
    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            <img src="../../assets/products images/example_drive.jpg" />
            <p>{props.decription}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default productCard;