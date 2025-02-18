import PropTypes from "prop-types";
import { useState } from "react";

function FormAdd({ onAddTask, setErrorMessage }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) {
      setErrorMessage("Task name cannot be empty!");
      return;
    }

    onAddTask({ name: taskName.trim(), done: false });
    setTaskName("");
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="todo-name"></label>
      <input
        type="text"
        id="todo-name"
        name="todo-name"
        className="input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit" className="add-button">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}

FormAdd.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormAdd;
