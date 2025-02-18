import PropTypes from "prop-types";
function ErrorMessage({ children }) {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorMessage;
