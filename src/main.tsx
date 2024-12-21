import ReactDOM from "react-dom/client";

import App from "./App";
import { StrictMode } from "react";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
  <StrictMode>
      <App/>  

  </StrictMode>
  
  );
} else {
  console.error("Root element not found");
}
