import classes from "./Card.module.css";
import { Animated } from "react-animated-css";
import { useState } from "react";

export default function Card(props) {
  const handleClick = (ev) => {
    ev.stopPropagation();
    setIsVisible(false);
    props.setIsFlipped(false);
    setTimeout(() => {
      setIsVisible(true);
      props.nextQuestion();
    }, 1000);
  };

  const [isVisible, setIsVisible] = useState(true);

  return (
    <Animated
      animationIn="zoomInDown"
      animationOut="zoomOutDown"
      isVisible={isVisible}
      animationOutDuration={500}
    >
      <div
        className={classes.card + (props.isFlipped ? " " + classes.active : "")}
        onClick={() => props.setIsFlipped(!props.isFlipped)}
      >
        <div className={classes["card-inner"]}>
          <div className={classes["card-front"]}>
            <p>{props.data.question}</p>
          </div>
          <div className={classes["card-back"]}>
            <p>{props.data.answer}</p>
            <button
              className="btn btn-outline-warning rounded-0"
              onClick={(ev) => handleClick(ev)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Animated>
  );
}
