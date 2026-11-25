
function Register() {
  return (
    <div>
      <h2>Job Seeker Registration</h2>

      <form>
        <input type="text" placeholder="Enter Name" required />
        <br /><br />

        <input type="email" placeholder="Enter Email" required />
        <br /><br />

        <input type="password" placeholder="Enter Password" required />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
