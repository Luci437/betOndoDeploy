import React from "react";

function Empty() {
  return (
    <div className="empty-main-container">
      <div className="empty-3d-container">
        <div className="empty-field-container">
          <div className="empty-field-middle-line"></div>
          <div className="empty-field-middle-circle"></div>
          <div className="empty-field-top-box"></div>
          <div className="empty-field-bottom-box"></div>

          <div className="empty-field-football"></div>
          <div className="football-court-players-empty-container"></div>
        </div>
      </div>
      <span className="empty-field-text-span">
        <p className="empty-field-text">No Record Found</p>
        <p className="empty-field-text-hint">
          You can participate in one of the Contest
        </p>
      </span>
    </div>
  );
}

export default Empty;
