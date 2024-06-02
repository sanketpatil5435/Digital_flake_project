import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/core/Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">
        <Sidebar />
        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
          <div className="mx-auto w-11/12 max-w-[1000px] py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
