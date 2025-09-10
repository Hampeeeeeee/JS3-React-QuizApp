import { useState } from "react";
import { Link } from "react-router-dom";
import questions from "../quizquestions";
import "../css/quiz.css";
import QuestionCard from "../components/Question";


const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
  };

  const handleCheck = () => {
    const updatedAnswers = [...answers, selected];
    setShowResult(true);
    setAnswers(updatedAnswers);
    localStorage.setItem("quizAnswers", JSON.stringify(updatedAnswers));
  }

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    setCurrent(current + 1);
  };

  const q = questions[current];

  if (current >= questions.length) {
    return (
      <div>
        <h1>Inga frågor kvar!</h1>
        <Link className="showResult" to="/Result">Visa resultat</Link>
      </div>
    );
  }
  return (
    <>
      <h1>Geografi Quiz</h1>
      <QuestionCard
        question={q}
        selected={selected}
        showResult={showResult}
        handleSelect={handleSelect}
        />
        {!showResult ? (
        <button className="controlNextBtn" onClick={handleCheck} disabled={selected === null}>
          Kontrollera svar
        </button>
        ) : (
            <button className="controlNextBtn" onClick={handleNext}>Nästa fråga</button>
        )}
    </>
  );
};
export default Quiz;
