import React, { useContext, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import Button from "./components/ui/Button";
import TodosContext from "./store/todo-context";

const App = () => {
  const { allTodos, sortByCompletedFirst, sortByCompletedLast } =
    useContext(TodosContext);
  const [todos, setTodos] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    setTodos([...allTodos]);
  }, [allTodos]);

  const sortHandler = () => {
    setIsSorted((prev) => !prev);
  };
  return (
    <>
      <h1 className="heading">To-Do List</h1>

      <AddTask />
      <div className="btn__sort" onClick={sortHandler}>
        {!isSorted ? (
          <Button onClick={() => sortByCompletedFirst()}>Sort Completed</Button>
        ) : (
          <Button onClick={() => sortByCompletedLast()}>Sort Incomplete</Button>
        )}
      </div>
      <TodoList todos={todos} />
    </>
  );
};

export default App;
