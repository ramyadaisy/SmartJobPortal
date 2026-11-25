
function RecruiterLogin() {
  return (
    <div>
      <h2>Recruiter Login</h2>

      <form>
        <input type="email" placeholder="Company Email" required />
        <br /><br />

        <input type="password" placeholder="Enter Password" required />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        New Recruiter? <a href="/recruiter-register">Register</a>
      </p>
    </div>
  );
}

export default RecruiterLogin;
