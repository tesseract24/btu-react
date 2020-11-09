import React from "react";
import PropTypes from "prop-types";

import styles from "./Form.module.css";

function Form({ children, className, onSubmit }) {
  return (
    <form
      className={`${styles["base--form"]} ${className}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
