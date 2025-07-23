import HomeApp from "../screens/HomePage";
import { Routes, Route } from "react-router-dom";
import NewPage from "../screens/NewPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeApp />} />
      {/* <Route path="/clients" element={<ClientsPage />} /> */}
      <Route path="/new-page" element={<NewPage />} />
    </Routes>
  );
};

export default AppRoutes;
