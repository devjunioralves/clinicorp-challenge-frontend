import { addTask, getTasks } from "../api/tasksApi";
import { Task } from "../types/Task";

export const fetchTasksService = async (): Promise<Task[]> => {
  return await getTasks();
};

export const createTaskService = async (
  task: Omit<Task, "id" | "hostname">
): Promise<void> => {
  await addTask(task);
};
