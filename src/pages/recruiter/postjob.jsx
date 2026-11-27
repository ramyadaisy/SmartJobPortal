
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Postjob({ jobs, setJobs }) {

  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setJobs([
      ...jobs,
      jobData
    ]);

    alert("Job Posted Successfully!");

    navigate("/managejobs");
  };

  return (
    <div>
      <h2>Post a Job</h2>

      <form onSubmit={handleSubmit}>

        <label>Job Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="Enter Company Name"
          value={jobData.company}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          value={jobData.location}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Job Description</label>
        <textarea
          name="description"
          placeholder="Enter Job Description"
          value={jobData.description}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Post Job</button>

      </form>

      <br />

      <Link to="/recruiterdashboard">Back to Dashboard</Link>

    </div>
  );
}

export default Postjob;
