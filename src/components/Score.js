export default function Score(props) {
  const { date, score } = props;

  return (
    <div className="scoreInfo">
      <h4>Date: {date}</h4>
      <h4>Score: {score}</h4>
    </div>
  );
}
