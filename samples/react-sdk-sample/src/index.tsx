import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigCatProvider, createConsoleLogger } from "configcat-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigCatProvider sdkKey="zVPVCO5_LS9VnDcpIDE84g/zVPVCBScEzDn-VNq0dnYog" options={{logger: createConsoleLogger(3)}}>
      <App />
    </ConfigCatProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
