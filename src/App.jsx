
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/jobseeker/login";
import Register from "./pages/jobseeker/register";
import Dashboard from "./pages/jobseeker/dashboard";
import BrowseJobs from "./pages/jobseeker/browseJobs";
import Jobdetails from "./pages/jobseeker/jobdetails";
import Applications from "./pages/jobseeker/applications";

import RecruiterLogin from "./pages/recruiter/recruiterlogin";
import RecruiterRegister from "./pages/recruiter/register";
import RecruiterDashboard from "./pages/recruiter/dashboard";
import Postjob from "./pages/recruiter/postjob";
import Managejob from "./pages/recruiter/managejob";
import Applicants from "./pages/recruiter/applicants";

function App() {

  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/jobs" element={<BrowseJobs jobs={jobs} appliedJobs={appliedJobs} setAppliedJobs={setAppliedJobs}/>} />
      <Route path="/jobdetails" element={<Jobdetails />} />
      <Route path="/applications" element={<Applications appliedJobs={appliedJobs} />}/>
      <Route path="/recruiterlogin" element={<RecruiterLogin />} />
      <Route path="/recruiterregister" element={<RecruiterRegister />} />
      <Route path="/recruiterdashboard" element={<RecruiterDashboard />} />

      <Route path="/postjob" element={<Postjob jobs={jobs} setJobs={setJobs} />} />

      <Route path="/managejobs" element={<Managejob jobs={jobs} setJobs={setJobs} />}/>

      <Route path="/applicants" element={<Applicants appliedJobs={appliedJobs} />}/>

    </Routes>
  );
}

export default App;
