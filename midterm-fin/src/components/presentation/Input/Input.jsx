import React from "react";
import PropTypes from "prop-types";

function Input({
  htmlFor,
  labelClassName,
  labelText,
  type,
  id,
  className,
  placeholder,
  required,
  autoFocus,
  name,
}) {
  return (
    <React.Fragment>
      <label htmlFor={htmlFor} className={labelClassName}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
      />
    </React.Fragment>
  );
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

export default Input;
