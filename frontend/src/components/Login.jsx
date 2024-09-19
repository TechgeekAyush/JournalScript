import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    let navigate = useNavigate(); // used to navigate to the homepage after login
    const [credentials, setCredentials] = useState({email:"", password:""})
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name] : e.target.value})
    }
    const host = "https://journalscript.onrender.com"
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json)
        if(json.success)
        {
            //save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in successfully", "success")
            navigate("/");
        }
        else
        {
            props.showAlert("Invalid credentials", "danger")
        }
    }
    return (
        <>
            <h1 className='my-3'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </>
    )
}

export default Login