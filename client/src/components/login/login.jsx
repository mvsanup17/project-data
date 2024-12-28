import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:6700/auth/login", { email, password })
      .then((res) => {
        if (res.data.status) {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
 

  return (
    <div>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="col-md-6">
              <form className="w-100 p-4 shadow rounded bg-white" onSubmit={handleSubmit} >
                <h2 className="text-center">Login</h2>
                <div className="form-group mt-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4">
                  Login
                </button>
                <div className="text-center mt-3">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <p className="text-center mt-2">
                  Don't have an Account? <Link to="/signup">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
    </div>
  );
}

export default Login;
