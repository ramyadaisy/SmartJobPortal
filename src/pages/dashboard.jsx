
function Dashboard() {
  return (
    <div>
      <h2>Job Seeker Dashboard</h2>

      <p>Welcome to Smart Job Portal!</p>

      <a jobs="/jobs">Browse Jobs</a>
      <br /><br />

      <a application="/applications">My Applications</a>
      <br /><br />

      <a lagout="/">Logout</a>
    </div>
  );
}

export default Dashboard;
