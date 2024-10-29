import React, { createContext, useContext, useState } from "react";

export const todoContext = createContext();

const TodosProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const value = { setTodo, todo };
  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};

export default TodosProvider;
