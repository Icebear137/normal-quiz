const Question = ({ questions, handleAnswerOptionClick }) => {

    return (
        <>
            <div className="question-section">
                <div className="question-count">
                    <span>Question {questions.questionID}</span>
                </div>
                <div className="question-text">{questions.questionText}</div>
            </div>
            <div className="answer-section">
                {questions.answerOptions.map((answerOption, questionID) => (
                    <button key={questionID} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
            </div>
        </>
    );
}

export default Question;