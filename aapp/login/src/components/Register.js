import React,{useEffect, useState} from 'react';
import axios from 'axios'
import {Route, NavLink} from 'react-router-dom'


const Register = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleChange = e=> {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit =e => {
        e.preventDefault();
        const {username, password} = user;
        axios.post('http://localhost:5555/api/auth/register', user)
        .then(res => {
            props.history.push('/Login');
        })
        .catch(err => {

        })
    }

    return (
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="push-in">
        <div className="input-field">
        <label htmlFor="username">Username</label>
            <input
                type="text"
                className="input-field"
                onChange={handleChange}
                value={user.username}
                name="username"
            />
        </div>
        <div className="input-field">
        <label htmlFor="password">Password</label>
        <input
            type="text"
            className="input-field"
            onChange={handleChange}
            value={user.password}
            name="password"
        />

        </div>
        <button className="waves-effect waves-light btn">Register</button> 
    </form>
    </>
    );
}

export default Register;
