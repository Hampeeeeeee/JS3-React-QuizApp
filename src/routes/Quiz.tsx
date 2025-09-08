import { Link } from 'react-router-dom'
import questions from '../quizquestions'
import '../css/quiz.css'

const Quiz = () => {
  return (
    <>
    <h1>Geografi Quiz</h1>
    <div>
        {questions.map((q) => (
            <div className="card" key={q.id}>
                <h3>{q.text}</h3>
                <ul>
                    {q.options.map((option, index) => (
                        <li key={index}>{option}
                        {q.images && q.images[index] && (
                            <img
                            className='question-image'
                            src={q.images[index]}
                            alt={option}
                            />
                        )}
                        </li>
                    ))}
                </ul>
            </div>
            ))}
    </div>
    <Link to="/Result">Visa resultat</Link>
    </>
  )
}
export default Quiz
