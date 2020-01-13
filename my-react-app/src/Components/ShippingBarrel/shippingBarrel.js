import React from 'react';


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
                <a className="country" id="0">Anguilla</a>
                <a className="country" id="1">Antigua</a>
                <a className="country" id="2">Barbados</a>
                <a className="country" id="3">Belize</a>
                <a className="country" id="4">Dominica</a>
                <a className="country" id="5">Grenada</a>
                <a className="country" id="6">Guyana</a>
                <a className="country" id="7">Jamaica / Kingston</a>
                <a className="country" id="8">Jamaica / Montego Bay</a>
                <a className="country" id="9">St.Croix</a>
                <a className="country" id="10">St.Lucia</a>
                <a className="country" id="11">St.Vincent</a>
                <a className="country" id="12">Tobago</a>
                <a className="country" id="13">Trinidad / Port of Spain</a>
                <a className="country" id="14">Trinidad / Port of Lisas</a>
            </div>
        </div>

    )



}


export const price1 =(props) =>{
    return(
        <span className="displayShippingBarrelPrice" >{props.children}</span>
    )
}


export const submit =() => {
    return(
        <div className="submit">
            <button type="button" className="btn btn-primary">Submit</button>
        </div>
    )
}