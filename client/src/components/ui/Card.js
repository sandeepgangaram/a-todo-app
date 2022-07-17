import React from "react";
import classes from "./Card.module.css";
import Icon from "../../../public/accept.png";

const Card = ({ completed, children }) => {
  return (
    <div className={completed ? classes.card__completed : classes.card}>
      {completed && (
        <span className={classes.tick}>
          <img src={Icon} />
        </span>
      )}
      {children}
    </div>
  );
};

export default Card;
