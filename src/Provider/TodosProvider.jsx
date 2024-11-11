import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
export const todoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(" ");

  useEffect(() => {
    const localTodos = localStorage.getItem('todos')
    setTodos(JSON.parse(localTodos))
  }, [])


  const addNewTodo = (todo) => {
    const newTodo = [...todos, todo];
    setTodos(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo))
  };
  const value = { setTodos, todos, addNewTodo };

  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};
export const getEmail = () => {
  // const jwtToken = localStorage.getItem("token");
  // if (jwtToken) {
  //   const bearToken = jwtToken.split(" ");
  //   const decode = jwtDecode(bearToken[1]);
  //   return decode.email;
  // } else {
  //   return " ";
  // }
  return '123@gmail.com'
  console.log(decode);
};

export default TodosProvider;
