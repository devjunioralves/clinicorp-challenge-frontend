import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createTaskService, fetchTasksService } from "../services/taskService";
import { Task } from "../types/Task";

interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  createTask: (task: Omit<Task, "id" | "hostname">) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const tasksFromApi = await fetchTasksService();
      setTasks(tasksFromApi);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao carregar tarefas!");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (task: Omit<Task, "id" | "hostname">) => {
    try {
      setLoading(true);
      await createTaskService(task);
      fetchTasks();
      toast.success("Tarefa criada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar tarefa!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, loading, createTask: handleCreateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("UseTask must be used within a TaskProvider");
  }
  return context;
};
