import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AlertProvider } from "./hooks/useAlert";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AlertProvider>
      <App />
    </AlertProvider>
  </BrowserRouter>,
  rootElement
);
