import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
export const todoContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(" ");
  const addNewTodo = (todo) => {
    const newTodo = [...todos, todo];
    setTodos(newTodo);
  };
  const value = { setTodos, todos, addNewTodo };

  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};
export const getEmail = () => {
  const jwtToken = localStorage.getItem("token");
  if (jwtToken) {
    const bearToken = jwtToken.split(" ");
    const decode = jwtDecode(bearToken[1]);
    return decode.email;
  } else {
    return " ";
  }
  console.log(decode);
};

export default TodosProvider;
