import React, { useContext, useEffect, useState } from "react";
import { todoContext } from "../../../Provider/TodosProvider";
import TodoTable from "../../SharedPages/TodoTable";
import dayjs from "dayjs";
import nodata from "../../../assets/images/noData.png";

const Overdue = () => {
  const { todos } = useContext(todoContext);
  const [overdue, setOverdue] = useState([]);
  console.log(overdue);
  useEffect(() => {
    if (todos) {
      const now = dayjs(); // Get the current date without formatting
      setOverdue(
        todos.filter(
          (todo) =>
            dayjs(todo.date).isBefore(now, "day") && todo.isCompleted === false
        )
      );
    }
  }, [todos, overdue]);

  return (
    <>
      <h3 className="text-center">Overdue Todo</h3>
      {overdue?.length > 0 ? (
        <TodoTable filterTodo={overdue}></TodoTable>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <img src={nodata} alt="" className="nodata-img" />
        </div>
      )}
    </>
  );
};

export default Overdue;
