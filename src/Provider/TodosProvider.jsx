import React, { createContext } from "react";

export const todoContext = createContext();

const TodosProvider = ({ children }) => {
  const value = {};
  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};

export default TodosProvider;
