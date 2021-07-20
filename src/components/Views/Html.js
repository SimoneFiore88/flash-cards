import { useEffect, useState } from "react";
import data from "../../Assets/html";
import Card from "../UI/Card";

export default function Html() {
  const [questions, setQuestions] = useState(data);

  const [active, setActive] = useState(null);

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    let shuffled = questions.sort((a, b) => (Math.random() < 0.5 ? -1 : +1));
    setActive(shuffled[0]);
  }, [questions]);

  const nextQuestion = () => {
    let temp = questions.slice(1);
    setQuestions(temp);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="h1 text-end">
            {data.length - questions.length} / {data.length}
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-5 pt-5">
        {questions.length !== 0 ? (
          <div className="col-12 col-md-4 px-0">
            {active && (
              <Card
                data={active}
                nextQuestion={nextQuestion}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
              />
            )}
          </div>
        ) : (
          <div className="col-12 col-md-4 px-0">
            <p>Mazzo finito, ricominciare?</p>
            <button
              className="btn btn-danger"
              onClick={() => setQuestions(data)}
            >
              Ok
            </button>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-info" onClick={() => setQuestions(data)}>
            Rimescola
          </button>
        </div>
      </div>
    </div>
  );
}
