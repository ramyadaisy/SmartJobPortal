
import { Link } from "react-router-dom";

function Applications({ appliedJobs }) {
  return (
    <div>
      <h2>My Applications</h2>

      {appliedJobs.length === 0 ? (
        <p>You have not applied for any jobs yet.</p>
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

      <Link to="/jobs">Browse More Jobs</Link>

      <br /><br />

      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default Applications;
