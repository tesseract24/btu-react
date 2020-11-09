import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory,} from "react-router-dom";
import Form from "../presentation/Form/Form";
import Input from "../presentation/Input/Input";
import PropTypes from "prop-types";
import LocaleContext from "../../context/LocaleContext";
import AuthContext from "../../context/AuthContext";

// Services
import {
  login,
  setUserSessionToken,
  removeUserSessionToken,
} from "../../services/auth";
import { LoginInputs } from "../../utils/inputs";
import translation from "../../locale";
import styles from "./Login.module.css";

function Login({ showRegister }) {
  const { locale } = useContext(LocaleContext);
  const authContext = useContext(AuthContext);
  const [translate, setTranslate] = useState(translation[locale]);
  const history = useHistory();


  useEffect(() => {
    setTranslate(translation[locale]);
  }, [locale]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      email: event.target[LoginInputs.email.id].value,
      password: event.target[LoginInputs.password.id].value,
    };


    const { response, error } = await login(loginData);

    if (!error) {
      setUserSessionToken(response["token"]);
      authContext.logIn();
      history.push("/");
    } else {
      alert("Error");
    }
  };

  const onLogOut = (event) => {
    removeUserSessionToken();
    authContext.logOut();
  };

  if (authContext.authed) {
    return (
      <div className="text-center">
        <h1 className={`h3 mb-3 font-weight-normal ${styles.error}`}>
          Already logged in.
        </h1>
        <hr />
        <button className="btn btn-info" type="button" onClick={onLogOut}>
          Log Out
        </button>
      </div>
    );
  }

  return (
    <Form className="form-signin" onSubmit={onSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

      <Input {...LoginInputs.email} />

      <Input {...LoginInputs.password} />

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        {translate.login.loginBtn}
      </button>
      <hr />
      <Link className="btn btn-lg btn-secondary btn-block" to="/">
        {translate.login.registerBtn}
      </Link>
    </Form>
  );
}

Login.propTypes = {
  showRegister: PropTypes.func,
};

export default Login;
export const value1 = [LoginInputs.email.id].value