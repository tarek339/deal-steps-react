import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { store } from "./hooks/redux/store.ts";
import { Provider } from "react-redux";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

axios.interceptors.request.use((request) => {
  request.headers.Authorization = localStorage.getItem("token");
  return request;
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
