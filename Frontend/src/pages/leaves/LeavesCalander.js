import React from "react";
import "./LeavesCalander.css";

const LeaveCalendar = () => {
  const leaveData = [
    {
      profile: "https://via.placeholder.com/40",
      name: "Wade Warren",
      designation: "Senior Software Developer",
      startDate: "10/09/24",
      endDate: "13/09/24",
    },
  ];

  return (
    <div className="leave-calendar">
      <div className="calendar-header">
        <h2>Leave Calendar</h2>
        <div className="date-switcher">
          <button className="today-btn">Today</button>
          <div className="date-picker">
            <span>10/09/24</span>
            <button className="calendar-icon">
              <img
                src="https://via.placeholder.com/20?text=📅"
                alt="Calendar Icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="leave-list">
        {leaveData.map((entry, index) => (
          <div key={index} className="leave-item">
            <img
              src={entry.profile}
              alt="Profile"
              className="profile-picture"
            />
            <div className="leave-details">
              <div className="name">{entry.name}</div>
              <div className="designation">{entry.designation}</div>
            </div>
            <div className="leave-dates">
              <span>{entry.startDate}</span>
              <span>{entry.endDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveCalendar;
