import Task from "../Task/Task";
import css from "./TaskList";

export default function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      <ul className={css.taskList}>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} deleteTask={deleteTask} />
          </li>
        ))}
      </ul>
    </div>
  );
}
