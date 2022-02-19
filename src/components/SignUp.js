import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {


  const [creds, setCreds] = useState({name: "", email: "", password: "", confirmpassword: "" })
  const history = useNavigate();

  const SubmitForm = async (e) => {
    e.preventDefault();
    const {name, email, password} = creds
    const response = await fetch("http://localhost:5000/authentication", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.token)
      history('/')
    }
    else{
      alert("Invalid User!")
    }

  }

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form onSubmit={SubmitForm}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Enter your Name</label>
          <input type="text" className="form-control" name='name' id="name" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Enter your Email address</label>
          <input type="email" className="form-control" name='email' id="email" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Choose a Password</label>
          <input type="password" className="form-control" name='password' onChange={onChange} id="password" minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">Confirm your Password</label>
          <input type="password" className="form-control" name='confirmpassword' onChange={onChange} id="confirmpassword" minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}
