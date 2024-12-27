import React, { useEffect, useState } from "react";
import ReusableTable from "../../components/table/Table";
import SearchBar from "../../components/searchbar/SearchBar";
import LeaveCalendar from "./LeavesCalander";
import "./Leaves.css";
import { toast } from "react-toastify";
import axios from "axios";
import { DocIcon } from "../../assets/Icons";

const Leaves = () => {
  const [data, setData] = useState([]);

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
          <DocIcon/>
        </a>
      ),
    },
  ];

  const fields = [
    {
      name: "name",
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
      name: "date", 
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
      name: "docs",
      type: "file",
      placeholder: "Attach Supporting Documents",
      required: false,
    },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/fetch/leaves`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data. Please try again.");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/create/leaves`,
        formData
      );
      toast.success("Leave submitted successfully!");
      fetchData();
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data. Please try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="leaves-container">
        <SearchBar
          btnTitle={"Add New Leave"}
          fields={fields}
          onSubmit={handleSubmit}
        />
        <div className="leaves">
          <div className="leaves-table">
            <ReusableTable data={data} columns={columns} rowKey="name" />
          </div>
          <div className="leaves-calender">
            <LeaveCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaves;
