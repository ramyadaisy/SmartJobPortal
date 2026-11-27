
import { Link } from "react-router-dom";

function Managejob({ jobs, setJobs }) {

  const handleDelete = (index) => {
    const updatedJobs = jobs.filter((job, i) => i !== index);

    setJobs(updatedJobs);

    alert("Job Deleted Successfully!");
  };

  return (
    <div>
      <h2>Manage Jobs</h2>

      <h3>Available Jobs</h3>

      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        jobs.map((job, index) => (
          <div key={index}>
            <h3>{job.title}</h3>

            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Description: {job.description}</p>
            <p>Status: Active</p>

            <button onClick={() => handleDelete(index)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}

      <Link to="/postjob">Post New Job</Link>
      <br /><br />

      <Link to="/applicants">View Applicants</Link>
      <br /><br />

      <Link to="/recruiterdashboard">Back to Dashboard</Link>
    </div>
  );
}

export default Managejob;
