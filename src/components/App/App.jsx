import { useEffect, useState } from "react";
import QuestionList from "../QuestionList/QuestionList";
import { fetchApiQuto } from "../../apiQuote";
import QuotesList from "../QuotesList/QuotesList";
import TaskList from "../TaskList/TaskList";
import TaskBar from "../TaskBar/TaskBar";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
];

export default function App() {
  const [quotes, setQuotes] = useState([]);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchDataQute = async () => {
      const data = await fetchApiQuto();
      setQuotes(data);
    };
    fetchDataQute();
  }, []);

  const [img, setImg] = useState(0);

  const next = () => {
    setImg(img + 1);
  };
  const prev = () => {
    setImg(img - 1);
  };

  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== taskId);
    });
  };

  return (
    <div>
      {img !== 0 && <button onClick={prev}>Prev</button>}
      <img src={images[img]} />
      {img < 4 && <button onClick={next}>Next</button>}

      <QuestionList />
      {quotes.length > 0 && <QuotesList quotes={quotes} />}
      <TaskBar addTask={addTask} />
      {tasks.length > 0 && <TaskList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
}
