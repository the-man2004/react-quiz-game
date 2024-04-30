import { useState } from "react";
import questions from "./data.js";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="p-5 rounded-xl absolute inset-5 max-w-[750px] max-h-[500px] m-auto bg-secondary text-textColor font-bold shadow-2xl">
      {!isPlaying ? (
        <div className="h-full flex flex-col align-middle justify-center">
          {" "}
          <h1 className="text-center font-extrabold text-2xl sm:text-4xl">
            Computer Hardware QUIZ
          </h1>
          <p className="my-5 mx-auto max-w-80 text-center">
            You'll be asked 15 questions to test your computer hardware
            knowledge. Good luck :)
          </p>
          <button
            onClick={handleStartClick}
            className="block mx-auto mt-2 px-7 py-2 text-xl rounded-full bg-primary text-secondary shadow-2xl sm:scale-125"
          >
            START
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz started</h2>
        </div>
      )}
    </div>
  );
}

export default App;
