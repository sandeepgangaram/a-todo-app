import React, { useState } from "react";
import Todo from "./Todo";
import Button from "./ui/Button";
import classes from "./TodoList.module.css";

function TodoList({ todos }) {
  const [pageNumber, setPageNumber] = useState(1);

  const perPage = 9;
  const left = (pageNumber - 1) * perPage;
  const right = pageNumber * perPage;
  const pages = Math.ceil(todos.length / 9);

  const incrementHandler = () => {
    setPageNumber((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setPageNumber((prev) => prev - 1);
  };

  return (
    <>
      <section className="todolist">
        {todos.slice(left, right).map((el, i) => (
          <Todo key={el._id} number={left + i + 1} data={el} />
        ))}
      </section>
      <div className={classes.pages}>
        <span>
          {pageNumber > 1 && pages > 1 && (
            <Button onClick={decrementHandler}>&larr;</Button>
          )}
        </span>
        <span>
          <p>{`Page ${pageNumber}`}</p>
        </span>
        <span>
          {pageNumber + 1 <= pages && (
            <Button onClick={incrementHandler}> &rarr;</Button>
          )}
        </span>
      </div>
    </>
  );
}

export default TodoList;
