import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../users/usersSlice'
import { login } from '../../util/firebaseFunctions'
// import { NavLink } from 'react-router-dom'

const LoginNavBar = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("")
    const history = useHistory();
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await login(email, password)
            console.log("you have succesfully logged in");
            dispatch(addUser(res.user.uid));
            history.push("/home")
            
        } catch (error) {
            setErrMessage(error.message)
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
            {errMessage}
        </div>
    )
}

export default LoginNavBar