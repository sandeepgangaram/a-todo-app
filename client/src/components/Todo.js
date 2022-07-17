import React, { useState, useContext } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import classes from "./Todo.module.css";
import axios from "axios";
import Modal from "./ui/Modal";
import Backdrop from "./ui/Backdrop";
import TodosContext from "../store/todo-context";

const Todo = ({ number, data }) => {
  const todoContext = useContext(TodosContext);
  const [isCompleted, setIsCompleted] = useState(data.completed);
  const [modalOpen, setModalOpen] = useState(false);

  function clickHandler() {
    setModalOpen(true);
  }

  function closeHandler() {
    setModalOpen(false);
  }

  const deleteHandler = async () => {
    await axios.delete(`${process.env.HOST}api/todos/${data._id}`);

    todoContext.deleteTodo(data._id);

    setModalOpen(false);
  };

  const toggleComplete = async () => {
    setIsCompleted((prev) => !prev);
    await axios.patch(`${process.env.HOST}api/todos/${data._id}`, {
      completed: !data.completed,
    });
    todoContext.toggleComplete(data._id);
  };

  return (
    <div className={classes.todo__item}>
      <span className={classes.number}>
        <p>{`${number}.`}</p>
      </span>
      <span>
        <Card completed={isCompleted}>
          <h5 className={classes.title}>{data.title}</h5>

          <div className={classes.actions}>
            {isCompleted ? (
              <span className={classes.btn__delete}>
                <button onClick={toggleComplete}>Mark as incomplete</button>
              </span>
            ) : (
              <span>
                <Button onClick={toggleComplete}>Mark as Completed</Button>
              </span>
            )}

            <span className={classes.btn__delete}>
              <button onClick={clickHandler}>Delete</button>
            </span>
          </div>
        </Card>
      </span>
      {modalOpen && (
        <Modal data={data} onCancel={closeHandler} onConfirm={deleteHandler} />
      )}
      {modalOpen && <Backdrop onClick={closeHandler} />}
    </div>
  );
};

export default Todo;
