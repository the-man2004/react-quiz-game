import questions from "./data.js";

function App() {
  console.log(questions);

  return (
    <div className="p-5 rounded-xl absolute inset-8 max-w-[750px] max-h-[500px] m-auto bg-secondary text-textColor font-bold shadow-2xl">
      <h1 className="text-center text-lg sm:text-3xl">
        Computer Hardware QUIZ
      </h1>
    </div>
  );
}

export default App;
