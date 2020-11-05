import React, { useState, useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Nav from "./components/presentation/Nav/Nav";
import NotFound from "./components/presentation/NotFound/NotFound";
import PrivateRoute from "./components/presentation/PrivateRoute/PrivateRoute";

import LocaleContext from "./context/LocaleContext";
import AuthContext, {
  initialContext as initialAuthContext,
} from "./context/AuthContext";

import "./App.css";
import { getUserSessionToken } from "./services/auth";

function App() {
  // const [showLoginForm, setShowLoginForm] = useState(true);
  const defaultLocaleValue = useContext(LocaleContext);
  // const authed = useContext(AuthContext);

  const [locale, setLocale] = useState(defaultLocaleValue);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (getUserSessionToken()) {
      setAuthed(true);
    }
  }, []);

  const initialLocaleContext = {
    locale,
    toggleLocale() {
      if (locale === "en") setLocale("ge");
      else setLocale("en");
    },
  };

  const initialAuthContext = {
    authed,
    logOut() {
      setTimeout(() => {
        setAuthed(false);
      }, 1000);
    },
    logIn() {
      setTimeout(() => {
        setAuthed(true);
      }, 2000);
    },
  };

  return (
    <LocaleContext.Provider value={initialLocaleContext}>
      <AuthContext.Provider value={initialAuthContext}>
        <Nav />
        <hr />
        <div className="container text-center">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute
              to="/profile"
              render={(props) => {
                return <h2>Profile</h2>;
              }}
            />

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </AuthContext.Provider>
    </LocaleContext.Provider>
  );
}

export default App;
