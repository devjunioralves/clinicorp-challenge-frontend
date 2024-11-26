import { FaCheckCircle, FaClipboardList, FaClock } from "react-icons/fa";
import { useTasks } from "../context/TaskContext";
import { Loader } from "./Loader";

export const TaskList = () => {
  const { tasks, loading } = useTasks();

  if (loading) {
    return <Loader />;
  }

  if (tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.description}</strong> - {task.responsable}
          <span>
            {task.status === "done" && <FaCheckCircle />}
            {task.status === "doing" && <FaClock />}
            {task.status === "todo" && <FaClipboardList />}
          </span>
        </li>
      ))}
    </ul>
  );
};
