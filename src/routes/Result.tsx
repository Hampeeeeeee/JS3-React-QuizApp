import { Link } from 'react-router-dom'
import React from 'react'
import questions from '../quizquestions';
import "../css/result.css"

const Result = () => {

  const answers = JSON.parse(localStorage.getItem("quizAnswers") || "[]");
  const correct = answers.filter((ans: number | null, index: number) => ans === questions[index].correctIndex).length;

  return (
    <>
    <div className="resultCard">
      <h2>Resultat</h2>
      <p>Du fick <strong>{correct}</strong> av <strong>{questions.length}</strong> rätt!</p>
    </div>
    <Link className="backToHomeBtn" to="/">Tillbaka till första sidan</Link>
    </>
  );
};
export default Result