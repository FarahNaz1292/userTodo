import { useContext, useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { getEmail, todoContext } from "../../../Provider/TodosProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { FaClock, FaRegClock, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import dayjs from "dayjs";
import { ActionIcon, Modal } from "@mantine/core";
import { DatePickerInput, TimeInput } from '@mantine/dates';


const Header = () => {
  const { dispatch, actionTypes } = useContext(todoContext);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState("00:00");
  const [date, setDate] = useState(dayjs());
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");
  const dateFormat = "MM/DD/YYYY";
  const navigate = useNavigate();
  const email = getEmail();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName, time)
    if (taskName && time) {
      setError("");
      const data = {
        email,
        taskName,
        date,
        id: Math.ceil(Math.random() * 100),
        time,
        isCompleted: false,
      };
      console.log(data);
      dispatch({ type: actionTypes.ADD_TODO, todo: data })
      setTime("");
      setDate("");
      setShowModal(false);
    } else {
      setError("Please fill out all feilds!");
    }
  };
  const handleClick = () => {
    localStorage.setItem("user-token", "");
    navigate("/signin");
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
        <div className="header-todo">
          <h2>Todo App</h2>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="btn-segement">
            <div className="todo-buttons">
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "button" : "button-inActive"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/today"
                className={({ isActive }) =>
                  isActive ? "button" : "button-inActive"
                }
              >
                Today
              </NavLink>
              <NavLink
                to="/pending"
                className={({ isActive }) =>
                  isActive ? "button" : "button-inActive"
                }
              >
                Pending
              </NavLink>
              <NavLink
                to="/overdue"
                className={({ isActive }) =>
                  isActive ? "button" : "button-inActive"
                }
              >
                Overdue
              </NavLink>
              <NavLink
                to="/completed"
                className={({ isActive }) => (isActive ? "button" : "")}
              >
                Completed
              </NavLink>
            </div>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="btn btn-primary mx-3 border-0"
            >
              {" "}
              <FaSignOutAlt className="fs-4" />
              Sign out
            </button>
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

            <Modal
              centered
              opened={showModal}
              // onOk={handleSubmit}
              // okText={"Add your Schediule"}
              onClose={() => setShowModal(false)}
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
                    {/* <DatePicker
                      defaultValue={dayjs("10/01/2024", dateFormat)}
                      format={dateFormat}
                      onChange={(date) => setDate(date)}
                    /> */}
                    <DatePickerInput value={date} onChange={(date) => setDate(date)} />

                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="modal-input fs-4 m-2">
                      <FaRegClock />
                      Choose a time
                    </p>
                    {/* <TimePicker
                      use12Hours
                      format="hh:mm a"
                      onChange={setTime}

                    /> */}
                    <TimeInput
                      value={time}
                      onChange={(event) => setTime(event.currentTarget.value)}
                      label="Click icon to show browser picker"
                      ref={ref}
                      rightSection={pickerControl} />
                  </div>
                  {error && (
                    <div>
                      <p>{error}</p>
                    </div>
                  )}
                  <button>Create task</button>
                </form>
              </div>
            </Modal>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
