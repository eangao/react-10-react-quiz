function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      {/* So basically what this does is that
      if there is no answer, then this is false.
      And so then number will convert that fault to a zero.
      But if there is an answer, then this will of course be true,
      and then that true will be converted to one.
      And so then we add one to the index. */}
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>
          {points} / {maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
