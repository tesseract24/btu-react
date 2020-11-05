import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";

function PrivateRoute(props) {
  const [isAuth, setIsAuth] = useState(false);
  const { render } = props;
  const location = useLocation();

  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          fromUrl: location.pathname,
        }}
      />
    );
  }

  return render();
}

export default PrivateRoute;
