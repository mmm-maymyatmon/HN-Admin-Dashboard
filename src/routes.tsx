import { createBrowserRouter } from "react-router";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Permissions from "./pages/Permissions";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/dashboard",
                Component: Dashboard,
            },
            {
                path: "/orders",
                Component: Orders,
            },
            {
                path: "/products",
                Component: Products,
            },
            {
                path: "/customers",
                Component: Customers,
            },
            {
                path: "/settings",
                Component: Settings,
            },
            {
                path: "/permissions",
                Component: Permissions,
            }
        ]
    },
])