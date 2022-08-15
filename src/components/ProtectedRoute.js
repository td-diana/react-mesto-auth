import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Routes>
      <Route>
        {() =>
          props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" />
        }
      </Route>
    </Routes>
  );
}

export default ProtectedRoute;
