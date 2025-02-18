// import { Form } from "react-router-dom";
import FormAdd from "../components/FormAdd";
import Tasks from "../components/Tasks";
import PropTypes from "prop-types";

function AllTask({
  onAddTask,
  tasks,
  onDeleteItem,
  onToggleItem,
  errorMessage,
  setErrorMessage,
}) {
  return (
    <div className="all-task-wrapper">
      <FormAdd onAddTask={onAddTask} setErrorMessage={setErrorMessage} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
          errorMessage={errorMessage}
        />
      ) : (
        <p>Add some task here</p>
      )}
      <p className="error-message">{errorMessage}</p>
    </div>
  );
}

AllTask.propTypes = {
  tasks: PropTypes.array.isRequired,
  onAddTask: PropTypes.func.isRequired,

  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  errorMessage: PropTypes.array.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};
export default AllTask;
