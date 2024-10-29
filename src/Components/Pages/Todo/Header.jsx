import { useContext } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { todoContext } from "../../../Provider/TodosProvider";

const Header = () => {
  const { todo, setTodo } = useContext(todoContext);
  const handleClick = (e) => {
    e.preventDefault();
    if (tableData) {
      setTodo(payLoad);
    } else {
      <div>
        <img src="assets/images/nodata.avif" alt="" />
      </div>;
    }
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
            <button>Today</button>
            <button>Pending</button>
            <button>Overdue</button>
            <button>Completed</button>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between m-3">
            <h3 className="fs-2 fw-bold">Tasks</h3>
            <button className="add-todo-btn" onClick={handleClick}>
              <CiCirclePlus className="fs-3" />
              {""}Add Task{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
