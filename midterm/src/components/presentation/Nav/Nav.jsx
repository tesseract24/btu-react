import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LocaleContext from "../../../context/LocaleContext";
import AuthContext from "../../../context/AuthContext";

function Nav(props) {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { authed } = useContext(AuthContext);
  useEffect(() => {
    // console.log("LOCALE updated");
  }, [locale]);

  return (
    <div className="text-center">
      <nav className="nav nav-pills">
        <NavLink to="/" className="nav-link" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="active">
          Login
        </NavLink>
        {authed && (
          <NavLink to="/profile" className="nav-link" activeClassName="active">
            Profile
          </NavLink>
        )}
      </nav>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-secondary"
          disabled={locale === "ge"}
          onClick={() => toggleLocale()}
        >
          GE
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          disabled={locale === "en"}
          onClick={() => toggleLocale()}
        >
          EN
        </button>
      </div>
    </div>
  );
}

export default Nav;
