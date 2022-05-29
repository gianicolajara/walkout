import Title from "./Title";
import { BiWalk } from "react-icons/bi";
import PropTypes from "prop-types";

const Brand = ({ color = "text-black" }) => {
  return (
    <div className="flex items-center gap-2">
      <Title color={`${color} dark:text-white`}>WalkOut</Title>
      <BiWalk size={50} className={`${color} dark:text-white`} />
    </div>
  );
};

Brand.propTypes = {
  color: PropTypes.string,
};

export default Brand;
