import { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit, FaRegClock } from "react-icons/fa";
import nodata from "../../../assets/images/noData.png";
import dayjs from "dayjs";
import { DatePicker, Modal, TimePicker } from "antd";
import { MdOutlineDateRange } from "react-icons/md";
import { todoContext } from "../../../Provider/TodosProvider";
import { getEmail } from "../../../Provider/TodosProvider";

const Home = () => {
  const email = getEmail();
  const [showEditModal, setEditModal] = useState(false);
  const [error, setError] = useState("");
  const [selectTodo, setSelectTodo] = useState("");
  const [editTaskName, setEditTaskName] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("HH:MM");
  const { todos, deleteTodos, editTodo } = useContext(todoContext);
  const dateFormat = "MM/DD/YYYY";
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
      editTodo(selectTodo.id, editData);
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
  };

  return (
    <>
      <div className="main-todo container">
        <div className="d-flex flex-column">
          <div className="task-rendering-block">
            <div className="task-rendering-inner-block">
              <div>
                <table className="d-flex flex-column">
                  <thead>
                    {todos?.length > 0 ? (
                      <tr>
                        {/* <th scope="col">ID</th> */}
                        <th scope="col">TaskName</th>
                        <th scope="col">User</th>
                        <th scope="col">Date</th>
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
                    ) : (
                      ""
                    )}
                  </thead>
                  <tbody>
                    {todos?.length > 0 ? (
                      todos?.map((todo) => {
                        return (
                          <tr key={todo.id}>
                            <td>{todo.taskName}</td>
                            <td>{todo.email}</td>
                            <td>{todo.date} </td>
                            <td className="task-icons d-flex gap-3 fs-3">
                              <button
                                onClick={() => {
                                  handleEdit(todo);
                                }}
                              >
                                <FaEdit />
                              </button>
                              <button onClick={() => deleteTodos(todo.id)}>
                                <AiOutlineDelete />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <div className="d-flex align-items-center justify-content-center">
                        <img src={nodata} alt="" className="nodata-img" />
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showEditModal && (
        <Modal
          centered
          open={showEditModal}
          onOk={handleEditSubmit}
          onCancel={() => setEditModal(false)}
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
                <DatePicker
                  defaultValue={dayjs("10/01/2024", dateFormat)}
                  format={dateFormat}
                  onChange={(date) => setEditDate(date)}
                />
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <p className="modal-input fs-4 m-2">
                  <FaRegClock />
                  Choose a time
                </p>
                <TimePicker use12Hours format="h:mm a" onChange={setEditTime} />
              </div>
              {error && (
                <div>
                  <p>{error}</p>
                </div>
              )}
              {/* <button
                className="m-4 add-todo-btn"
                type="button"
                onClick={handleEditSubmit}
              >
                Edit Your Schedule
              </button> */}
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Home;
