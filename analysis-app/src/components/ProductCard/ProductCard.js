import React from 'react';
import classes from './ProductCard.module.css';


const product = (props) => {

    let margin = Math.round((((props.salePrice - props.purchasePrice)/props.salePrice)*100) * 100) / 100;
    let currencyPurchase = Math.round(props.purchasePrice * props.currency.converter *100)/100;
    let currencySale = Math.round(props.salePrice * props.currency.converter *100)/100;;

    return (
        <div className={classes.Card}>
            <h3>{props.title}</h3>
            <img src={require('../../assets/products_images/'+ props.image)} alt='xxx' />
            <p>{props.description}</p>
            <div className={classes.Prices}>
                <p>Purchase price: {currencyPurchase} {props.currency.name}</p>
                <p>Margin: {margin}%</p>
                <p>Sale price: {currencySale} {props.currency.name}</p>
            </div>
        </div>
    )
}

export default product;