import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{}],
  },
]);
