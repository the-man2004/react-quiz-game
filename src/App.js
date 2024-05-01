import { useState } from "react";
import questions from "./data.js";
import Button from "./components/Button.js";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [paused, setPaused] = useState(false);

  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleStartClick = () => {
    setIsPlaying(true);
  };

  const handleRetryClick = () => {
    // Resetting the Quiz
    setIsPlaying(false);
    setFinishedQuiz(false);
    setProgress(0);
    setScore(0);
    setWrongAnswers([]);
  };

  const handleOptionClick = (isCorrect, questionObj) => {
    if (isCorrect) {
      setScore(score + 50);
    } else {
      const newWrongAnswers =
        wrongAnswers.length === 0
          ? [questionObj.question]
          : [...wrongAnswers, questionObj.question];
      setWrongAnswers(newWrongAnswers);
    }

    if (progress + 1 !== questions.length) {
      setProgress(progress + 1);
    } else {
      setFinishedQuiz(true);
    }
  };

  return (
    <div className="p-5 rounded-xl absolute inset-5 max-w-[750px] max-h-[500px] m-auto bg-secondary text-textColor font-bold shadow-2xl overflow-y-auto">
      {/* Show before game starts */}
      {!isPlaying && !finishedQuiz && (
        <div className="h-full flex flex-col align-middle justify-center">
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
            <div>
              <span className="text-lg">score {score}</span>
              <button
                onClick={() => setPaused(true)}
                className="ml-3 px-5 py-1 bg-primary text-secondary rounded-full"
              >
                PAUSE
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl text-center font-extrabold sm:text-3xl">
              {questions[progress].question}
            </h2>
            <div className="mx-auto max-w-[500px] mt-5 flex flex-col gap-4">
              {questions[progress].answerOptions.map((option) => (
                <button
                  onClick={() =>
                    handleOptionClick(option.isCorrect, questions[progress])
                  }
                  key={Math.random()}
                  className="py-2 px-5 text-left border-2 border-primary rounded-xl transition hover:scale-105"
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Show if the quiz is paused */}
      {paused && !finishedQuiz && (
        <div className="absolute inset-0 flex flex-col align-middle justify-center gap-4 backdrop-blur-sm">
          <Button
            callbackFunc={() => {
              handleRetryClick();
              setPaused(false);
            }}
            text={"RETRY"}
          />
          <Button callbackFunc={() => setPaused(false)} text={"RESUME"} />
        </div>
      )}

      {/* Show if game is over */}
      {finishedQuiz && (
        <div>
          <h2 className="my-3 text-center font-extrabold text-2xl sm:text-4xl">
            You got {score / 50}/{questions.length}
          </h2>
          <h4 className="mb-3 text-center font-extrabold text-xl sm:text-2xl">
            score {score}
          </h4>
          {wrongAnswers.length !== 0 ? (
            <div className="mt-5 mb-10">
              <h3 className="font-extrabold text-center sm:text-xl">
                Here is what you still need to learn
              </h3>
              <div className="mx-auto max-w-[500px] my-5 flex flex-col gap-4">
                {wrongAnswers.map((question) => (
                  <a
                    href={
                      "https://google.com/search?q=" +
                      question.split(" ").join("+")
                    }
                    className="py-2 px-5 text-left border-2 border-primary rounded-xl transition hover:scale-105"
                    key={Math.random()}
                  >
                    <h3>{question}</h3>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <h3 className="mt-8 mb-12 text-center font-extrabold text-2xl sm:text-4xl">
              CONGRATULATIONS YOU GOT A PERFECT SCORE!
            </h3>
          )}
          <Button callbackFunc={handleRetryClick} text={"RETRY"} />
        </div>
      )}
    </div>
  );
}

export default App;
