import dayjs from "dayjs";
import React, { useContext } from "react";
import { todoContext } from "../../Provider/TodosProvider";
import { Checkbox } from "antd";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const TodoTable = (props) => {
  const { todos, handleEdit, deleteTodos } = useContext(todoContext);

  const onChange = (e, todo) => {
    console.log(`checked = ${e.target.checked}`);
    const isChecked = e.target.checked;
    const todoToUpdate = todos.find((item) => item.id === todo.id);
    if (todoToUpdate) {
      todoToUpdate.isCompleted = isChecked;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  return (
    <>
      {" "}
      <div className="main-todo container">
        <div className="d-flex flex-column">
          <div className="task-rendering-block">
            <div className="task-rendering-inner-block">
              <table className="d-flex flex-column ">
                <thead>
                  <tr>
                    <th className="my-4"></th>
                    {/* <th>ID</th> */}
                    <th>Task Name</th>
                    <th>User</th>
                    <th>Date</th>
                    <th scope="col">
                      <span className="task-icons d-flex gap-3 fs-3 ">
                        {" "}
                        <button>
                          <FaEdit />
                        </button>
                        <button>
                          <AiOutlineDelete />
                        </button>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.filterTodo.map((todo) => (
                    <tr key={todo.id}>
                      <td>
                        <Checkbox
                          onChange={(e) => {
                            onChange(e, todo);
                          }}
                          checked={todo.isCompleted}
                        />
                      </td>
                      {/* <td>{todo.id}</td> */}
                      <td>{todo.taskName}</td>
                      <td>{todo.email}</td>
                      <td>
                        {dayjs(todo.date).format("MM-DD-YYYY")} {todo.time}
                      </td>
                      <td className="task-icons d-flex gap-3 fs-3">
                        <button onClick={() => handleEdit(todo)}>
                          <FaEdit />
                        </button>
                        <button onClick={() => deleteTodos(todo.id)}>
                          <AiOutlineDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTable;
