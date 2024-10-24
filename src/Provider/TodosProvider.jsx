import React, { createContext } from "react";

import '../Styles/Pages/_global-import.scss'

export const todoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodosProvider = ({ children }) => {
  const value = {};
  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};

export default TodosProvider;
