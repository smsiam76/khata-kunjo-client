import React, {  useContext } from 'react';
import AuthContext from '../provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Shared/Loader/Loader';

const AdminRoute = ({children}) => {

    const {user, loading, role} = useContext(AuthContext)
    const location = useLocation();

    if(loading || role === null){
        return <Loader />
    }
    if(!user){
        return <Navigate to="/sign-in" state={location.pathname}></Navigate>
    }
    if(role !== "admin"){
        return <Navigate to="/" />
    }

    return children;
};

export default AdminRoute;