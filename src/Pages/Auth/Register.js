import React, { useState } from "react";
import { useDispatch } from 'react-redux' 
import {Link} from 'react-router-dom'
import { register } from '../../redux/authSlice'
import { useNavigate } from "react-router-dom";
import "../../style/register.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  
   
  const handleRegister = async (e) => {
    e.preventDefault()

 

      const res = await fetch(`http://localhost:5000/register`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({name,email,phone,password})
      })
      const data = await res.json()
      dispatch(register(data))
      navigate('/login')

  }

  return (
   
      <div className="form-container ">
        <form onSubmit={handleRegister}>
          <h4 className="title">Sign Up</h4>
         
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              />   
          </div>
                 
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
          
          <p>Already have an account? <Link to='/Login' className="link">Login</Link></p>
        </form>
      </div>
    
  );
};

export default Register;