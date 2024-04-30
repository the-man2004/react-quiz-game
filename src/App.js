import { useState } from "react";
import questions from "./data.js";
import Button from "./components/Button.js";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);

  const [wrongAswers, setWrongAnswers] = useState([]);

  const handleStartClick = () => {
    setIsPlaying(true);
  };

  const handleRetryClick = () => {
    // Resetting the Quiz
    setIsPlaying(false);
    setFinishedQuiz(false);
    setProgress(0);
    setScore(0);
  };

  const handleOptionClick = (isCorrect, questionObj) => {
    if (isCorrect) {
      setScore(score + 50);
    } else {
      const newWrongAnswers =
        wrongAswers.length === 0
          ? [questionObj]
          : [...wrongAswers, questionObj];
      setWrongAnswers(newWrongAnswers);
    }

    if (progress + 1 !== questions.length) {
      setProgress(progress + 1);
    } else {
      setFinishedQuiz(true);
    }
  };

  return (
    <div className="p-5 rounded-xl absolute inset-5 max-w-[750px] max-h-[500px] m-auto bg-secondary text-textColor font-bold shadow-2xl">
      {/* Show before game starts */}
      {!isPlaying && !finishedQuiz && (
        <div className="h-full flex flex-col align-middle justify-center">
          {" "}
          <h1 className="text-center font-extrabold text-2xl sm:text-4xl">
            Computer Hardware QUIZ
          </h1>
          <p className="my-5 mx-auto max-w-80 text-center">
            You'll be asked 15 questions to test your computer hardware
            knowledge. Good luck :)
          </p>
          <Button callbackFunc={handleStartClick} text={"START"} />
        </div>
      )}
      {/* Show while playing the game */}
      {isPlaying && !finishedQuiz && (
        <div>
          <div className="flex justify-between">
            <span className="text-lg">
              Question {progress + 1}/
              <span className="text-sm">{questions.length}</span>
            </span>
            <span className="text-lg">score {score}</span>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl text-center font-extrabold sm:text-3xl">
              {questions[progress].question}
            </h2>
            <div className="mx-auto max-w-[500px] mt-5 flex flex-col gap-5">
              {questions[progress].answerOptions.map((option) => (
                <button
                  onClick={() =>
                    handleOptionClick(option.isCorrect, questions[progress])
                  }
                  key={Math.random()}
                  className="py-2 px-5 text-left border-2 border-primary rounded-xl"
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Show if game is over */}
      {finishedQuiz && (
        <div>
          <p>Game over</p>
          <Button callbackFunc={handleRetryClick} text={"RETRY"} />
        </div>
      )}
    </div>
  );
}

export default App;
