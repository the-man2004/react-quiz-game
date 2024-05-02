import Button from "./Button";

const Paused = ({ handleRetryClick, setPaused }) => {
  return (
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
  );
};

export default Paused;
