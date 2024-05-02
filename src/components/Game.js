const Game = ({ progress, questions, score, setPaused, handleOptionClick }) => {
  return (
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
  );
};

export default Game;
