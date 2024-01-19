export const Options = ({
  handleGood,
  handleNeutral,
  handleBad,
  handleReset,
  totalFeedback,
}) => {
  return (
    <div>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>

      {totalFeedback !== 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};
