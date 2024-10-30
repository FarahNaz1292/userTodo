import { createContext, useState } from "react";

export const todoContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(" ");
  const addNewTodo = (todo) => {
    const newTodo = [...todos, todo];
    setTodos(newTodo);
  };
  const value = { setTodos, todos, addNewTodo };
  // const jwtToken = localStorage.getItem("token");
  // const decode = jwtDecode(jwtToken);
  // console.log(decode);

  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};

export default TodosProvider;
