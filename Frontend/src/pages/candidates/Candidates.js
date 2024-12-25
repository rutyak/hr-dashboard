import React from "react";
import RecordTable from "../../components/records/RecordTable";

const Candidates = () => {
  const fields = [
    { name: "name", type: "text", placeholder: "Full Name", required: true },
    { name: "email", type: "email", placeholder: "Email Address", required: true },
    { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
    { name: "department", type: "text", placeholder: "Department", required: true },
    { 
      name: "experience", 
      type: "select", 
      placeholder: "Experience", 
      required: true, 
      options: [
        { value: "Fresher", label: "Fresher" },
        { value: "1+", label: "1+ years" },
        { value: "2+", label: "2+ years" },
        { value: "5+", label: "5+ years" }
      ] 
    },
    { name: "resume", type: "file", placeholder: "Upload Resume", required: true },
    { name: "declaration", type: "checkbox", label: "I declare the information is true.", required: true }
  ];

  const columns = [
    { header: "Sr No.", accessor: (_, index) => String(index + 1).padStart(2, "0") },
    { header: "Candidate's Name", accessor: "name" },
    { header: "Email Address", accessor: "email" },
    { header: "Phone Number", accessor: "phone" },
    { header: "Position", accessor: "department" },
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
      )
    },
    { header: "Experience", accessor: "experience" },
    { 
      header: "Resume", 
      accessor: "resume", 
      render: (value) => value ? <a href={value} target="_blank" rel="noopener noreferrer">View Resume</a> : "No Resume Uploaded"
    },
    { header: "", accessor: "" }
  ];

  return (
    <RecordTable
      fetchUrl={`${process.env.REACT_APP_BACKEND_URL}/fetch/candidate`}
      createUrl={`${process.env.REACT_APP_BACKEND_URL}/create/candidate`}
      updateUrl={`${process.env.REACT_APP_BACKEND_URL}/update/candidate`}
      deleteUrl={`${process.env.REACT_APP_BACKEND_URL}/delete/candidate`}
      fields={fields}
      columns={columns}
      btnTitle="Add New Candidate"
      rowKey="id"
    />
  );
};

export default Candidates;
