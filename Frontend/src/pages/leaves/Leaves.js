import React from "react";
import ReusableTable from "../../components/table/Table";
import SearchBar from "../../components/searchbar/SearchBar";
import LeaveCalendar from "./LeavesCalander";
import "./Leaves.css";

const Leaves = () => {
  const data = [
    {
      profile: "https://via.placeholder.com/40",
      name: "Esther Howard",
      designation: "Designer",
      date: "10/09/24",
      reason: "Going to Home town",
      status: "Pending",
      docs: "https://via.placeholder.com/20",
    },
    {
      profile: "https://via.placeholder.com/40",
      name: "Wade Warren",
      designation: "Senior Software Engineer",
      date: "10/09/24",
      reason: "Had fever Dr. told to rest for 3 days",
      status: "Approved",
      docs: "https://via.placeholder.com/20",
    },
    {
      profile: "https://via.placeholder.com/40",
      name: "Jenny Wilson",
      designation: "Developer",
      date: "11/09/24",
      reason: "Not feeling Well",
      status: "Rejected",
      docs: "https://via.placeholder.com/20",
    },
  ];

  const columns = [
    {
      header: "Name",
      accessor: "name",
      render: (value, row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={row.profile}
            alt="Profile"
            className="profile-pic"
            style={{ marginRight: "10px" }}
          />
          <div>
            <div>{value}</div>
            <small>{row.designation}</small>
          </div>
        </div>
      ),
    },
    { header: "Date", accessor: "date" },
    { header: "Reason", accessor: "reason" },
    {
      header: "Status",
      accessor: "status",
      render: (value) => (
        <span
          style={{
            color:
              value === "Approved"
                ? "green"
                : value === "Rejected"
                ? "red"
                : "orange",
          }}
        >
          {value}
        </span>
      ),
    },
    {
      header: "Docs",
      accessor: "docs",
      render: (value) => (
        <a href={value} target="_blank" rel="noopener noreferrer">
          <img src={value} alt="Document Icon" />
        </a>
      ),
    },
  ];

  const fields = [
    {
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      required: true,
    },
    {
      name: "designation",
      type: "select",
      placeholder: "Select Designation",
      required: true,
      options: [
        { value: "Team Lead", label: "Team Lead" },
        { value: "Developer", label: "Developer" },
        { value: "Manager", label: "Manager" },
        { value: "Intern", label: "Intern" },
      ],
    },
    {
      name: "leaveDate",
      type: "date",
      placeholder: "Leave Date",
      required: true,
    },
    {
      name: "reason",
      type: "textarea",
      placeholder: "Reason for Leave",
      required: true,
    },
    {
      name: "attachment",
      type: "file",
      placeholder: "Attach Supporting Documents",
      required: false,
    },
  ];
  
  function handleSubmit(){
    console.log("Leaves applied....")
  }

  return (
    <>
      <div style={{ margin: "0px 35px" }}>
        <SearchBar btnTitle={"Add New Leave"} fields={fields} onSubmit={handleSubmit}/>
        <div className="leaves">
          <div style={{ width: "70%" }}>
            <ReusableTable data={data} columns={columns} rowKey="name" />
          </div>
          <div style={{ width: "28%" }}>
            <LeaveCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaves;
