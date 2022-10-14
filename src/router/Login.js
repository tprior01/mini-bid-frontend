import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';


async function loginUser(credentials) {
  return fetch('http://mini-bid-api.herokuapp.com/usr/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 } 

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    localStorage.setItem('token', JSON.stringify(token));
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