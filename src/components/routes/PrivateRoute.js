import React, { useContext, useEffect} from 'react';
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...props}) => {

    const authContext = useContext(AuthContext);
    const {  authUser, loading, userAuth } = authContext;

    useEffect(() => {
        userAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Route
        { ...props } render={ props => !authUser && !loading ? (
            <Redirect to="/"/>
        ): (
            <Component {...props}/>
        )}
        />
    )
}

export default PrivateRoute;
