import React, { useContext, useEffect, useState } from "react";
import { todoContext } from "../../../Provider/TodosProvider";
import dayjs from "dayjs";
import TodoTable from "../../SharedPages/TodoTable";
import nodata from "../../../assets/images/noData.png";

const Today = () => {
  const { todos } = useContext(todoContext);
  const [todayTodo, setTodayTodo] = useState([]);
  const dateToday = dayjs().format(`DD/MM/YYYY`);

  useEffect(() => {
    if (todos) {
      setTodayTodo(
        todos?.filter(
          (todo) =>
            dayjs(todo.date).format("DD/MM/YYYY") === dateToday &&
            todo.isCompleted === false
        )
      );
    }
  }, [todos, todayTodo]);
  console.log(todayTodo);

  return (
    <>
      <h3 className="text-center">Today's Todo</h3>
      {todayTodo?.length > 0 ? (
        <TodoTable filterTodo={todayTodo}></TodoTable>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <img src={nodata} alt="" className="nodata-img" />
        </div>
      )}
    </>
  );
};

export default Today;
