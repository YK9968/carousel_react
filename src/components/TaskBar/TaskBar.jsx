import { nanoid } from "nanoid";

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
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button>Add task</button>
      </form>
    </div>
  );
}
