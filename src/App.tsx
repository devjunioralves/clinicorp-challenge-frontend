import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";
import styles from "./styles/App.module.css";

function App() {
  return (
    <TaskProvider>
      <div className={styles.app}>
        <h1>ToDo List</h1>
        <TaskForm />
        <TaskList />
        <ToastContainer />
      </div>
    </TaskProvider>
  );
}

export default App;
