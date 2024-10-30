import { useContext, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { todoContext } from "../../../Provider/TodosProvider";
import { NavLink } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import { DatePicker } from "antd";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const Header = () => {
  const { todos, setTodos } = useContext(todoContext);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState("00:00");
  const [date, setDate] = useState(new Date());
  const [taskName, setTaskName] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && time) {
      setError("");
    }
    setTodos();
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
            {" "}
            <NavLink
              to="/today"
              className={({ isActive }) =>
                isActive ? "button" : "todo-buttons"
              }
            >
              Today
            </NavLink>
            <NavLink
              to="/pending"
              className={({ isActive }) =>
                isActive ? "button" : "todo-buttons"
              }
            >
              Pending
            </NavLink>
            <NavLink
              to="/overdue"
              className={({ isActive }) =>
                isActive ? "button" : "todo-buttons"
              }
            >
              Overdue
            </NavLink>
            <NavLink
              to="/completed"
              className={({ isActive }) =>
                isActive ? "button" : "todo-buttons"
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
              <ModalComponent showModal={showModal} setShowModal={setShowModal}>
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
                      value={user}
                      placeholder="Enter Your Email"
                      onChange={(e) => setUser(e.target.value)}
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
                      <input
                        type="time"
                        aria-label="Time"
                        onChange={setTime}
                        clearIcon={true}
                        disableClock={"true"}
                        setTime={time}
                      />
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
              </ModalComponent>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
