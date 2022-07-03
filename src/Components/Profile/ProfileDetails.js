import React, { useEffect, useRef, useState, useContext } from "react";
import { TimerContext } from "../../Context/TimerContext";
import sachin from "../../Images/sachin.png";
import { RiHome4Line } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { GoogleLogout } from "react-google-login";
import { BiLogOutCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import Empty from "../../Utils/Components/Empty";
import { NavLink } from "react-router-dom";
import { CommonContext } from "../../Context/CommonContext";

const ProfileDetails = () => {
  const containerRef = useRef();
  const { dispatchTimerEvent } = useContext(TimerContext);
  const { dispatchUserEvent, profile } = useContext(CommonContext);
  const [closeProfile, setCloseProfile] = useState(false);
  const today = new Date();
  const currentYear = today.getFullYear();
  const [dp, setDp] = useState();

  useEffect(() => {
    // It's functionality is that when we click outside the profile box the profile box will be closed
    window.addEventListener("mousedown", checkContainer);
    return () => {
      window.removeEventListener("mousedown", checkContainer);
    };
  }, []);

  // this function will check weather the user click is inside or outside
  const checkContainer = (e) => {
    try {
      if (containerRef.current.contains(e.target)) {
        return;
      }
      closeNavBar(150);
    } catch (error) {
      console.log(error.message);
    }
  };

  //*For closing NavBar with animation
  const closeNavBar = (time) => {
    setCloseProfile(true);
    setTimeout(() => {
      dispatchTimerEvent("ADD NAV", {
        value: false,
      });
    }, time);
  };

  const logoutSuccess = (response) => {
    console.log("Google SignOut :: " + response);
    localStorage.removeItem("userId");
    localStorage.removeItem("vote");
    dispatchUserEvent("REMOVE AUTH");
    dispatchTimerEvent("ADD NAV", {
      value: false,
    });

    //*Toast here
  };

  const logoutFailure = (response) => {
    console.log("Google SignOut Error :: " + response);
    //*Toast here [error]
  };

  useEffect(() => {
    if (profile !== null) {
      setDp(profile?.imageUrl)
    }
  }, [profile]);

  return (
    <div
      className={
        closeProfile
          ? "profileDetailsContainer animateFadeFromRight"
          : "profileDetailsContainer animateFadeFromLeft"
      }
      ref={containerRef}
    >
      <div className="profileNav">
        <p className="userProfileToken">123</p>
        <GoogleLogout
          clientId="573874724070-1fjgnfrd1r6m0i9jinivcbtdtkqt67rl.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="logoutButton"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <BiLogOutCircle /> Logout
            </button>
          )}
          buttonText="Logout"
          onLogoutSuccess={logoutSuccess}
          onFailure={logoutFailure}
        />
      </div>
      <div className="profileBox">
        <img src={dp} alt={profile?.name} className="profileImage" />
        <p className="userProfileName">{profile?.name}</p>
        <p className="userProfileId">#{profile?.googleId}</p>
      </div>
      <div className="profileMenuBox">
        <NavLink
          className="profileMenuIcons"
          activeClassName="profileMenuIconActive"
          to={"/home"}
          onClick={() => {
            closeNavBar(200);
          }}
        >
          <RiHome4Line />
        </NavLink>
        <p className="profileMenuIcons">
          <IoTrophyOutline />
        </p>
        {/* <IoIosFootball /> */}
        <NavLink
          className="profileMenuIcons"
          to={"/settings"}
          onClick={() => {
            closeNavBar(200);
          }}
          activeClassName="profileMenuIconActive"
        >
          <FiSettings />
        </NavLink>
      </div>
      <div className="profile-menu-tab-main-container">
        <div className="profile-menu-container">
          <Empty />
        </div>
      </div>
      <div className="bottomDesign">
        <p>Betondo &copy; {currentYear}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
