import React, { createContext } from "react";

export const todoContext = createContext();

const TodosProvider = ({ children }) => {
  return (
    <>
      <todoContext.Provider>{children}</todoContext.Provider>
    </>
  );
};

export default TodosProvider;
