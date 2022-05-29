import { useEffect, useState } from "react";
import { dateSecondToHuman, dateMiliToHuman } from "../utils/date.utils";
import Button from "./Button";
import SubTitle from "./SubTitle";
import { AiFillWarning } from "react-icons/ai";
import { actions } from "../types/appTypes";
import PropTypes from "prop-types";
import Icon from "./Icon";

const initialTime = null;
const initialForecast = null;

const ProbabilityRain = ({ forecast = null, timeZone = "" }) => {
  const [time, setTime] = useState(initialTime);
  const [forecastData, setForecastData] = useState(initialForecast);
  const [actionSelected, setActionSelected] = useState(actions.DAY);

  useEffect(() => {
    setTime(Math.floor(Date.now() / 1000));
  }, []);

  useEffect(() => {
    if (actionSelected === actions.NOW) {
      forecast.forecastday[0].hour.forEach((item) => {
        if (item.time_epoch <= time) {
          setForecastData(item.chance_of_rain);
        }
      });
    } else {
      setForecastData(forecast.forecastday[0].day.daily_chance_of_rain);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionSelected]);

  const handleNow = () => {
    setActionSelected(actions.NOW);
  };

  const handleDay = () => {
    setActionSelected(actions.DAY);
  };

  return (
    <div className="w-full h-full bg-white shadow-sm p-5 flex flex-col justify-center items-center gap-3 dark:bg-slate-800">
      <SubTitle>Probability of rain</SubTitle>
      <div className="flex justify-center items-center gap-3">
        <h2 className="text-5xl font-bold flex gap-2 dark:text-white">
          {`${forecastData}%` ?? ""}
        </h2>
        {forecastData >= 50 && (
          <Icon>
            <AiFillWarning size={35} />
          </Icon>
        )}
      </div>
      {actionSelected === actions.NOW ? (
        <small className="dark:text-slate-400">{`${dateMiliToHuman(
          time,
          timeZone
        )}`}</small>
      ) : (
        <small className="dark:text-slate-400">
          {dateSecondToHuman(time, timeZone)}
        </small>
      )}
      <small className="dark:text-slate-400">{`(${timeZone})`}</small>
      <div className="flex gap-3">
        <Button onClick={handleDay}>Day</Button>
        <Button onClick={handleNow}>Now</Button>
      </div>
    </div>
  );
};

ProbabilityRain.propTypes = {
  forecast: PropTypes.object,
  timeZone: PropTypes.string,
};

export default ProbabilityRain;
