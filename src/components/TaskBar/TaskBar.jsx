import { nanoid } from "nanoid";
import css from "./TaskBar.module.css";

export default function TaskBar({ addTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.task.value;

    const task = {
      text: value,
      id: nanoid(),
    };
    addTask(task);
    form.reset();
  };

  return (
    <div>
      <form className={css.bar} onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button>Add task</button>
      </form>
    </div>
  );
}
