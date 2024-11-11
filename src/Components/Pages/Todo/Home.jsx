import { useContext } from "react";

import { todoContext } from "../../../Provider/TodosProvider";

import TodoTable from "../../SharedPages/TodoTable";


const Home = () => {



  const { todos } = useContext(todoContext);



  // const todos = JSON.parse(localStorage.getItem('todos'))

  return (
    <>
      <div className="main-todo container">
        <div className="d-flex flex-column">
          <div className="task-rendering-block">
            <div className="task-rendering-inner-block">
              <div>
                <TodoTable filterTodo={todos} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
