export const Feedback = ({ good, neutral, bad, totalFeedback, percent }) => {
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>totalFeedback: {totalFeedback}</p>
      <p>positive: {percent}</p>
    </div>
  );
};
