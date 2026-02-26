import { createBrowserRouter } from "react-router";

import Demo from "../pages/Demo/Demo";
import Maintenance from "../pages/Maintenance/Maintenance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Maintenance />
    // element: <Demo />
  },
]);

export default router;