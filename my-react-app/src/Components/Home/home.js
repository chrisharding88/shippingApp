import React from 'react'

const Home = ()  =>{
    return (
        <div>
            <div className ="buttons">
                <button type = "button" className="btn btn-primary" to="/ShippingPage" >Shipping</button>
                <button type = "button" className="btn btn-primary"to="/BarrelPage" >Purchase Barrel</button>
            </div>
        </div>
    )
}

export default Home;
