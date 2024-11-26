import axios from "axios";
import { Task } from "../types/Task";

const API_URL = "http://localhost:3000/api/v1";

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_URL}/todo`);
  return response.data;
};

export const addTask = async (
  task: Omit<Task, "id" | "hostname">
): Promise<void> => {
  await axios.post(`${API_URL}/todo`, task);
};
