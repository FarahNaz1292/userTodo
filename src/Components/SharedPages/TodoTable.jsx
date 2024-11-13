import dayjs from "dayjs";
import React, { useContext, useRef, useState } from "react";
import { getEmail, todoContext } from "../../Provider/TodosProvider";
// import { Checkbox, DatePicker, Modal, TimePicker } from "antd";
import { FaClock, FaEdit, FaRegClock } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { ActionIcon, Checkbox, Modal } from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";

const TodoTable = (props) => {
  const { todos, deleteTodos, setTodos, state, dispatch, actionTypes } = useContext(todoContext);
  const [showEditModal, setEditModal] = useState(false);
  const [error, setError] = useState("");
  const email = getEmail();
  const [selectTodo, setSelectTodo] = useState("");
  const [editTaskName, setEditTaskName] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("HH:MM");
  const dateFormat = "MM/DD/YYYY";

  const onChange = (checked, todo) => {
    const updatedTodos = todos.map(t => {
      if (t.id === todo.id) {
        return {
          ...t,
          isCompleted: checked
        }
      }

      else {
        return t
      }
    })

    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };


  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editTaskName && editTime) {
      setError("");
      const editData = {
        email,
        taskName: editTaskName,
        date: editDate,
        time: editTime,
      };
      console.log(editData);
      // dispatch(selectTodo.id, editData);
      dispatch(
        { type: actionTypes.EDIT_TODO, id: selectTodo.id, updatedData: editData }
      );
      setEditTime("");
      setEditDate("");
      setEditModal(false);
    } else {
      setError("Please fill out all feilds!");
    }
  };


  const handleEdit = (todo) => {
    setEditModal(true);
    setSelectTodo(todo);
    setEditDate(dayjs(todo.date))
    setEditTime(todo.time)
  };

  const ref = useRef(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <FaClock />
    </ActionIcon>
  );

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
                            onChange(e.currentTarget.checked, todo);
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


          {showEditModal && (
            <Modal
              centered
              opened={showEditModal}
              onClose={() => setEditModal(false)}
            >
              <div>
                <div>
                  <h3 className="p-2 fs-2">Edit your Schedule</h3>
                </div>
                <form onSubmit={handleEditSubmit}>
                  <input
                    className="modal-input mx-4"
                    type="text"
                    name="name"
                    defaultValue={selectTodo.taskName}
                    placeholder="Enter your Task"
                    onChange={(e) => setEditTaskName(e.target.value)}
                  />
                  <input
                    className="modal-input"
                    type="text"
                    name="user"
                    value={getEmail()}
                    placeholder="Enter Your Email"
                    disabled={true}
                  />
                  <div className="date-picker d-flex align-items-center justify-content-center">
                    <p className="modal-input fs-4 m-2">
                      <MdOutlineDateRange />
                      Choose a Date
                    </p>
                    {/* <DatePicker
                      defaultValue={dayjs("10/01/2024", dateFormat)}
                      format={dateFormat}
                      onChange={(date) => setEditDate(date)}
                    /> */}
                    <DatePickerInput value={editDate} onChange={(date) => setEditDate(date)} />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="modal-input fs-4 m-2">
                      <FaRegClock />
                      Choose a time
                    </p>
                    <TimeInput
                      value={editTime}
                      onChange={(event) => setEditTime(event.currentTarget.value)}
                      label="Click icon to show browser picker"
                      ref={ref}
                      rightSection={pickerControl} />
                  </div>
                  {error && (
                    <div>
                      <p>{error}</p>
                    </div>
                  )}
                  <button
                    className="m-4 add-todo-btn"
                    type="submit"
                  // onClick={handleEditSubmit}
                  >
                    Edit Your Schedule
                  </button>
                </form>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoTable;
