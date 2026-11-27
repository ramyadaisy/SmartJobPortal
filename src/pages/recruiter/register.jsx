
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function RecruiterRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
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

    const recruiters = JSON.parse(
      localStorage.getItem("recruiters") || "[]"
    );

    const email = formData.email.trim().toLowerCase();

    const existingRecruiter = recruiters.find(
      (recruiter) => recruiter.email === email
    );

    if (existingRecruiter) {
      alert("Email already registered!");
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

    const newRecruiter = {
      company: formData.company,
      email: email,
      passwordHash: passwordHash
    };

    recruiters.push(newRecruiter);

    localStorage.setItem(
      "recruiters",
      JSON.stringify(recruiters)
    );

    alert("Recruiter Registration Successful!");
    navigate("/recruiterlogin");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Smart Job Portal</h2>
        <h3>Recruiter Registration</h3>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Company Email"
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

          <button type="submit">Register</button>

        </form>

        <p>
          Already registered? <Link to="/recruiterlogin">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default RecruiterRegister;
