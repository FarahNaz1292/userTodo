import { useContext } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { todoContext } from "../../../Provider/TodosProvider";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { todos, setTodo, addNewTodo } = useContext(todoContext);
  const handleClick = (e) => {
    e.preventDefault();
    // if (tableData) {
    //   setTodo(payLoad);
    // } else {
    //   <div>
    //     <img src="assets/images/nodata.avif" alt="" />
    //   </div>;
    // }
    const data = {
      id: 434343,
      name: 'todo static',
      date: new Date(),
      time: new Date(),
      user: '123@gmail.com'
    }

    addNewTodo(data)
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
            <NavLink className={({ isActive }) => isActive ? 'active button' : 'button'} to={'/today'}>Today</NavLink>
            <Link className="button" to={'/pending'}>Pending</Link>
            <Link className="button" to={'/Overdue'}>Overdue</Link>
            <Link className="button" to={'/Overdue'}>Overdue</Link>
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
