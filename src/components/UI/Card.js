import classes from "./Card.module.css";

export default function Card(props) {
  const handleClick = (ev) => {
    ev.stopPropagation();
    props.nextQuestion();
    props.setIsFlipped(false);
  };
  return (
    <>
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
              className="btn btn-danger"
              onClick={(ev) => handleClick(ev)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
