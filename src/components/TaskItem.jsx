import PropTypes from "prop-types";
function TaskItem({ task, onDeleteItem, onToggleItem }) {
  return (
    <li className="task">
      <p style={task.done ? { textDecoration: "line-through" } : {}}>
        {task.name}
      </p>
      <div className="task-icon-wrapper">
        <i
          className="fa-regular fa-circle-check"
          onClick={() => onToggleItem(task.id)}
        ></i>
        <i
          className="fa-solid fa-trash-can"
          onClick={() => onDeleteItem(task.id)}
        ></i>
      </div>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};

export default TaskItem;
