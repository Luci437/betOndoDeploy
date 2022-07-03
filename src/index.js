import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LastLocationProvider } from "react-router-last-location";
import { HashRouter, Switch } from "react-router-dom";
import { TimerProvider } from "./Context/TimerContext";
import { CommonProvider } from "./Context/CommonContext";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <TimerProvider>
          <LastLocationProvider>
            <CommonProvider>
              <App />
            </CommonProvider>
          </LastLocationProvider>
        </TimerProvider>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
