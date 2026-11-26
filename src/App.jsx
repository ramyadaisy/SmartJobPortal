
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import BrowseJobs from "./pages/browseJobs";
import Applications from "./pages/applications";

import RecruiterLogin from "./pages/recruiterlogin";
import RecruiterRegister from "./pages/recruiterregister";
import RecruiterDashboard from "./pages/recruiterdashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registers" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<BrowseJobs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/recruiterlogin" element={<RecruiterLogin />} />
        <Route path="/recruiterregister" element={<RecruiterRegister />} />
        <Route path="/recruiterdashboard" element={<RecruiterDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
