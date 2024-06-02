import React from "react";
import { sidebarLinks } from "../../data/dashboard-links";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div>
      <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
