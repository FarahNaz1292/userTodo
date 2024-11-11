import { useContext, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { getEmail, todoContext } from "../../../Provider/TodosProvider";
import { NavLink } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import { DatePicker, Modal, TimePicker } from "antd";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import dayjs from "dayjs";

const Header = () => {
  const { todos, setTodos, addNewTodo } = useContext(todoContext);

  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState("00:00");
  const [date, setDate] = useState(dayjs());
  const [taskName, setTaskName] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && time) {
      setError("");
    }

    const email = getEmail();

    const todo = {
      id,
      taskName,
      date,
      time,
      email,
    }

    addNewTodo(todo)
  };


  return (
    <>
      {" "}
      <div className="main-todo container">
        <div className="header-todo">
          <h2>Todo App</h2>
        </div>
        <div className="btn-segement">
          <div className="todo-buttons">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "button" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/today"
              className={({ isActive }) =>
                isActive ? "button" : ""
              }
            >
              Today
            </NavLink>
            <NavLink
              to="/pending"
              className={({ isActive }) =>
                isActive ? "button" : ""
              }
            >
              Pending
            </NavLink>
            <NavLink
              to="/overdue"
              className={({ isActive }) =>
                isActive ? "button" : ""
              }
            >
              Overdue
            </NavLink>
            <NavLink
              to="/completed"
              className={({ isActive }) =>
                isActive ? "button" : ""
              }
            >
              Completed
            </NavLink>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between m-3">
            <h3 className="fs-2 fw-bold">Tasks</h3>
            <button
              className="add-todo-btn"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <CiCirclePlus className="fs-3" />
              {""}Add Task{" "}
            </button>
            {showModal && (
              <Modal
                zIndex={10}
                open={showModal}
                onCancel={() => setShowModal(false)}
                maskClosable={false}
                centered
                footer={false}
              >
                <div>
                  <div>
                    <h3 className="p-2 fs-2">Add your Schedule</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <input
                      className="modal-input mx-4"
                      type="text"
                      name="name"
                      value={taskName}
                      placeholder="Enter your Task"
                      onChange={(e) => setTaskName(e.target.value)}
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
                      <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        popupClassName={"date-picker-dropdown"}
                      />
                    </div>
                    <div className="time-picker d-flex align-items-center justify-content-center">
                      <p className="modal-input fs-4 m-2">
                        <FaRegClock />
                        Choose a time
                      </p>
                      <TimePicker use12Hours format="h:mm a" onChange={(time) => setTime(time)} />
                    </div>
                    {error && (
                      <div>
                        <p>{error}</p>
                      </div>
                    )}
                    <button
                      className="mt-4"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Add Your Schedule
                    </button>
                  </form>
                </div>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
