import { useState } from "react";
import Answer from "../Answer/Answer";

export default function Question({ info }) {
  const [isOpen, setIsOpen] = useState(false);

  const answerShow = () => {
    setIsOpen(true);
  };

  const hideAnswer = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <p>{info.title}</p>

      {isOpen ? (
        <button onClick={hideAnswer}>Hide Answer</button>
      ) : (
        <button onClick={answerShow}>Show Answer</button>
      )}

      {isOpen && <Answer info={info.info} />}
    </div>
  );
}
