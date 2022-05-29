import { Line } from "react-chartjs-2";
import { useContext, useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { timeMiliToHuman } from "../utils/date.utils";
import { typeOfForecast, typeOfTemp, typesDarkMode } from "../types/appTypes";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/Theme.context";

const initialLabels = [];
const initialData = [];

const ChartWeather = ({
  forecast = null,
  type = typeOfForecast.TEMPERATURE,
  tempType = typeOfTemp.c,
  timeZone = null,
}) => {
  const [labels, setLabels] = useState(initialLabels);
  const [data, setData] = useState(initialData);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (labels.length > 0) setLabels(initialLabels);
    if (data.length > 0) setData(initialData);

    if (forecast) {
      forecast[0].hour.forEach((item) => {
        setLabels((time) => [
          ...time,
          timeMiliToHuman(item.time_epoch, timeZone),
        ]);
        setData((temp) => [
          ...temp,
          item[`${type === typeOfForecast.TEMPERATURE ? tempType : type}`],
        ]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, tempType, timeZone]);

  return (
    <div className="w-[100%]">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: `${type === typeOfForecast.TEMPERATURE ? tempType : type}`,
              backgroundColor:
                dark === typesDarkMode.light
                  ? "rgb(0,0,0)"
                  : "rgb(255,255,255)",
              borderColor:
                dark === typesDarkMode.light
                  ? "rgb(0,0,0)"
                  : "rgb(255,255,255)",
              data: data,
              tension: 0.6,
            },
          ],
        }}
      />
    </div>
  );
};

ChartWeather.propTypes = {
  forecast: PropTypes.array,
  type: PropTypes.string,
  tempType: PropTypes.string,
  timeZone: PropTypes.string,
};

export default ChartWeather;
