import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate(); // used to navigate to the homepage after signup
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const host = "http://localhost:3000"
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    if(json.success)
    {
      localStorage.setItem('token', json.authtoken);
      navigate("/");
    }
    else if(json.error == 'User already exists')
    {
      props.showAlert("User already exists", "danger")
      navigate("/");
    }
  }
  return (
    <>
      <h1 className='my-3'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" onChange={onChange} name='name' required minLength={3} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" onChange={onChange} name='email' required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' id="password" onChange={onChange} required minLength={8} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm password</label>
          <input type="password" className="form-control" name='cpassword' id="cpassword" onChange={onChange} required minLength={8} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </>
  )
}

export default Signup