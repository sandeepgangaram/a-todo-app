import React, { useRef, useContext } from "react";
import Button from "./ui/Button";
import { useState } from "react";
import classes from "./AddTask.module.css";
import axios from "axios";
import TodosContext from "../store/todo-context";

const AddTask = () => {
  const { addTodo } = useContext(TodosContext);
  const inputRef = useRef();
  const [submitted, setIsSubmitted] = useState(false);
  const [isError, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    if (input.trim().length >= 30) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    const todo = {
      userId: 1,
      title: input.trim(),
      completed: false,
    };

    const res = await axios.post(`${process.env.HOST}api/todos`, todo);

    addTodo(res.data.data);
    inputRef.current.value = "";
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="task">Add a new task in the list</label>
        <div className={classes.input__container}>
          <input
            type="text"
            id="task"
            ref={inputRef}
            placeholder="Enter the task here"
          />
          <Button
            onClick={() => {
              return;
            }}
          >
            Submit
          </Button>
        </div>
      </form>
      <div
        className={
          submitted || isError ? classes.message : classes.message__hidden
        }
      >
        {submitted && <p>Added task in to-do list</p>}
        {isError && <p>Task description should be less than 30 characters.</p>}
      </div>
    </>
  );
};

export default AddTask;
