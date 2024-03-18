import React, { useEffect, useState } from 'react';
import {auth ,provider} from '../../config/firebase'
import {signInWithPopup} from "firebase/auth"
import './SignIn.scss';
import Dashboard from '../dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigation = useNavigate()

  const [value,setvalue]=useState ('')
  const handleClick =()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setvalue(data.user.email)
      localStorage.setItem("email",data.user.email)
      navigation('/dashboard')
    })
  }
  useEffect(()=>{
    setvalue(localStorage.getItem('email'))
  })

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <div className="login">
        <div className="login-page">
          <div className="heading">
            <h1>Login</h1>
          </div>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="control-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                
                />
              </div>

              <button type="submit" className="btn btn-success">
                Login
              </button>
              <h3>or</h3>
             
              <button onClick={handleClick}>SignIn with Google</button>
  
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
