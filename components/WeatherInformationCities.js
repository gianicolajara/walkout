import { timeAgo } from "../utils/date.utils";
import Avatar from "./Avatar";
import SubTitle from "./SubTitle";
import PropTypes from "prop-types";

const WeatherInformationCities = ({
  weather = {},
  tempType = "",
  tempTypeSelectedString = "",
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center gap-2 p-5  relative bg-white shadow-sm dark:bg-slate-800">
      <SubTitle>
        {`${weather.location.name}, ${weather.location.region} ` || "..."}
      </SubTitle>
      <p className="m-0  dark:text-slate-200">
        {weather.location.country || "..."}
      </p>
      <small className="dark:text-slate-200">
        Last Update:
        <time className="ml-1 dark:text-slate-400">
          {timeAgo(weather.current.last_updated_epoch) || "..."}
        </time>
      </small>
      <div className="p-2 rounded-lg flex ">
        <Avatar
          image={`https://${weather.current.condition.icon.slice(2)}`}
          alt={weather.current.condition.text}
        />

        <h2 className="text-6xl font-bold flex gap-2 dark:text-white">
          {weather.current[tempType] ?? ""}
          <span className="text-2xl">{tempTypeSelectedString}</span>
        </h2>
      </div>
      <p className="dark:text-slate-400">{weather.current.condition.text}</p>
    </div>
  );
};

WeatherInformationCities.propTypes = {
  weather: PropTypes.object,
  tempType: PropTypes.string,
  tempTypeSelectedString: PropTypes.string,
};

export default WeatherInformationCities;
