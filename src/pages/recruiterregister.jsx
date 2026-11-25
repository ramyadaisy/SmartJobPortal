
function RecruiterRegister() {
  return (
    <div>
      <h2>Recruiter Registration</h2>

      <form>
        <input type="text" placeholder="Company Name" required />
        <br /><br />

        <input type="email" placeholder="Company Email" required />
        <br /><br />

        <input type="password" placeholder="Enter Password" required />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RecruiterRegister;
