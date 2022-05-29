import PropTypes from "prop-types";

const Title = ({
  children,
  bold = true,
  color = "text-black",
  className = "",
}) => {
  const textBold = `${bold ? "font-bold" : "font-normal"}`;

  return (
    <h1 className={`text-4xl ${textBold} ${color} ${className}`}>{children}</h1>
  );
};

Title.propTypes = {
  bold: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
