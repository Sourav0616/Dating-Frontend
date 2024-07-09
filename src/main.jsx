import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/css/index.css";
import "../src/css/input.css";
import store from "./store/index.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Regester from "./components/Regester.jsx";
import Login from "./components/Login.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Slide from "./components/Slide.jsx";
import Lovereactcover from "./components/Lovereactcover.jsx";
import Matchrequestcover from "./components/Matchrequestcover.jsx";
import Massagecover from "./components/Massagecover.jsx";
import Chatcover from "./components/Chatcover.jsx";
import Userprofile from "./components/Userprofile.jsx";
import Blogcover from "./components/Blogcover.jsx";
import Addblog from "./components/Addblog.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Regester /> },
  { path: "/login", element: <Login /> },
  { path: "/chat" , element : <Chatcover/>},
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "/app/addblog", element: <Addblog /> },
      {
        path: "/app/home",
        element: (
          <div className="flex flex-col">
            {" "}
            <Sidebar /> <Slide />{" "}
          </div>
        ),
      },
      {
        path: "/app/react",
        element: (
          <div className="flex flex-col">
            {" "}
            <Sidebar /> <Lovereactcover />{" "}
          </div>
        ),
      },
      {
        path: "/app/matchrequest",
        element: (
          <div className="flex flex-col">
            {" "}
            <Sidebar /> <Matchrequestcover />{" "}
          </div>
        ),
      },
      {
        path: "/app/massage",
        element: (
          <div className="flex flex-col">
            {" "}
            <Sidebar /> <Massagecover />{" "}
          </div>
        ),
      },
      // {
      //   path: "/app/chat",
      //   element: <Chatcover />,
      // },
      {
        path: "/app/profile",
        element: (
          <div className="flex flex-col">
            {" "}
            <Sidebar /> <Userprofile />{" "}
          </div>
        ),
      },
      {
        path: "/app/blog",
        element: (
          <div className="flex flex-col">
            {" "}
            <Sidebar /> <Blogcover />{" "}
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
