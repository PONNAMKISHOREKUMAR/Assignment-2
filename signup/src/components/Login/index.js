import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Retrieve the user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate("/");
    } else {
      setError("Invalid credentials!");
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;
