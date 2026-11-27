
import { Link } from "react-router-dom";

function RecruiterDashboard() {
  return (
    <div>
      <h2>Recruiter Dashboard</h2>

      <p>Welcome to Smart Job Portal!</p>

      <h3>Job Management</h3>

      <p>Post new job vacancies.</p>
      <p>View and manage job applicants.</p>

      <h3>Available Options</h3>

      <Link to="/postjob">Post Job</Link>
      <br /><br />

      <Link to="/managejobs">Manage Jobs</Link>
      <br /><br />

      <Link to="/applicants">View Applicants</Link>
      <br /><br />

      <Link to="/recruiterlogin">Logout</Link>
    </div>
  );
}

export default RecruiterDashboard;
