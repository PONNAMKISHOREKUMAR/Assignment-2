import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();
  
    const newUser = { email, password };
  
    try {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send data to API.");
      }
  
      const result = await response.json();
      console.log("User signed up successfully", result);
  
      // Store user details locally
      localStorage.setItem("user", JSON.stringify(newUser));
      
      navigate("/login");
  
    } catch (error) {
      console.error("Error:", error);
      setError("Signup failed! Please try again later.");
    }
  };
  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;
