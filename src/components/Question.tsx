import React from "react";

type Question = {
  text: string;
  options: string[];
  correctIndex: number;
  images?: string[];
};

type QuestionCardProps = {
  question: Question;
  selected: number | null;
  showResult: boolean;
  handleSelect: (index: number) => void;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selected,
  showResult,
  handleSelect,
}) => (
  <div className="card">
    <h3>Fråga: {question.text}</h3>
    <ul>
      {question.options.map((option: string, index: number) => {
        let optionClass = "option";
        if (showResult) {
          if (index === question.correctIndex) {
            optionClass += " correct";
          } else if (index === selected) {
            optionClass += " incorrect";
          }
        } else if (selected === index) {
          optionClass += " selected";
        }
        return (
          <li
            key={index}
            onClick={() => handleSelect(index)}
            className={optionClass}
          >
            {option}
            {question.images && question.images[index] && (
              <img
                className="question-image"
                src={question.images[index]}
                alt={option}
              />
            )}
          </li>
        );
      })}
    </ul>
  </div>
);
export default QuestionCard;
