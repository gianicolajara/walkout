import SubTitle from "./SubTitle";
import WeatherExtraInformation from "./WeatherExtraInformation";
import { RiAlarmWarningLine, RiErrorWarningLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import {
  AirMessages,
  cloudMessages,
  humidityMessages,
  uvMessages,
} from "../messages/messagesApp";
import PropTypes from "prop-types";
import P from "./P";
import Icon from "./Icon";

const initialUvMessage = null;
const initialCloudMessage = null;
const initialHumidityMessage = null;
const initialAirMessage = null;

const ExtraInformationCities = ({ weather = null }) => {
  const [uvMessage, setUvMessage] = useState(initialUvMessage);
  const [cloudMessage, setCloudMessage] = useState(initialCloudMessage);
  const [humidityMessage, setHumidityMessage] = useState(
    initialHumidityMessage
  );
  const [airMessage, setAirMessage] = useState(initialAirMessage);

  useEffect(() => {
    for (const [number, type, msg] of uvMessages) {
      if (weather.current.uv >= number) {
        setUvMessage(msg);
      }
    }

    for (const [number, type, msg] of cloudMessages) {
      if (weather.current.cloud >= number) {
        setCloudMessage(msg);
      }
    }

    for (const [number, type, msg] of humidityMessages) {
      if (weather.current.humidity >= number) {
        setHumidityMessage(msg);
      }
    }

    for (const [number, msg] of AirMessages) {
      if (weather.current.air_quality["us-epa-index"] === number) {
        setAirMessage(msg);
      }
    }
  }, [weather]);

  return (
    <div className="p-5 bg-white dark:bg-slate-800 shadow-sm">
      <SubTitle className="mb-5">Extra Information</SubTitle>
      <WeatherExtraInformation
        uv={weather.current.uv}
        cloud={weather.current.cloud}
        humidity={weather.current.humidity}
        quality={weather.current.air_quality["us-epa-index"]}
      />
      <div className="mt-5">
        {weather.alerts && weather.alerts.alert.length > 0 && (
          <div className="flex items-center gap-2">
            <Icon>
              <RiAlarmWarningLine size={35} />
            </Icon>
            <P>There is an alert, do not go out.</P>
          </div>
        )}
        {weather.current.uv >= 1 &&
          weather.alerts &&
          weather.alerts.alert.length === 0 && (
            <div className="flex items-center gap-2">
              <Icon>
                <RiErrorWarningLine size={35} />
              </Icon>
              <P className="font-bold">
                UV: <span className="font-normal">{uvMessage}</span>
              </P>
            </div>
          )}
        {weather.current.cloud >= 0 &&
          weather.alerts &&
          weather.alerts.alert.length === 0 && (
            <div className="flex items-center gap-2">
              <Icon>
                <RiErrorWarningLine size={35} />
              </Icon>
              <P className="font-bold">
                Cloud: <span className="font-normal">{cloudMessage}</span>
              </P>
            </div>
          )}
        {weather.current.humidity >= 0 &&
          weather.alerts &&
          weather.alerts.alert.length === 0 && (
            <div className="flex items-center gap-2">
              <Icon>
                <RiErrorWarningLine size={35} />
              </Icon>
              <P className="font-bold">
                Humidity: <span className="font-normal">{humidityMessage}</span>
              </P>
            </div>
          )}
        {weather.current.air_quality["us-epa-index"] >= 1 &&
          weather.alerts &&
          weather.alerts.alert.length === 0 && (
            <div className="flex items-center gap-2">
              <Icon>
                <RiErrorWarningLine size={35} />
              </Icon>
              <P className="font-bold">
                Air Quality: <span className="font-normal">{airMessage}</span>
              </P>
            </div>
          )}
      </div>
    </div>
  );
};

ExtraInformationCities.propTypes = {
  weather: PropTypes.object,
};

export default ExtraInformationCities;
