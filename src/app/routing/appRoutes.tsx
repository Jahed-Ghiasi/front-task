import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<PrivateRoutes />} />
      <Route index element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
