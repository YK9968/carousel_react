export default function Quote({ quote: { author, text } }) {
  return (
    <div>
      <h2>{text}</h2>
      <p>{author}</p>
    </div>
  );
}
