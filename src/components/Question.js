import Options from "./Options";

function Question({ question, dispatch, answer, points }) {
  console.log(question);
  return (
    <div>
      <h2>{points}</h2>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
