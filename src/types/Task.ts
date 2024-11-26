export interface Task {
  id?: string;
  description: string;
  responsable: string;
  status: "todo" | "doing" | "done";
  hostname: string;
}
