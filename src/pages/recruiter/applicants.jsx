
import { Link } from "react-router-dom";

function Applicants({ appliedJobs }) {
  return (
    <div>
      <h2>View Applicants</h2>

      {appliedJobs.length === 0 ? (
        <p>No applications received yet.</p>
      ) : (
        appliedJobs.map((job, index) => (
          <div key={index}>

            <h3>{job.title}</h3>

            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Status: {job.status}</p>

            <hr />

          </div>
        ))
      )}

      <Link to="/managejobs">Back to Manage Jobs</Link>

      <br /><br />

      <Link to="/recruiterdashboard">Back to Dashboard</Link>
    </div>
  );
}

export default Applicants;
