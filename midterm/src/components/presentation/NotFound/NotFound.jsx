import React from "react";
import { Link, useLocation } from "react-router-dom";

function NotFound(props) {
  const location = useLocation();
  return (
    <div>
      <h2 className="text-danger">
        Requested {location.pathname} page not found.
      </h2>
      <br />
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default NotFound;
