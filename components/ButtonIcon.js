import PropTypes from "prop-types";

const ButtonIcon = ({ children, onClick = () => {}, className = "" }) => {
  return (
    <button
      aria-label="icon-button"
      onClick={onClick}
      name="icon-button"
      className={className}
    >
      {children}
    </button>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ButtonIcon;
