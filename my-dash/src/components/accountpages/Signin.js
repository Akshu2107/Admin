// LoginPage.js
import React from 'react';

const Signin = () => {

    return (
        <div className="sign-in-container">

            <h2>Sign In</h2>
            <form >
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />

                <button type="submit" className='sibtn'>Sign In</button>
            </form>

        </div>
    );
};

export default Signin;
