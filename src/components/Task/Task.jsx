export default function Task({ task: { text, id }, deleteTask }) {
  const handleDeleteTask = () => {
    deleteTask(id);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}
