
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BrowseJobs({ jobs, appliedJobs, setAppliedJobs }) {

  useEffect(() => {
    console.log("Browse Jobs page loaded");
  }, []);

  const handleApply = (job) => {

    const alreadyApplied = appliedJobs.some(
      (item) => item.title === job.title && item.company === job.company
    );

    if (alreadyApplied) {
      alert("You have already applied for this job!");
      return;
    }

    setAppliedJobs([
      ...appliedJobs,
      {
        ...job,
        status: "Pending"
      }
    ]);

    alert("Applied Successfully!");
  };

  return (
    <div>
      <h2>Browse Jobs</h2>

      <h3>Available Jobs</h3>

      <div>
        <h4>Frontend Developer</h4>
        <p>Company: ABC Technologies</p>
        <p>Location: Coimbatore</p>
        <button
          onClick={() => handleApply({
            title: "Frontend Developer",
            company: "ABC Technologies",
            location: "Coimbatore"
          })}
        >
          Apply Now
        </button>
      </div>

      <hr />

      <div>
        <h4>Java Developer</h4>
        <p>Company: XYZ Solutions</p>
        <p>Location: Chennai</p>
        <button
          onClick={() => handleApply({
            title: "Java Developer",
            company: "XYZ Solutions",
            location: "Chennai"
          })}
        >
          Apply Now
        </button>
      </div>

      <hr />

      <h3>Recruiter Posted Jobs</h3>

      {jobs.length === 0 ? (
        <p>No new jobs available.</p>
      ) : (
        jobs.map((job, index) => (
          <div key={index}>
            <h4>{job.title}</h4>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Description: {job.description}</p>

            <button onClick={() => handleApply(job)}>
              Apply Now
            </button>

            <hr />
          </div>
        ))
      )}

      <Link to="/applications">My Applications</Link>

      <br /><br />

      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default BrowseJobs;
