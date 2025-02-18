import Tasks from "../components/Tasks";
import PropTypes from "prop-types";

function PendingTasks({ tasks, onDeleteItem, onToggleItem }) {
  return (
    <div className="all-task-wrapper">
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ) : (
        <p>No pending task to show</p>
      )}
    </div>
  );
}

PendingTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};
export default PendingTasks;
