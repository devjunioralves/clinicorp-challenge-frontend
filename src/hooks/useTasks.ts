import { useEffect, useState } from "react";
import { addTask, getTasks } from "../api/tasksApi";
import { Task } from "../types/Task";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTasks = async () => {
    setLoading(true);
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  };

  const createTask = async (task: Omit<Task, "id" | "hostname">) => {
    await addTask(task);
    await fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, createTask, loading };
};
