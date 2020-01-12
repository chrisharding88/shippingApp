import React from 'react';


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
                <a className="barrels" id="1">SJB Cardboard</a>
                <a className="barrels" id="2">SJB Plastic</a>
                <a className="barrels" id="3">Medium Cardboard</a>
                <a className="barrels" id="4">Medium Plastic</a>
            </div>
        </div>
    )
}

export const price2 =(props) =>{

    return(
        <span className="displayBarrelPrice" >{props.children}</span>
    )
}



