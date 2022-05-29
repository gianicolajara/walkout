import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Button from "./Button";

const NavCardWeather = ({
  handleChange = null,
  value = null,
  withButton = false,
}) => {
  const router = useRouter();

  const goBackRoute = () => {
    router.back();
  };

  return (
    <nav className=" flex items-center justify-between w-full bg-white p-5 shadow-sm dark:bg-slate-800">
      <Button
        className="text-3xl font-light cursor-pointer text-slate-300 hover:text-blue-500 transition-all"
        onClick={goBackRoute}
      >
        &lt;
      </Button>
      {handleChange && withButton && value && (
        <Button onClick={handleChange}>{value}</Button>
      )}
    </nav>
  );
};

NavCardWeather.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  withButton: PropTypes.bool,
};

export default NavCardWeather;
