import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { todoContext } from "../../../Provider/TodosProvider";
import moment from 'moment'

const Home = () => {
  const { todos, setTodo } = useContext(todoContext);
  // const payLoad = {
  //   taskName,
  //   taskAssignerName,
  //   date: date.format("MM DD YYYY"),
  //   time: time.format("hh:mm a"),
  // };
  return (
    <>
      <div className="main-todo container">
        <div className="d-flex flex-column">
          <div className="task-rendering-block">
            <div className="task-rendering-inner-block">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Task Name</th>
                      <th scope="col">User</th>
                      <th scope="col">Time</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      todos?.length > 0 && todos.map((todo, i) => <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{todo?.name}</td>
                        <td>{todo?.user}</td>
                        <td>{moment(todo.date).format('DD-MM-YYYY')}</td>
                        <td className="task-icons d-flex gap-3 fs-3 ">
                          <FaEdit />
                          <CiClock2 />
                          <AiOutlineDelete />
                        </td>
                      </tr>)
                    }
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
