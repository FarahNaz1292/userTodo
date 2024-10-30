import { createContext, useEffect, useState } from "react";

import '../Styles/Pages/_global-import.scss'

export const todoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodosProvider = ({ children }) => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem('todos')
    setTodo(JSON.parse(localTodos))
  }, [])


  const addNewTodo = (todo) => {
    const newTodo = [...todos, todo]
    setTodo(newTodo)
    localStorage.setItem('todos', JSON.stringify(newTodo))
  }

  // const updateTodo = (id, todo) => {

  // }

  const value = { setTodo, todos, addNewTodo };
  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};

export default TodosProvider;
