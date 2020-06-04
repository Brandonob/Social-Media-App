import React, { useState } from 'react';
import axios from 'axios'
import { signUp } from '../../util/firebaseFunctions'


const SignUpForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // debugger
            let res = await signUp(email, password)
            await axios.post("/users/addUser", {
                id: res.user.uid,
                password: password,
                first_name: firstName,
                last_name: lastName,
                email_address: email,
                profile_pic_url: `data:image/png;base64,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`
              });
              setErrMessage("Thank you for signing up. Redirecting!");
            
        } catch (error) {
            setErrMessage(error.message)
        }
    }


    return (
        <div className="signupDiv">
            <h2>Create a New Account</h2>
            <p>It's quick and easy.</p>

            <form className="signupForm" onSubmit={handleSubmit}>
                <input id="A" value={firstName} type="text" placeholder="First name" onChange={(e)=> setFirstName(e.target.value)} />
                <input id="B" value={lastName} type="text" placeholder="Last name" onChange={(e)=> setLastName(e.target.value)} />
                <input id="C" value={email} type="text" placeholder="Mobile number or email" onChange={(e)=> setEmail(e.target.value)}/>
                <input id="D" value={password} type="text" placeholder="New password" onChange={(e)=> setPassword(e.target.value)}/>
                <h5>Birthday</h5>
                <h5>Gender</h5>
                <button>Sign Up</button>
            </form>
            {errMessage}
        </div>
    )
}

export default SignUpForm;
