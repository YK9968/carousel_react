import css from "./Answer.module.css";

export default function Answer({ info }) {
  return (
    <div className={css.question}>
      <p>{info}</p>
    </div>
  );
}
