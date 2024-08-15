import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import Url from "./url";
import { isLoggedIn } from "./helper";

export function PrivateRoute({ redirectTo = Url.LOGIN }) {
    return isLoggedIn() ? <Outlet /> : <Navigate to={redirectTo} />;
}
