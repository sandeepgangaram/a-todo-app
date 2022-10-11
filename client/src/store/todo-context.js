import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

HOST = process.env.HOST || "https://todo-rivert.herokuapp.com/";

const TodosContext = createContext({
  allTodos: [],
  addTodo: ({}) => {},
  deleteTodo: (id) => {},
  toggleComplete: () => {},
  sortByCompletedFirst: () => {},
  sortByCompletedLast: () => {},
});

export function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${HOST}api/todos`);
      return data.data;
    };

    fetchData()
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((el) => el._id !== id));
  };

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    const todo = todos.find((el) => el._id === id);
    todo.completed = !todo.completed;
    setTodos([...todos, todo]);
  };

  const sortByCompletedFirst = () => {
    const sortedData = todos.sort((el) => (el.completed ? -1 : 1));
    setTodos([...sortedData]);
  };
  const sortByCompletedLast = () => {
    const sortedData = todos.sort((el) => (el.completed ? 1 : -1));
    setTodos([...sortedData]);
  };

  const context = {
    allTodos: todos,
    addTodo,
    deleteTodo,
    sortByCompletedFirst,
    sortByCompletedLast,
    toggleComplete,
  };

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosContext;
