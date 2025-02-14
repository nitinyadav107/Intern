import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import Applications from "../components/Applications";
import { useAuth } from "../context/AuthProvider";


export default function HomePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const { logout}=useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 flex">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
        </div>
        <div  className="container mx-auto px-4 flex justify-end font-bold text-xl cursor-pointer"><span onClick={logout}>Logout</span></div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === "profile" ? <Profile /> : <Applications />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


