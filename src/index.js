import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "assets/demo/demo.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "bootstrap/dist/css/bootstrap.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  </BrowserRouter>
);
