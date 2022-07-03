import React from "react";
import Aby from "../../Images/aby.png";
import { GoPrimitiveDot } from "react-icons/go";

function SettingsIndex() {
  return (
    <div className="site-settings-container">
      <h4 className="site-heading-2">Settings</h4>
      <div className="row-padding-800"></div>
      <h4 className="site-heading-3">Profile</h4>
      <div className="site-settings-profile-box">
        <div className="settings-profile-container">
          <div className="participantsInfoBox">
            <img
              loading="lazy"
              src={Aby}
              alt="participantDp"
              className="participantsImage animateBackgroundSkeleton"
            />
            <span>
              <p className="participantName">{"Aby Thomas"}</p>
              <p className="participantChosenCountry">
                <GoPrimitiveDot /> {"#2910930201283091283"}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsIndex;
