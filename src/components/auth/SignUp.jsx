import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    console.log("Sign-up data:", formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="login">
        <div className="login-page">
          <div className="heading">
            <h1>Sign Up</h1>
          </div>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
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
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
