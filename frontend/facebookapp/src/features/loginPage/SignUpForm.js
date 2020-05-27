import React from 'react'

const SignUpForm = () => {
    return (
        <div>
            <h2>Create a New Account</h2>
            <p>It's quick and easy.</p>

            <form>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Mobile number or email" />
                <input type="text" placeholder="New password" />
                <h5>Birthday</h5>
                <h5>Gender</h5>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
