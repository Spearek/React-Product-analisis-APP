import React from 'react';

const item = (props) => {
    return (
        <option value = {props.name}>{props.name}</option>
    )
}

export default item;