import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forgot() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:6700/auth/forgot-password", {email})
      .then((res) => {
        if (res.data.status) {
          alert("Check your Mail to reset your password")
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
              <h2 className="text-center">Forgot Password</h2>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Send Mail</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot
