import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

const Layout = () => (
  <HelmetProvider>
    <Outlet />
  </HelmetProvider>
);

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
        path: "*",
        lazy: () => import("./pages/NotFound"),
      },
    ],
  },
];

export default Layout;
