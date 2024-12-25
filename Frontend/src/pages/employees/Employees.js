import React from "react";
import ReusableTable from "../../components/table/Table";
import SearchBar from "../../components/searchbar/SearchBar";

const Employees = () => {
  const employees = [
    {
      profile: "https://via.placeholder.com/40",
      name: "Darlene Robertson",
      email: "michael.mitc@example.com",
      phone: "(603) 555-0123",
      position: "Team Lead",
      department: "Backend Development",
      joiningDate: "10/06/13",
    },
    {
      profile: "https://via.placeholder.com/40",
      name: "Leslie Alexander",
      email: "felicia.reid@example.com",
      phone: "(229) 555-0109",
      position: "Intern",
      department: "Designer",
      joiningDate: "08/15/17",
    },
  ];

  const columns = [
    {
      header: "",
      accessor: "",
      render: () => <input type="checkbox" />,
    },
    {
      header: "Profile",
      accessor: "profile",
      render: (value) => <img src={value} alt="Profile" className="profile-pic" />,
    },
    { header: "Employee Name", accessor: "name" },
    { header: "Email Address", accessor: "email" },
    { header: "Phone Number", accessor: "phone" },
    { header: "Position", accessor: "position" },
    { header: "Department", accessor: "department" },
    { header: "Date of Joining", accessor: "joiningDate" },
    {
      header: "",
      accessor: "",
      render: () => (
        <div className="action-menu">
          <button className="action-dots">⋮</button>
          {/* <div className="action-dropdown">
            <button>Edit</button>
            <button>Delete</button>
          </div> */}
        </div>
      ),
    },
  ];

  return (
    <div style={{ margin: "0px 35px" }}>
      <SearchBar />
      <ReusableTable data={employees} columns={columns} rowKey="email" />
    </div>
  );
};

export default Employees;
