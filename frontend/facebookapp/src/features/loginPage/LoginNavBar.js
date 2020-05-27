import React from 'react'
// import { NavLink } from 'react-router-dom'

const loginNavBar = () => {
    return (
        <div className="loginHeader">
            <form id="loginForm">
                <h1>facebook</h1>
                <input className="loginB" type="text" />
                <input className="loginB" type="text" />
                <button className="loginB" >login</button>
            </form>  
        </div>
    )
}

export default loginNavBar
