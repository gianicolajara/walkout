import { typeOfForecast } from "../types/appTypes";
import Button from "./Button";
import ChartWeather from "./ChartWeather";
import SubTitle from "./SubTitle";
import PropTypes from "prop-types";

const ForecastInformationCities = ({
  forecast = null,
  typeForecast = typeOfForecast.TEMPERATURE,
  tempType = "",
  timeZone = "",
  handleChangeForecast = () => {},
}) => {
  return (
    <div className="p-5 bg-white shadow-sm dark:bg-slate-800">
      <SubTitle className="mb-5">Forecast</SubTitle>
      <div className="flex gap-3 mb-5 flex-wrap">
        <Button
          onClick={() => handleChangeForecast(typeOfForecast.TEMPERATURE)}
        >
          Temperature
        </Button>
        <Button onClick={() => handleChangeForecast(typeOfForecast.UV)}>
          UV
        </Button>
        <Button onClick={() => handleChangeForecast(typeOfForecast.RAIN)}>
          Rain
        </Button>
        <Button onClick={() => handleChangeForecast(typeOfForecast.WILLITRAIN)}>
          Will It Rain
        </Button>
        <Button onClick={() => handleChangeForecast(typeOfForecast.SNOW)}>
          Snow
        </Button>
        <Button onClick={() => handleChangeForecast(typeOfForecast.WILLITSNOW)}>
          Will It Snow
        </Button>
      </div>
      <ChartWeather
        forecast={forecast}
        type={typeForecast}
        tempType={tempType}
        timeZone={timeZone}
      />
    </div>
  );
};

ForecastInformationCities.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.object).isRequired,
  typeForecast: PropTypes.string.isRequired,
  tempType: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
  handleChangeForecast: PropTypes.func.isRequired,
};

export default ForecastInformationCities;
