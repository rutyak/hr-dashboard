import React, { useEffect, useState } from "react";
import axios from "axios";
import ReusableTable from "../../components/table/Table";
import SearchBar from "../../components/searchbar/SearchBar";
import { toast } from "react-toastify";
import "./RecordTable.css";

const RecordTable = ({ 
  fetchUrl, 
  createUrl, 
  updateUrl, 
  deleteUrl, 
  fields, 
  columns, 
  btnTitle, 
  rowKey 
}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(fetchUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data. Please try again.");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post(createUrl, formData);
      toast.success(`${btnTitle} submitted successfully!`);
      fetchData();
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting data. Please try again.");
    }
  };

  const handleEdit = async (updatedData, itemId) => {
    try {
      const response = await axios.patch(`${updateUrl}/${itemId}`, updatedData);
      toast.success(`${btnTitle} updated successfully!`);
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Error updating data. Please try again.");
    }
  };

  const handleDelete = async (itemId) => {
    if (window.confirm(`Are you sure you want to delete this ${btnTitle.toLowerCase()}?`)) {
      try {
        const response = await axios.delete(`${deleteUrl}/${itemId}`);
        toast.success(`${btnTitle} deleted successfully!`);
        fetchData();
      } catch (error) {
        console.error("Error deleting data:", error);
        toast.error("Error deleting data. Please try again.");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="record-table">
      <SearchBar
        btnTitle={btnTitle}
        fields={fields}
        onSubmit={handleSubmit}
      />
      <ReusableTable
        data={data}
        columns={columns}
        rowKey={rowKey}
        fields={fields}
        onSubmit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default RecordTable;
