import React from 'react';
import API from '../../API'


export const numberInput = () => {
    return (
        <div className="numberInput">
            <label>How Many Barrels Are You Sending:</label>
            <input type="number" className="barrelQuantity" size="5" required/>
        </div>
    )
}


export const dropdownCountries = (props) => {
    return (

        <div className="dropdownCountriesMenu">
            <label for="dropdown-menu"> Country:</label>
            <div className="dropdown-menu">
                <a className="country" id={props.id}>{props.country}</a>
            </div>
        </div>

    )



}


export const shipPrice =(props) =>{
    return(
        <span className="displayShippingBarrelPrice" >{props.shippingPrice}</span>
    )
}


export const Submit =() => {
    return(
        <div className="submit">
            <button type="button" className="btn btn-primary">Submit</button>
        </div>
    )
}