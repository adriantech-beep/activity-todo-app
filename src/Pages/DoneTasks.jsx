import Tasks from "../components/Tasks";
import PropTypes from "prop-types";

function DoneTasks({ tasks, onDeleteItem, onToggleItem }) {
  return (
    <div className="all-task-wrapper">
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ) : (
        <p>No done task available</p>
      )}
    </div>
  );
}

DoneTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};
export default DoneTasks;
