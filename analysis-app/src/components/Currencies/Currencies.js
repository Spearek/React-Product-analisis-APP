import React from 'react';


const currencies = () => {


    return(
        <form>

            <div className="radio">
                <label>
                 <input type='radio' value="USD" ></input>USD
                </label>
            </div>
            
            <div className="radio">
                <label>
                <input type='radio' value="EUR" ></input>EUR
                </label>
            </div>

            <div className="radio">
                <label>
                    <input type='radio'value="PLN"></input>PLN
                </label>
            </div>   

        </form>
     
        

        

    )
}

export default currencies;