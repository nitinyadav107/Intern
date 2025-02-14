const studentData = {
  name: "Sarah Johnson",
  email: "sarah.j@university.edu",
  phone: "(555) 123-4567",
  location: "New York, NY",
  major: "Computer Science",
  year: "Junior",
  gpa: "3.8",
  avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=${(Math.random() + 1).toString(36).substring(7)}`,
  applications: [
    {
      company: "Tech Solutions Inc.",
      position: "Software Engineering Intern",
      status: "Under Review",
      date: "2024-03-15",
    },
    {
      company: "Data Analytics Co.",
      position: "Data Science Intern",
      status: "Accepted",
      date: "2024-03-10",
    },
    {
      company: "Web Innovations",
      position: "Frontend Developer",
      status: "Pending",
      date: "2024-03-18",
    }
  ],
};

export default studentData;
