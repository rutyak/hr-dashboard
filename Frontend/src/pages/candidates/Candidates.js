import React from "react";
import ReusableTable from "../../components/table/Table";
import SearchBar from "../../components/searchbar/SearchBar";

const Candidates = () => {
  const candidates = [
    {
      id: 1,
      name: "Floyd Miles",
      email: "sara.cruz@example.com",
      phone: "(704) 555-0127",
      position: "Designer Intern",
      status: "New",
      experience: "Fresher",
      resume: "📂",
    },
    {
      id: 2,
      name: "Cody Fisher",
      email: "deanna.curtis@example.com",
      phone: "(252) 555-0126",
      position: "Developer",
      status: "Rejected",
      experience: "1+",
      resume: "📂",
    },
  ];

  const columns = [
    { header: "Sr No.", accessor: (_, index) => index + 1 },
    { header: "Candidate's Name", accessor: "name" },
    { header: "Email Address", accessor: "email" },
    { header: "Phone Number", accessor: "phone" },
    { header: "Position", accessor: "position" },
    {
      header: "Status",
      accessor: "status",
      render: (value) => (
        <select className="status-dropdown" defaultValue={value}>
          <option value="New">New</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>
      ),
    },
    { header: "Experience", accessor: "experience" },
    { header: "Resume", accessor: "resume" },
  ];

  return (
    <div style={{ margin: "0px 35px" }}>
      <SearchBar />
      <ReusableTable data={candidates} columns={columns} rowKey="id" />
    </div>
  );
};

export default Candidates;
