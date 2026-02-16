import { createBrowserRouter } from "react-router";
import Maintenance from "../pages/Maintenance/Maintenance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Maintenance></Maintenance>,
  },
]);

export default router;