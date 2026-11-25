
function Login() {
  return (
    <div>
      <h2>Smart Job Portal</h2>
      <h3>Job Seeker Login</h3>

      <form>
        <input type="email" placeholder="Enter Email" required />
        <br /><br />

        <input type="password" placeholder="Enter Password" required />
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
