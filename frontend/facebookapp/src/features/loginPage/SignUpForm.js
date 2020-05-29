import React, { useState } from 'react';
import { signUp } from '../../util/firebaseFunctions'


const SignUpForm = () => {
    return (
        <div className="signupDiv">
            <h2>Create a New Account</h2>
            <p>It's quick and easy.</p>

            <form className="signupForm">
                <input id="A" type="text" placeholder="First name" />
                <input id="B" type="text" placeholder="Last name" />
                <input id="C" type="text" placeholder="Mobile number or email" />
                <input id="D" type="text" placeholder="New password" />
                <h5>Birthday</h5>
                <h5>Gender</h5>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
