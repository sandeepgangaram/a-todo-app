import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import "core-js/stable";
import { TodosContextProvider } from "./store/todo-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
);
