import React, { useState } from 'react';
import './SignIn.scss';

function SignIn() {
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
                  required
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
                  required
                />
              </div>

              <button type="submit" className="btn btn-success">
                Login
              </button>
              <h3>or</h3>
              <button>SignIn with Google</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
