import React, { useContext, useEffect, useState } from "react";
import { todoContext } from "../../../Provider/TodosProvider";
import TodoTable from "../../SharedPages/TodoTable";
import nodata from "../../../assets/images/noData.png";

const Completed = () => {
  const { todos } = useContext(todoContext);
  const [completedTodo, setCompletedTodo] = useState([]);
  useEffect(() => {
    setCompletedTodo(todos.filter((schedule) => schedule.isCompleted === true));
  }, [todos]);
  console.log(completedTodo);

  return (
    <>
      <h3 className="text-center">Completed Todo</h3>
      {completedTodo.length > 0 ? (
        <TodoTable filterTodo={completedTodo}></TodoTable>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <img src={nodata} alt="" className="nodata-img" />
        </div>
      )}
    </>
  );
};

export default Completed;
