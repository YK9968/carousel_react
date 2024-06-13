import { useEffect, useState } from "react";
import QuestionList from "../QuestionList/QuestionList";
import { fetchApiQuto } from "../../apiQuote";
import QuotesList from "../QuotesList/QuotesList";
import TaskList from "../TaskList/TaskList";
import TaskBar from "../TaskBar/TaskBar";
import { searchGitHubName } from "../../apiGithubSearch";
import SearchBar from "../SearchBar/SearchBAr";
import UsersList from "../UsersList/UsersList";
import { fetchMyServer } from "../../api-my-server";
import ContactsList from "../ContactsList/ContactsList";

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
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchApiSearchGitHub = async () => {
      const data = await searchGitHubName(query);
      setUsers(data);
    };
    fetchApiSearchGitHub();
  }, [query]);

  useEffect(() => {
    const fetchDataQute = async () => {
      const data = await fetchApiQuto();
      setQuotes(data);
    };
    fetchDataQute();
  }, []);

  useEffect(() => {
    if (!contacts) {
      return;
    }

    const fetchContacts = async () => {
      const data = await fetchMyServer();
      setContacts(data.data);
    };
    fetchContacts();
  }, [contacts]);

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

  const searchProfile = (queryProfile) => {
    setQuery(queryProfile);
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

      <SearchBar search={searchProfile} />
      {users.length > 0 && <UsersList users={users} />}
      {contacts.length <= 0 && <p>Sorry your server is disconect</p>}
      {contacts.length > 0 && <ContactsList contacts={contacts} />}
    </div>
  );
}
