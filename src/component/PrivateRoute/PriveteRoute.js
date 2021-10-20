import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PriveteRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    return (
        <Route
        {...rest}
        render = {({location})=> user.email ? children : <Redirect
        to={{
            pathname: '/register',
            state: {from: location}
        }}
        ></Redirect>}
        >

        </Route>
    );
};

export default PriveteRoute;