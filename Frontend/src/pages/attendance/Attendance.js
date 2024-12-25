import React from "react";
import ReusableTable from "../../components/table/Table";
import SearchBar from "../../components/searchbar/SearchBar";

const Attendance = () => {
  const data = [
    {
      profile: "https://via.placeholder.com/40",
      name: "Darlene Robertson",
      designation: "Team Lead",
      department: "Backend Development",
      task: "Mobile App login page integration",
      status: "Work from home",
    },
    {
      profile: "https://via.placeholder.com/40",
      name: "Leslie Alexander",
      designation: "Intern",
      department: "Designer",
      task: "Dashboard Design",
      status: "Present",
    },
    {
      profile: "https://via.placeholder.com/40",
      name: "Ronald Richards",
      designation: "Senior Designer",
      department: "Backend Development",
      task: "Dashboard Login page design, Dashboard Home page design",
      status: "Present",
    },
    {
      profile: "https://via.placeholder.com/40",
      name: "Theresa Webb",
      designation: "Junior Developer",
      department: "Backend Development",
      task: "Mobile App Home page updates/changes",
      status: "Work from home",
    },
    {
      profile: "https://via.placeholder.com/40",
      name: "Cody Fisher",
      designation: "Team Lead",
      department: "Designer",
      task: "--",
      status: "Medical Leave",
    },
    {
      profile: "https://via.placeholder.com/40",
      name: "Devon Lane",
      designation: "Full Time",
      department: "Designer",
      task: "--",
      status: "Absent",
    },
  ];

  const columns = [
    {
      header: "Profile",
      accessor: "profile",
      render: (value) => (
        <img src={value} alt="Profile" className="profile-pic" />
      ),
    },
    { header: "Employee Name", accessor: "name" },
    { header: "Designation", accessor: "designation" },
    { header: "Department", accessor: "department" },
    { header: "Task", accessor: "task" },
    { header: "Status", accessor: "status" },
  ];

  return (
    <RecordTable
      fetchUrl={`${process.env.REACT_APP_BACKEND_URL}/fetch/employee`}
      updateUrl={`${process.env.REACT_APP_BACKEND_URL}/update/employee`}
      deleteUrl={`${process.env.REACT_APP_BACKEND_URL}/delete/employee`}
      fields={fields}
      columns={columns}
      rowKey="name"
    />
  );
};

export default Attendance;
