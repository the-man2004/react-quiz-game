import { useState } from "react";
import questions from "./data.js";
import Start from "./components/Start.js";
import GameOver from "./components/GameOver.js";
import Paused from "./components/Paused.js";
import Game from "./components/Game.js";

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
        <Start handleStartClick={handleStartClick} />
      )}

      {/* Show while playing the game */}
      {isPlaying && !finishedQuiz && (
        <Game
          progress={progress}
          questions={questions}
          score={score}
          setPaused={setPaused}
          handleOptionClick={handleOptionClick}
        />
      )}

      {/* Show if the game is paused */}
      {paused && !finishedQuiz && (
        <Paused handleRetryClick={handleRetryClick} setPaused={setPaused} />
      )}

      {/* Show if game is over */}
      {finishedQuiz && (
        <GameOver
          score={score}
          questions={questions}
          wrongAnswers={wrongAnswers}
          handleRetryClick={handleRetryClick}
        />
      )}
    </div>
  );
}

export default App;
