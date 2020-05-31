import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { login } from '../../util/firebaseFunctions'
// import { NavLink } from 'react-router-dom'

const LoginNavBar = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("")
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password)
            history.push("/")
        } catch (error) {
            
        }

    }

    return (
        <div className="loginHeader">
            <form id="loginForm" onSubmit={handleSubmit}>
                <h1 className="title" >facebook</h1>
                <input value={email} placeholder="Email or Phone" className="loginB" type="text" onChange={(e)=> setEmail(e.target.value)} />
                <input value={password} placeholder="Password" className="loginB" type="text" onChange={(e)=> setPassword(e.target.value)} />
                <button className="loginB" >log In</button>
            </form>  
        </div>
    )
}

export default LoginNavBar