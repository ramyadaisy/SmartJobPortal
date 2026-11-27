
import { Link } from "react-router-dom";

function Jobdetails() {
  return (
    <div>
      <h2>Job Details</h2>

      <h3>Frontend Developer</h3>
      <p>Company: ABC Technologies</p>
      <p>Location: Coimbatore</p>
      <p>Job Type: Full Time</p>
      <p>Skills: HTML, CSS, JavaScript, React</p>

      <Link to="/jobs">Back to Jobs</Link>
    </div>
  );
}

export default Jobdetails;
