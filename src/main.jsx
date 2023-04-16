// import 'amfe-flexible'
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./routes/home";
import VR from "./routes/vr";
import ARList from "./routes/ar/list";
import ARDetail from "./routes/ar/detail";
import InteractiveList from "./routes/interactive/list";
import InteractiveDetail from "./routes/interactive/detail";

import ErrorPage from "./routes/error";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "vr",
    element: <VR />,
  },
  { path: "ar/list", element: <ARList /> },
  {
    path: "ar/detail/:arId",
    element: <ARDetail />,
  },
  {
    path: "interactive/list",
    element: <InteractiveList />,
  },
  {
    path: "interactive/detail/:interactiveId",
    element: <InteractiveDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
