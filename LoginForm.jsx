import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginform.css";

export default function Loginform() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.toLowerCase().includes("student")) {
            navigate("/Student");
        } else if (email.toLowerCase().includes("manager")) {
            navigate("/Manager");
        } else {
            alert("Invalid role. Please enter a valid student or manager email.");
        }
    };

    return (
        <div className="register-login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
