import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Reset(){

    const [password, setPassword] = useState();
    const {token} = useParams()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:6700/auth/reset-password/"+token, {password})
        .then((res) => {
            if (res.data.status) {
            navigate("/login")
            }
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return(
        <div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <form onSubmit={handleSubmit} className="w-100">
                    <h2 className="text-center">Reset Password</h2>
                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Reset your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Reset</button>
                </form>
            </div>
        </div>
    )
}
export default Reset