import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
 
export const Login = () => {
    const [creds, setCreds] = useState({email: "", password: ""})
    const history = useNavigate();
    
    const SubmitForm = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/authentication/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email: creds.email, password: creds.password})
        });
        const json = await response.json();
        if (json.success){
            localStorage.setItem('token',json.token)
            history('/')
        }

    }
    const onChange = (e)=>{
        setCreds({...creds, [e.target.name]: e.target.value})
    }
        return (
            <div>
                <form onSubmit={SubmitForm}>
                    <div className="container mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" value={creds.email} onChange={onChange} aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="container mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={creds.password} onChange={onChange} id="password" />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
