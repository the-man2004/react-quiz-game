import Button from "./Button";

const GameOver = ({ score, questions, wrongAnswers, handleRetryClick }) => {
  return (
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
                  "https://google.com/search?q=" + question.split(" ").join("+")
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
  );
};

export default GameOver;
