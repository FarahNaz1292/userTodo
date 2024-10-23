import React, { createContext } from "react";

export const todoContext = createContext();

const TodosProvider = ({ children }) => {
  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};

export default TodosProvider;
