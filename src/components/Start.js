import Button from "./Button";

const Start = ({ handleStartClick }) => {
  return (
    <div className="h-full flex flex-col align-middle justify-center">
      <h1 className="text-center font-extrabold text-2xl sm:text-4xl">
        Computer Hardware QUIZ
      </h1>
      <p className="my-5 mx-auto max-w-80 text-center">
        You'll be asked 15 questions to test your computer hardware knowledge.
        Good luck :)
      </p>
      <Button callbackFunc={handleStartClick} text={"START"} />
    </div>
  );
};

export default Start;
