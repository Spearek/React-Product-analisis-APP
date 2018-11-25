import React from 'react';
import './Switcher.css';
import SelectedItem from './SelectedItem/SelectedItem'

const switcher = (props) => {

    let switchList = props.list.map(product =>{
        return <SelectedItem 
            name={product.name}
            key={product.serialNum}
             />
    });

    return (
        <div className="products">
            <select onChange={props.changed} value={props.selectValue}>
              {switchList}
            </select>
        </div>
    )
}


export default switcher;