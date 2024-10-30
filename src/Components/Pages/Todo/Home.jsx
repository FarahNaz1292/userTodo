import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import TodosProvider, { todoContext } from "../../../Provider/TodosProvider";

const Home = () => {
  const { todos, setTodos } = useContext(todoContext);
  console.log(todos);

  return (
    <>
      <div className="main-todo container">
        <div className="d-flex flex-column">
          <div className="task-rendering-block">
            <div className="task-rendering-inner-block">
              <div>
                <table className="d-flex flex-column">
                  <thead>
                    <tr>
                      {/* <th scope="col">ID</th> */}
                      <th scope="col">TaskName</th>
                      <th scope="col">User</th>
                      <th scope="col">Time</th>
                      <th scope="col">
                        <span className="task-icons d-flex gap-3 fs-3 ">
                          {" "}
                          <FaEdit />
                          <CiClock2 />
                          <AiOutlineDelete />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {todos?.map((todo, i) => {
                      return (
                        <tr key={i}>
                          <td>{todo.taskName}</td>
                          <td>{todo.user}</td>
                          <td>{todo.date}</td>
                          <td className="task-icons d-flex gap-3 fs-3 ">
                            <FaEdit />
                            <CiClock2 />
                            <AiOutlineDelete />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="task-rendering-block">
            <h3 className="fs-2 fw-bold p-4">Completed</h3>
            <div className="task-rendering-inner-block">
              <table>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>TaskName</td>
                    <td>TaskAssignerName</td>
                    <td>Date</td>
                    <td className="task-icons d-flex gap-3 fs-3 ">
                      <FaEdit />
                      <CiClock2 />
                      <AiOutlineDelete />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
