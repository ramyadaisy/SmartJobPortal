
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RecruiterLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recruiters = JSON.parse(
      localStorage.getItem("recruiters") || "[]"
    );

    const recruiter = recruiters.find(
      (item) => item.email === email.trim().toLowerCase()
    );

    if (!recruiter) {
      alert("Email not registered. Please register first!");
      return;
    }

    const passwordBuffer = new TextEncoder().encode(password);

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      passwordBuffer
    );

    const passwordHash = Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    if (recruiter.passwordHash === passwordHash) {
      alert("Recruiter Login Successful!");
      navigate("/recruiterdashboard");
    } else {
      alert("Invalid Password!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Smart Job Portal</h2>
        <h3>Recruiter Login</h3>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Company Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

        </form>

        <p>
          New Recruiter? <Link to="/recruiterregister">Register</Link>
        </p>

        <p>
          Job Seeker? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default RecruiterLogin;
