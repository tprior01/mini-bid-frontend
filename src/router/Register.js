import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';


async function registerUser(credentials) {
  return fetch('http://mini-bid-api.herokuapp.com/usr/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 } 

export default function Register() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await registerUser({
      email,
      username,
      password
    });
    navigate("/");
  }

  return(
    <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            <p>Email</p>
            <input type="text" onChange={e => setEmail(e.target.value)}/>
          </label>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUsername(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
    </div>
  )
}