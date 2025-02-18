import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

function Tasks({ tasks, onDeleteItem, onToggleItem }) {
  return (
    <ul className="task-wrapper">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};
export default Tasks;
