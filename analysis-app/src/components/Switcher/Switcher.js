import React from 'react';
import './Switcher.css';
import SelectedItem from './SelectedItem/SelectedItem'

const switcher = (props) => {
   
    let switchList = props.list.map(product =>{
        return <SelectedItem
            name={product.name} />
    });

    return (
        <div className="products">
            <select>
              {switchList}
            </select>
        </div>
    )
}


export default switcher;