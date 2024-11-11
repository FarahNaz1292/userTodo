import React, { useContext, useEffect, useState } from "react";
import { todoContext } from "../../../Provider/TodosProvider";
import TodoTable from "../../SharedPages/TodoTable";
import nodata from "../../../assets/images/noData.png";

const Pending = () => {
  const [pendingTodo, setPendingTodo] = useState([]);
  const { todos } = useContext(todoContext);
  useEffect(() => {
    setPendingTodo(todos.filter((pending) => pending.isCompleted === false));
  }, [todos]);
  return (
    <>
      <div>
        <h3 className="text-center">Pending Todo</h3>
        {pendingTodo.length > 0 ? (
          <TodoTable filterTodo={pendingTodo}></TodoTable>
        ) : (
          <div className="d-flex align-items-center justify-content-center">
            <img src={nodata} alt="" className="nodata-img" />
          </div>
        )}
      </div>
    </>
  );
};

export default Pending;
