import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Select } from "./Select";

export const TaskForm = () => {
  const [description, setDescription] = useState("");
  const [responsable, setResponsable] = useState("");
  const [status, setStatus] = useState<"todo" | "doing" | "done">("todo");
  const { createTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTask({ description, responsable, status });
    setDescription("");
    setResponsable("");
    setStatus("todo");
  };

  const statusOptions = [
    { value: "todo", label: "Pendente" },
    { value: "doing", label: "Em andamento" },
    { value: "done", label: "Concluído" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          marginBottom: "1rem",
          outline: "none",
        }}
      />
      <input
        type="text"
        placeholder="Responsável"
        value={responsable}
        onChange={(e) => setResponsable(e.target.value)}
        required
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          marginBottom: "1rem",
          outline: "none",
        }}
      />
      <Select
        options={statusOptions}
        value={status}
        onChange={(value) => setStatus(value as "todo" | "doing" | "done")}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          borderRadius: "5px",
          backgroundColor: "#007BFF",
          color: "#fff",
          fontSize: "1rem",
          cursor: "pointer",
          border: "none",
          outline: "none",
        }}
      >
        Adicionar
      </button>
    </form>
  );
};
