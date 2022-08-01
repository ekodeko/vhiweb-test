import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';


function Authenticated({ component: Component, ...rest }) {
    const auth = localStorage.getItem('isLogin');
    let location = useLocation();
    if (auth) {
        return <React.Fragment><Outlet /></React.Fragment>
    } else {
        return <Navigate to={`/login`} state={{ from: location }} replace />
    }
}

export default Authenticated;