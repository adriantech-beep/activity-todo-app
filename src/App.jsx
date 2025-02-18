import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import AllTask from "./Pages/AllTask";

import PendingTasks from "./Pages/PendingTasks";
import DoneTasks from "./Pages/Donetasks";
// import FormAdd from "./components/FormAdd";

function App() {
  const [tasks, setTasks] = useState([
    { name: "eat", done: false, id: 101 },
    { name: "sleep", done: false, id: 202 },
    { name: "code", done: true, id: 303 },
  ]);

  const [errorMessage, setErrorMessage] = useState("");

  const addTask = (newTask) => {
    const isDuplicate = tasks.some(
      (task) => task.name.toLowerCase() === newTask.name.toLowerCase()
    );

    if (isDuplicate) {
      setErrorMessage("This task already exists!");
    } else {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setErrorMessage("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleToggleItem = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <AllTask
                tasks={tasks}
                onAddTask={addTask}
                onDeleteItem={handleDeleteTask}
                onToggleItem={handleToggleItem}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="/pending"
            element={
              <PendingTasks
                tasks={tasks.filter((task) => !task.done)}
                onDeleteItem={handleDeleteTask}
                onToggleItem={handleToggleItem}
              />
            }
          />
          <Route
            path="/done"
            element={
              <DoneTasks
                tasks={tasks.filter((task) => task.done)}
                onDeleteItem={handleDeleteTask}
                onToggleItem={handleToggleItem}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
