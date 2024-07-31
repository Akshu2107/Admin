import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const respo = await fetch("http://localhost:8000/user/signup", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-type": "application/JSON"
            }
        })
        const data = await respo.json();
        console.log(data);
    }
    return (
        <div className="sign-up-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="name" id="name" name="name" onChange={handleForm} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleForm} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleForm} />

                <button type="submit" className='subtn'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
