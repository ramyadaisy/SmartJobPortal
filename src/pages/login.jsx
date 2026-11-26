
import { useState } from "react";

function Login() {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Login Details Submitted");
  };

  return (
    <div>
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
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        New User? <a href="/register">Register</a>
      </p>

      <p>
        Recruiter? <a href="/recruiter-login">Recruiter Login</a>
      </p>
    </div>
  );
}

export default Login;
