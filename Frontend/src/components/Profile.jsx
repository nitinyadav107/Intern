import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, School, Calendar, BookOpen } from "lucide-react";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";

const Profile = () => {
  const { token } = useAuth();
  const [studentData, setStudentData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchBio = async () => {
      console.log(token.email)
      if (token) {
        try {
          const res = await axios.post("/api/auth/bio", { email: token.email }); // ✅ Send email in body
          console.log("Fetched Bio:", res.data);
          setStudentData(res.data.bio);
          setFormData(res.data.bio);
        } catch (err) {
          console.error("Error fetching bio:", err.response?.data || err.message);
        }
      }
    };

    fetchBio();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      console.log(formData);
      const res = await axios.post("/api/auth/updatebio", { email: token.email,  formData });
      setStudentData(res.data.bio);
      
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating bio:", err.response?.data || err.message);
    }
  };

  if (!studentData) return <p>Loading...</p>;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Student Profile</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <ProfileItem icon={<Mail />} label="Email" value={token.email} />
          {isEditing ? (
            <InputField name="phone" value={formData.phone} onChange={handleChange} />
          ) : (
            <ProfileItem icon={<Phone />} label="Phone" value={studentData.phone} />
          )}
          {isEditing ? (
            <InputField name="location" value={formData.location} onChange={handleChange} />
          ) : (
            <ProfileItem icon={<MapPin />} label="Location" value={studentData.location} />
          )}
        </div>
        <div className="space-y-4">
          {isEditing ? (
            <InputField name="major" value={formData.major} onChange={handleChange} />
          ) : (
            <ProfileItem icon={<School />} label="Major" value={studentData.major} />
          )}
          {isEditing ? (
            <InputField name="year" value={formData.year} onChange={handleChange} />
          ) : (
            <ProfileItem icon={<Calendar />} label="Year" value={studentData.year} />
          )}
          {isEditing ? (
            <InputField name="gpa" value={formData.gpa} onChange={handleChange} />
          ) : (
            <ProfileItem icon={<BookOpen />} label="GPA" value={studentData.gpa} />
          )}
        </div>
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
        onClick={() => (isEditing ? handleUpdate() : setIsEditing(true))}
      >
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="text-gray-400">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p>{value}</p>
    </div>
  </div>
);

const InputField = ({ name, value, onChange }) => (
  <input 
    type="text" 
    name={name}
    value={value}
    onChange={onChange}
    placeholder={`Enter your ${name}`}
    className="w-full border px-3 py-2 rounded-md"
  />
);

export default Profile;
