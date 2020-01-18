import React from 'react';
import BarrelPrices from '../../API'
import BarrelType from '../../API'



export const numberInput2 = () => {
    return (
        <div className="numberInput2">
            <label>How Many Barrels Are You Sending:</label>
            <input type="number" className="barrelInput" size="5" required/>
        </div>
    )
}

export const dropdownBarrels = (props) => {
    return (
        <div className="dropdownBarrelMenu">
            <label for="dropdown-menu"> Pick A Barrel:</label>
            <div className="dropdown-menu">
                <a className="barrels" id={props.id}>{props.barrelType}</a>
            </div>
        </div>
    )
}

export const barrelPrice =(props) =>{

    return(
        <span className="displayBarrelPrice" >{props.barrelPrice}</span>
    )
}

export const Submit =() => {
    return(
        <div className="submit">
            <button type="button" className="btn btn-primary">Submit</button>
        </div>
    )
}

