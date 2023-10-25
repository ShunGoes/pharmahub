/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "../layout";
import { lazy } from "react";
import ShopPage from "../pages/shop/ShopPage";
// import LandingPage from "../pages/homePage/LandingPage";


const LandingPage = lazy(() => import("../pages/homePage/LandingPage"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    },
    {
        path: "/shop",
        element: <HomePageLayout />,
        children: [
            {
                index: true,
                element: <ShopPage />
            }
        ]
    },
])