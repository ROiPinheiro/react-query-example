import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Router>
      <Nav />
      <AppRoutes />
    </Router>
  );
}

export default App;
