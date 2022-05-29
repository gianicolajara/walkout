import SubTitle from "./SubTitle";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { typeOfWarning } from "../types/appTypes";
import P from "./P";

const initialTypeOfWarning = typeOfWarning.LOW;

const colorWarning = {
  0: "border-sky-400",
  1: "border-orange-400",
  2: "border-red-400",
};

const BoxWeatherInformation = ({
  title = "",
  valueText = "",
  rawValue = 0,
  indiceLow = 0,
  indiceMid = 0,
  indiceHigh = 0,
}) => {
  const [warning, setWarning] = useState(initialTypeOfWarning);

  useEffect(() => {
    if (rawValue >= indiceLow) {
      setWarning(typeOfWarning.LOW);
    }

    if (rawValue >= indiceMid) {
      setWarning(typeOfWarning.MID);
    }

    if (rawValue >= indiceHigh) {
      setWarning(typeOfWarning.HIGH);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`min-w-max min-h-[85px] px-5 flex flex-col justify-center items-center rounded-lg shadow-sm border-4 border-dashed ${colorWarning[warning]}`}
    >
      <SubTitle>{title}</SubTitle>
      <P>{valueText}</P>
    </div>
  );
};

BoxWeatherInformation.propTypes = {
  title: PropTypes.string.isRequired,
  rawValue: PropTypes.number,
  indiceLow: PropTypes.number,
  indiceMid: PropTypes.number,
  indiceHigh: PropTypes.number,
};

export default BoxWeatherInformation;
