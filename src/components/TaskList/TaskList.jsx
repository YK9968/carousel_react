import Task from "../Task/Task";

export default function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} deleteTask={deleteTask} />
          </li>
        ))}
      </ul>
    </div>
  );
}
