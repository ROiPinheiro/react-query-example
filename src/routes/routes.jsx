import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import PrivateRoute from "./PrivateRoute";

const Users = lazy(() => import("../pages/Users"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />

        <Route path="users">
          <Route path="/" element={<Users />} />
          <Route path=":id" element={<h2>id</h2>} />
        </Route>

        <Route path="posts">
          <PrivateRoute path="/" element={<Posts />} />
          <PrivateRoute path=":id" element={<h2>id</h2>} />
        </Route>

        <Route path="*" element={<h2>Route not found</h2>} />
      </Routes>
    </Suspense>
  );
};
