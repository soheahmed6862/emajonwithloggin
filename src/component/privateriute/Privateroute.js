import React from 'react';
import { Redirect, Route } from 'react-router';

const Privateroute = (children, ...rest ) => {
    return (
        <div>
            
            <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />

        </div>
    );
};

export default Privateroute;