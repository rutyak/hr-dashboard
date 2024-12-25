import React, { useState } from "react";
import "./FormPopover.css";

const FormPopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setIsOpen(false);
  };

  return (
    <div className="form-popover-container">
      <button className="add-button" onClick={togglePopover}>
        Add New Employee
      </button>

      {isOpen && (
        <div className="popover-overlay" onClick={togglePopover}>
          <div
            className="popover-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="popover-header">
              <h3>Edit Employee Details</h3>
              <button className="close-button" onClick={togglePopover}>
                ✖
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Department"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <select required>
                    <option value="">Select Position</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="Developer">Developer</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="save-button">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPopover;
