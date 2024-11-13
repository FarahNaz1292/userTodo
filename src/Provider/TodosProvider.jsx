import { createContext, useEffect, useReducer, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
export const todoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodosProvider = ({ children }) => {
  // const [editTodos, setEditTodos] = useState("");
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const localTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  //   console.log(localTodos);

  //   if (localTodos) {
  //     setTodos(localTodos); // Set retrieved todos to state
  //   }
  // }, []);
  // console.log(todos);

  // const addNewTodo = (todo) => {
  //   console.log(todo);

  //   const newTodo = [...(todos || []), todo];
  //   console.log(newTodo);

  //   setTodos(newTodo);
  //   localStorage.setItem("todos", JSON.stringify(newTodo));
  // };


  // const deleteTodos = (id) => {
  //   const updateToDos = todos.filter((todo) => todo.id !== id);
  //   setTodos(updateToDos);
  //   localStorage.setItem("todos", JSON.stringify(updateToDos));
  // };



  const editTodo = (id, updatedData) => {
    const updateEditTodos = todos?.map((todo) =>
      todo.id === id
        ? {
          ...todo,
          ...updatedData,
        }
        : todo
    );
    setTodos(updateEditTodos);
    localStorage.setItem("todos", JSON.stringify(updateEditTodos));
  };
  // const navigate = useNavigate();

  // const value = {
  //   setTodos,
  //   todos,
  //   addNewTodo,
  //   deleteTodos,
  //   editTodo,
  //   editTodos,
  //   setEditTodos,
  //   getEmail,
  //   navigate,
  // };

  const initialState = {
    todos: [],
    error: false,
    loading: false
  }

  const actionTypes = {
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO",
    UPDATE_STATE: "UPDATE_STATE",
    EDIT_TODO: "EDIT_TODO"
  }

  const todoReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.ADD_TODO:
        return { ...state, todos: [...state.todos, action.todo] };

      case actionTypes.DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.id)
        };

      case actionTypes.UPDATE_STATE:
        return {
          ...action.data
        };
      case actionTypes.EDIT_TODO:
        return {
          ...state,
          todos: state.todos?.map((todo) =>
            todo.id === action.id
              ? {
                ...todo,
                ...action.updatedData,
              }
              : todo
          )
        }
    }
  }

  const [state, dispatch] = useReducer(todoReducer, initialState)


  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(localTodos);

    if (localTodos) {
      dispatch({ type: actionTypes.UPDATE_STATE, data: localTodos }); // Set retrieved todos to state
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const value = { state, dispatch, actionTypes }

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
};

export default TodosProvider;
