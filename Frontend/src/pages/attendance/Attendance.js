import React from "react";
import RecordTable from "../../components/records/RecordTable";
const Base_url = process.env.REACT_APP_BACKEND_URL;


const Attendance = () => {
  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Full Name",
      required: true,
      value: "Theresa Webb",
    },
    {
      name: "designation",
      type: "text",
      placeholder: "Designation",
      required: true,
      value: "Junior Developer",
    },
    {
      name: "department",
      type: "text",
      placeholder: "Department",
      required: true,
      value: "Backend Development",
    },
    {
      name: "task",
      type: "text",
      placeholder: "Task",
      required: true,
      value: "Mobile App Home page updates/changes",
    },
    {
      name: "status",
      type: "select",
      placeholder: "Status",
      required: true,
      options: [
        { value: "Work from home", label: "Work from home" },
        { value: "Present", label: "Present" },
        { value: "Medical Leave", label: "Medical Leave" },
        { value: "Absent", label: "Absent" },
      ],
      value: "Work from home",
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
    {
      header: "Status", 
      accessor: "status", 
      render: (value) => (
        <select className="status-dropdown" defaultValue={value}>
          <option value="Status">Work From Home</option>
          <option value="Scheduled">Present</option>
          <option value="Selected">Absent</option>
          <option value="Rejected">Leave</option>
        </select>
      )
    },
    { header: "", accessor: "" },
  ];

  return (
    <RecordTable
      fetchUrl={`${Base_url}/fetch/attendance`}
      createUrl={`${Base_url}/create/attendance`}
      updateUrl={`${Base_url}/update/attendance`}
      deleteUrl={`${Base_url}/delete/attendance`}
      fields={fields}
      columns={columns}
      btnTitle="Add Details"
      rowKey="name"
    />
  );
};

export default Attendance;
