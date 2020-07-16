import React from "react";
import { Route, Navigate } from "react-router-dom";

interface RouteProps {
  caseSensitive?: boolean;
  children?: React.ReactNode;
  element?: React.ReactElement | null;
  path?: string;
}

const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const isLogged = true;

  return <>{isLogged ? <Route {...rest} /> : <Navigate to="/home" />}</>;
};

export default PrivateRoute;
