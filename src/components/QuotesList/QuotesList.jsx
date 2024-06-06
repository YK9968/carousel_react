import { useState } from "react";
import Quote from "../Quote/Quote";
import css from "./QuotesList.module.css";

export default function QuotesList({ quotes }) {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  const handleChangeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div className={css.QuptesList}>
      <Quote quote={randomQuote} />
      <button className={css.btn} onClick={handleChangeQuote}>
        New quote
      </button>
    </div>
  );
}
