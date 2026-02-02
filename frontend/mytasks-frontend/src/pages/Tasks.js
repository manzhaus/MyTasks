function Tasks() {
  const tasks = [
    { id: 1, title: "Learn Spring Boot", completed: false },
    { id: 2, title: "Build MyTasks app", completed: true }
  ];

  return (
    <div>
      <h2>My Tasks</h2>

      <input
        placeholder="New task..."
        style={{ padding: "8px", width: "70%" }}
      />
      <button style={{ padding: "8px", marginLeft: "8px" }}>
        Add
      </button>

      <ul style={{ paddingLeft: "20px", marginTop: "20px" }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            {task.title} {task.completed ? "✅" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
