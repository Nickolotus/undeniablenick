import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

const Layout = () => <Outlet />;

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: () => import("./pages/Index"),
      },
      {
        path: "about",
        lazy: () => import("./pages/About"),
      },
      {
        path: "coaching",
        lazy: () => import("./pages/Coaching"),
      },
      {
        path: "programs",
        lazy: () => import("./pages/Programs"),
      },
      {
        path: "programs/sardine-fast",
        lazy: () => import("./pages/SardineFast"),
      },
      {
        path: "programs/kettlebell-flow",
        lazy: () => import("./pages/KettlebellFlow"),
      },
      {
        path: "*",
        lazy: () => import("./pages/NotFound"),
      },
    ],
  },
];

export default Layout;
