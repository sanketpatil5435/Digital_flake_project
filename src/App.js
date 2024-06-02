import "./App.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
// React Router
import { Route, Routes, useNavigate } from "react-router-dom";
import OpenRoute from "./components/core/OpenRoute";
import PrivateRoute from "./components/core/PrivateRoute";
import UpdatePassword from "./pages/UpdatePassword";
import Login from "./pages/Login";
import Home from "./components/Home";
import Dashboard from "./pages/Dashboard";
import Subcategory from "./components/Subcategory";
import Category from "./components/Category";
import Products from "./components/Products";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="update-password/:id" element={<UpdatePassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/home" element={<Home />} />
          <Route path="/dashboard/Sub-Category" element={<Subcategory />} />
          <Route path="/dashboard/Category" element={<Category />} />
          <Route path="/dashboard/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
