
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const users = JSON.parse(
      localStorage.getItem("jobSeekers") || "[]"
    );

    const email = formData.email.trim().toLowerCase();

    const user = users.find(
      (user) => user.email === email
    );

    if (!user) {
      alert("Email not registered. Please register first!");
      return;
    }

    const passwordBuffer = new TextEncoder().encode(
      formData.password
    );

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      passwordBuffer
    );

    const passwordHash = Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    if (user.passwordHash === passwordHash) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Password!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Smart Job Portal</h2>
        <h3>Job Seeker Login</h3>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>

        </form>

        <p>
          New User? <Link to="/register">Register</Link>
        </p>

        <p>
          Recruiter? <Link to="/recruiterlogin">Recruiter Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
