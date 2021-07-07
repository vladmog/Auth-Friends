import React from "react";
import { Route, Redirect} from "react-router-dom";

// --- PrivateRoute component

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Let's fill this in with CODE!
  //Private Route checks:
    //1: Is a user logged in
    //2: If a user isn't logged in, redirect.
    return (
      <Route
         {...rest} 
         render = {props => 
            localStorage.getItem('token') ? (<Component {...props}/> ) : (<Redirect to = "/form" />)
         }
      />
    )
    //...rest tells the route what props/paths the Route being passed in had
  

};

export default PrivateRoute;

//Private Route checks:
//1: Is a user logged in
//2: If a user isn't logged in, redirect.


//======================================================

// const PrivateRoute = props => {
//   // Let's fill this in with CODE!

// };

// export default PrivateRoute;