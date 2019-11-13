import React,{useState} from 'react';
import axios from 'axios'

const Users = () => {
    const [user, setUser]=useState([])

    const getUsers = () => {
        axios
        .get('http://localhost:5200/api/users')
        .then(res => {
            console.log(res.data)
            setUser(res.data)
        })
        .catch(error => {
            // alert(error.response)
        })
    }
          

    return (
        <div>
            <h1>You have Logged in Successfully</h1>
            <button onClick={getUsers}>get users</button>
            {user.length > 0 && user.map(use => {
                return (
                    <h2>username: {use.username}</h2>
                )
            })}
        </div>
    );
}

export default Users;
