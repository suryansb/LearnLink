import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigations from '../navbar/Navbar';
import "./QuizDisplay.css";

function QuizDisplay() {
    const location = useLocation();
    const quizData = JSON.parse(location.state.quizData);
    const [selectedOptions, setSelectedOptions] = useState(new Array(quizData.questions.length).fill(null));

    const handleOptionSelect = (questionIndex, optionIndex) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(updatedSelectedOptions);
    };

    const checkAnswer = (questionIndex) => {
        return selectedOptions[questionIndex] === quizData.questions[questionIndex].answer;
    };

    return (
        <>
            <Navigations />
            <div className="quiz-container"> 
                {quizData.questions.map((question, index) => (
                    <div key={index} className="question-container">
                        <h3>{question.question}</h3>
                        <ul className='options-list'>
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex} className='option'>
                                    <input
                                        type="radio"
                                        id={`option${optionIndex}`}
                                        name={`question${index}`}
                                        value={optionIndex}
                                        onChange={() => handleOptionSelect(index, optionIndex)}
                                    />
                                    <label htmlFor={`option${optionIndex}`}>{option}</label>
                                </li>
                            ))}
                        </ul>
                        {selectedOptions[index] !== null && (
                            <p className={checkAnswer(index) ? 'correct' : 'incorrect'}>
                                {checkAnswer(index) ? 'Correct answer!' : 'Incorrect answer!'}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default QuizDisplay;


{/* import { useLocation } from 'react-router-dom';
import Navigations from '../navbar/Navbar';
import "./QuizDisplay.css"
function QuizDisplay() {
    const location = useLocation();
    const quizData = JSON.parse(location.state.quizData);

    return (
        <>
        <Navigations/>
        <div className= "quiz-container"> 
            {quizData.questions.map((question, index) => (
                <div key={index} className="question-container">
                    <h3>{question.question}</h3>
                    <ul className='options-list'>
                        {question.options.map((option, optionIndex) => (
                            <li key={optionIndex} className='option'>
                                <input
                                    type="radio"
                                    id={`option${optionIndex}`}
                                    name={`question${index}`}
                                    value={optionIndex}
                                />
                                <label htmlFor={`option${optionIndex}`}>{option}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        </>
    );
}

export default QuizDisplay;
*/}