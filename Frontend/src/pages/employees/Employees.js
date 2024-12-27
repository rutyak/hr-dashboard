import React from "react";
import RecordTable from "../../components/records/RecordTable";
const Base_url = process.env.REACT_APP_BACKEND_URL;

const Employees = () => {
  const fields = [
    { name: "name", type: "text", placeholder: "Full Name", required: true },
    { name: "email", type: "email", placeholder: "Email Address", required: true },
    { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
    { 
      name: "position", 
      type: "select", 
      placeholder: "Select Position", 
      required: true, 
      options: [
        { value: "Intern", label: "Intern" },
        { value: "Designer", label: "Designer" },
        { value: "Developer", label: "Developer" },
        { value: "Manager", label: "Manager" }
      ] 
    },
    { name: "department", type: "text", placeholder: "Department", required: true },
    { name: "joiningDate", type: "date", placeholder: "Joining Date", required: true }
  ];

  const columns = [
    { render: () => <input type="checkbox" /> },
    { header: "Profile", accessor: "profile", render: (value) => <img src={value} alt="Profile" className="profile-pic" /> },
    { header: "Employee Name", accessor: "name" },
    { header: "Email Address", accessor: "email" },
    { header: "Phone Number", accessor: "phone" },
    { header: "Position", accessor: "position" },
    { header: "Department", accessor: "department" },
    { header: "Date of Joining", accessor: "joiningDate" },
    { header: "", accessor: "" }
  ];

  return (
    <RecordTable
      fetchUrl={`${Base_url}/fetch/employee`}
      createUrl={`${Base_url}/create/employee`}
      updateUrl={`${Base_url}/update/employee`}
      deleteUrl={`${Base_url}/delete/employee`}
      fields={fields}
      columns={columns}
      btnTitle="Add New Employee"
      rowKey="email"
    />
  );
};

export default Employees;
