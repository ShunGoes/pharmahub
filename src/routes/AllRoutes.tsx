/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "../layout";
import { lazy } from "react";
import SelectSigninLayout from "../layout/authLayout/selectAuth/SelectSigninLayout";
import SelectSignupLayout from "../layout/authLayout/selectAuth/SelectSignupLayout";
import { UserSigninLayout, UserSignupLayout } from "../layout/authLayout";
import ShopPage from "../pages/shop/ShopPage";
import ShopLayout from "../pages/shop/ShopLayout";
import ShopById from "../pages/shop/shopById";


const LandingPage = lazy(() => import("../pages/homePage/LandingPage"));
const SelectSignin = lazy(() => import("../pages/auth/selectAuthPages/SelectSignin"));
const SelectSignup = lazy(() => import("../pages/auth/selectAuthPages/SelectSignup"));
const UserSignin = lazy(() => import("../pages/auth/userAuthPages/UserSignin"))
const UserSignup = lazy(() => import("../pages/auth/userAuthPages/UserSignup"))
const CartPage = lazy(() => import("../pages/cart/cart"))


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
        path: "/userSignin",
        element: <UserSigninLayout />,
        children: [
            {
                index: true,
                element: <UserSignin />
            }
        ]
    },
    {
        path: "/userSignup",
        element: <UserSignupLayout />,
        children: [
            {
                index: true,
                element: <UserSignup />
            }
        ]
    },
    {
        path: "/selectSignin",
        element: <SelectSigninLayout />,
        children: [
            {
                index: true,
                element: <SelectSignin />
            }
        ]
    },
    {
        path: "/selectSignup",
        element: <SelectSignupLayout />,
        children: [
            {
                index: true,
                element: <SelectSignup />
            }
        ]
    },
    {
        path: "/shop",
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <ShopPage />
            }
        ]
    },
    {
        path: "/shopbyid",
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <ShopById />
            }
        ]
    },
    {
        path: "/cart",
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <CartPage />
            }
        ]
    },
])