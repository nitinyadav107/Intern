import React from "react";
import studentData from "../assets/studentData";


const Applications = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Applications</h3>
      <div className="space-y-4">
        {studentData.applications.map((app, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{app.company}</h4>
                <p className="text-gray-600">{app.position}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  app.status === "Accepted"
                    ? "bg-green-100 text-green-800"
                    : app.status === "Under Review"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {app.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Applied: {new Date(app.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
