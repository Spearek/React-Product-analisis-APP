import React from 'react';


const currencies = (props) => {


    return(
        <form>

            <div className="radio">
                <label>
                 <input type='radio' value="USD" onChange={props.changed} checked={props.currencies[0].active}></input>USD
                </label>
            </div>
            
            <div className="radio">
                <label>
                <input type='radio' value="EUR" onChange={props.changed} checked={props.currencies[1].active} ></input>EUR
                </label>
            </div>

            <div className="radio">
                <label>
                    <input type='radio'value="PLN" onChange={props.changed} checked={props.currencies[2].active} ></input>PLN
                </label>
            </div>   

        </form>
     
        

        

    )
}

export default currencies;