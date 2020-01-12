import React from 'react';


export const numberInput = () => {
    return (
        <div className="numberInput">
            <label>How Many Barrels Are You Sending:</label>
            <input type="number" className="barrelInput" size="5" required/>
        </div>
    )
}


export const dropdownCountries = (props) => {
    return (

        <div className="dropdownCountriesMenu">
            <label for="dropdown-menu"> Country:</label>
            <div className="dropdown-menu">
                <a className="country" id="1">Anguilla</a>
                <a className="country" id="2">Antigua</a>
                <a className="country" id="3">Barbados</a>
                <a className="country" id="4">Belize</a>
                <a className="country" id="5">Dominica</a>
                <a className="country" id="6">Grenada</a>
                <a className="country" id="7">Guyana</a>
                <a className="country" id="8">Jamaica / Kingston</a>
                <a className="country" id="9">Jamaica / Montego Bay</a>
                <a className="country" id="10">St.Croix</a>
                <a className="country" id="11">St.Lucia</a>
                <a className="country" id="12">St.Vincent</a>
                <a className="country" id="13">Tobago</a>
                <a className="country" id="14">Trinidad / Port of Spain</a>
                <a className="country" id="15">Trinidad / Port of Lisas</a>
            </div>
        </div>

    )



}


export const price1 =(props) =>{
    return(
        <span className="displayShippingBarrelPrice" >{props.children}</span>
    )
}