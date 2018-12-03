import React from 'react';
import  classes from'./Switcher.module.css';
import SelectedItem from './SelectedItem/SelectedItem'

const switcher = (props) => {

    let switchList = props.list.map(product =>{
        return <SelectedItem 
            name={product.name}
            key={product.serialNum}
             />
    });

    return (
        <div className={classes.products}>
            <select onChange={props.changed} value={props.selectValue}>
              {switchList}
            </select>
        </div>
    )
}


export default switcher;