import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  const maxWidth = `max-w-[999px]`;

  return <div className={`${maxWidth} w-full h-full m-auto`}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
