import React from 'react';
import { 
    Route as ReactDOMRoute,
    RouteProps as ReactRouteProps,
    Redirect
} from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}


const Route: React.FC<RouteProps> =({ 
    isPrivate = false, 
    component: Component, 
    ...rest
    }) => {
    const { data } = useAuth();
    console.log(data);


    const token = localStorage.getItem('@AppParty:token')

    

    return (
        <ReactDOMRoute 
            {...rest} 
            render={({location}) => {
                return isPrivate === !!token ? (
                    <Component />
                ) : (
                    <Redirect to={{ 
                        pathname: isPrivate ? '/' : '/dashboard',
                        state: { from: location }
                }} />
                    
                )
            }} 
        />
    );
}

export default Route;