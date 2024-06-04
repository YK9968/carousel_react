import { useState } from "react";
import QuestionList from "../QuestionList/QuestionList";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
];

export default function App() {
  const [img, setImg] = useState(0);

  const next = () => {
    setImg(img + 1);
  };
  const prev = () => {
    setImg(img - 1);
  };
  return (
    <div>
      {img !== 0 && <button onClick={prev}>Prev</button>}
      <img src={images[img]} />
      {img < 4 && <button onClick={next}>Next</button>}

      <QuestionList />
    </div>
  );
}
