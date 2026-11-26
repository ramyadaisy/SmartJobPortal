
import { useEffect } from "react";

function BrowseJobs() {

  useEffect(() => {
    console.log("Browse Jobs page loaded");
  }, []);

  return (
    <div>
      <h2>Browse Jobs</h2>

      <input type="text" placeholder="Search Jobs" />

      <h3>Available Jobs</h3>

      <div>
        <h4>Frontend Developer</h4>
        <p>Company: ABC Technologies</p>
        <p>Location: Coimbatore</p>
        <button>Apply Now</button>
      </div>

      <div>
        <h4>Java Developer</h4>
        <p>Company: XYZ Solutions</p>
        <p>Location: Chennai</p>
        <button>Apply Now</button>
      </div>

      <a href="/dashboard">Back to Dashboard</a>
    </div>
  );
}

export default BrowseJobs;
