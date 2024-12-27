import React, { useState } from "react";
import "./Table.css";
import FormPopover from "../form/FormPopover";

const Table = ({ data, columns, rowKey, fields, onSubmit, onDelete }) => {
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [selectedItemData, setSelectedItemData] = useState(null);

  const DEFAULT_IMAGE_URL =
    "https://res.cloudinary.com/drxanllxs/image/upload/v1731160813/samples/people/smiling-man.jpg";

  function handleToggle(rowIndex, itemData) {
    setSelectedItemData(itemData);

    if (activeRowIndex === rowIndex) {
      setActiveRowIndex(null);
    } else {
      setActiveRowIndex(rowIndex);
    }
  }

  return (
    <div className="reusable-table-container">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={item[rowKey] || rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.render ? (
                    column.render(item[column.accessor], item)
                  ) : column.accessor === "image" ? (
                    <img
                      src={item[column.accessor] || DEFAULT_IMAGE_URL}
                      alt="Profile"
                      className="table-image"
                    />
                  ) : (
                    item[column.accessor]
                  )}
                  {column.header === "" && (
                    <div className="action-menu">
                      <div
                        className="action-dot"
                        onClick={() => handleToggle(rowIndex, item)}
                      >
                        ⋮
                      </div>
                      <div
                        className={`action-dropdown ${
                          activeRowIndex === rowIndex ? "visible" : ""
                        }`}
                      >
                        <FormPopover
                          btnTitle={"Edit Employee Details"}
                          fields={fields}
                          onSubmit={onSubmit}
                          itemId={item._id}
                          itemData={selectedItemData}
                        />
                        <button className="delete-btn" onClick={() => onDelete(item._id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
