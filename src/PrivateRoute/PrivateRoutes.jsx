import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(user){
        return children;
    }
    if(loading){
        return <button className="btn btn-square loading"></button>
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;