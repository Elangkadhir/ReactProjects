import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();

  const isMenuItemActive = (path) => {
    return location.pathname === path;
  };

  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log("path", path);
    navigate(path);
  };

  return (
    <div className="bg-blue-500 h-full  py-6 pl-6 rounded-lg flex flex-col font-bold gap-6 text-white">
      <div
        className={
          "p-2 bdr cursor-pointer hover:text-black hover:rounded-l-lg hover:bg-white text-start"
        }
      >
        Dashboard
      </div>
      <div
        className={
          "p-2 bdr cursor-pointer hover:text-black hover:rounded-l-lg hover:bg-white text-start"
        }
      >
        Projects
      </div>
      <div
        className={
          "p-2 bdr cursor-pointer hover:text-black hover:rounded-l-lg hover:bg-white text-start"
        }
      >
        Activities
      </div>
      <div
        className={
          "p-2 bdr cursor-pointer hover:text-black hover:rounded-l-lg hover:bg-white text-start"
        }
      >
        Attendance
      </div>
      <div
        className={
          "p-2 bdr cursor-pointer hover:text-black hover:rounded-l-lg hover:bg-white text-start"
        }
      >
        Reports
      </div>
      <div
        className={
          "p-2 bdr cursor-pointer hover:text-black hover:rounded-l-lg hover:bg-white text-start"
        }
      >
        Settings
      </div>

      <div
        className={`p-2 bdr cursor-pointer hover:text-black hover:rounded-l-lg hover:bg-white text-start`}
      >
        Logout
      </div>
    </div>
  );
}

export default SideMenu;
