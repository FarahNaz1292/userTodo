import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
export const todoContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    console.log(localTodos);

    if (localTodos) {
      setTodos(localTodos); // Set retrieved todos to state
    }
  }, []);
  console.log(todos);

  const addNewTodo = (todo) => {
    console.log(todo);

    const newTodo = [...(todos || []), todo];
    console.log(newTodo);

    setTodos(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };
  const deleteTodos = (id) => {
    const updateToDos = todos.filter((todo) => todo.id !== id);
    setTodos(updateToDos);
    localStorage.setItem("todos", JSON.stringify(updateToDos));
  };

  const value = { setTodos, todos, addNewTodo, deleteTodos };

  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};
export const getEmail = () => {
  const jwtToken = localStorage.getItem("user-token");
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
