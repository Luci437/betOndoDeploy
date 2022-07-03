// This component is used to Login users to site.
// The mode of login used is Google Authentication. Anyone with Google email can
// login. When user login we take there some public information such as
// name, email, imageUrl, googleId
// using GoogleId we authenticate user when they login in future.

import React from "react";
import loginWall from "../../Images/loginWall.jpg";
import { GoogleLogin } from "react-google-login";
import { ImGoogle2 } from "react-icons/im";
import { useContext } from "react";
import { siteConstant } from "../../Constants/commonConstants";
import { CommonContext } from "../../Context/CommonContext";
import { useHistory} from 'react-router-dom'


const Login = () => {
  const { dispatchUserEvent } = useContext(CommonContext);
  const history = useHistory();

  // When Google signIn is success this function will be called
  const onLoginSuccess = (response) => {
    console.log(response);
    //*Toast here
    dispatchUserEvent("ADD AUTH", {
      value: true,
    });
    dispatchUserEvent("ADD PROFILE", {
      value: response?.profileObj
    });
    localStorage.setItem("profile", JSON.stringify(response?.profileObj));
    localStorage.setItem("userId", response?.googleId);
    history.push("/home")
  };

  // When Google signIn is failed this function will be called
  const onLoginFailure = (response) => {
    console.log(response);
    //*Toast here
  };

  return (
    <div className="loginContainer">
      <img loading="lazy" src={loginWall} alt="" className="loginWallpaper" />
      <span className="blackCover"></span>

      <div className="loginInfobox">
        <p>Login to play</p>
        <p>A place where you can shine</p>
        <GoogleLogin
          clientId={siteConstant.GOOGLE_TOKEN_ID}
          render={(renderProps) => (
            <button
              className={
                !renderProps.disabled
                  ? "animateFadeIn googleLoginButton"
                  : "googleLoginButton"
              }
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <ImGoogle2 style={{ marginRight: "0.5em", fontSize: "1rem" }} />
              {renderProps.disabled ? "Loading" : "Login With Google"}
            </button>
          )}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Login;
