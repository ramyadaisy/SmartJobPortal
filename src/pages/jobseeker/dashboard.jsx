
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="p-4 md:p-8 lg:p-12">

      <h2 className="text-xl md:text-2xl font-bold">
        Job Seeker Dashboard
      </h2>

      <p className="mt-3 mb-6">
        Welcome to Smart Job Portal!
      </p>

      <div className="flex flex-col md:flex-row gap-4">

        <Link to="/jobs" className="text-blue-600">
          Browse Jobs
        </Link>

        <Link to="/applications" className="text-blue-600">
          My Applications
        </Link>

        <Link to="/" className="text-red-600">
          Logout
        </Link>

      </div>
    </div>
  );
}

export default Dashboard;
