import PropTypes from "prop-types";

const Button = ({ children, onClick = () => {} }) => {
  return (
    <button
      className="bg-black text-white font-bold px-5 py-3 rounded-full hover:opacity-70 transition-all dark:bg-white dark:text-black"
      onClick={onClick}
      name="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
