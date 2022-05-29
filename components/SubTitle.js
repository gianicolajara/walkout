import PropTypes from "prop-types";

const SubTitle = ({
  children,
  bold = true,
  color = "text-black",
  className = "",
}) => {
  const textBold = `${bold ? "font-bold" : "font-normal"}`;

  return (
    <h1
      className={`text-2xl ${textBold} ${color} ${className} dark:text-white`}
    >
      {children}
    </h1>
  );
};

SubTitle.propTypes = {
  bold: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default SubTitle;
