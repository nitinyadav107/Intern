import React from "react";
import { User, FileText } from "lucide-react";
import studentData from "../assets/studentData";
import { useAuth } from "../context/AuthProvider";


const Sidebar = ({ activeTab, setActiveTab }) => {
  const {token}=useAuth();
  return (
    <div className="md:col-span-1">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col items-center">
          <img
            src={studentData.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">{token.name}</h2>
          <p className="text-gray-600 mb-4">{studentData.major}</p>
          <div className="w-full space-y-3">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === "profile"
                  ? "bg-indigo-50 text-indigo-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <User size={18} />
              Profile
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === "applications"
                  ? "bg-indigo-50 text-indigo-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <FileText size={18} />
              Applications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
