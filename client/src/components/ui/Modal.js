import React from "react";
import classes from "./Modal.module.css";
const Modal = ({ onCancel, onConfirm, data }) => {
  function cancelHandler() {
    onCancel();
  }
  return (
    <div className={classes.modal}>
      <div className={classes.title}>
        <h3>Delete</h3>
        <h4>{data.title}</h4>
      </div>
      <div className={classes.actions}>
        <p>Are you sure?</p>
        <div>
          <button className="btn btn--alt" onClick={cancelHandler}>
            Cancel
          </button>
          <button className="btn" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
