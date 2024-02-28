import { Route, Routes } from "react-router-dom";
import Dashboard from "src/app/pages/dashboard";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/report" element={<div>Report</div>} />
      <Route path="/bank" element={<div>Bank</div>} />
      <Route path="/email" element={<div>Email</div>} />
      <Route path="/group" element={<div>Group</div>} />
      <Route path="/list" element={<div>List</div>} />
      <Route path="/finance" element={<div>Finance</div>} />
    </Routes>
  );
};

export default PrivateRoutes;
