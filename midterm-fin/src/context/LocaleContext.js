import React from "react";

export const initialContext = {
  locale: "",
  toggleLocale() {},
};

const localeContext = React.createContext("ge");

export default localeContext;
