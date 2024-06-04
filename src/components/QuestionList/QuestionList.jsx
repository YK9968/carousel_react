import { questions } from "../../questions";
import Question from "../Question/Question";
import css from "./QuestionList.module.css";

export default function QuestionList() {
  return (
    <div>
      <ul className={css.listFaq}>
        {questions.map((question) => (
          <li key={question.id}>
            <Question info={question} />
          </li>
        ))}
      </ul>
    </div>
  );
}
