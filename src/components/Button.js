const Button = ({ text, callbackFunc }) => {
  return (
    <button
      onClick={callbackFunc}
      className="block mx-auto mt-2 px-7 py-2 text-xl rounded-full bg-primary text-secondary shadow-2xl sm:scale-125 transition hover:translate-y-1"
    >
      {text}
    </button>
  );
};

export default Button;
