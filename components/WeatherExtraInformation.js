import PropTypes from "prop-types";
import { qualityAir } from "../types/appTypes";
import BoxWeatherInformation from "./BoxWeatherInformation";

const WeatherExtraInformation = ({
  uv = null,
  cloud = null,
  humidity = null,
  quality = null,
}) => {
  const getQualityAir = (quality) => {
    return qualityAir[quality];
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {uv !== null && uv >= 0 && (
        <BoxWeatherInformation
          title="UV"
          valueText={uv}
          rawValue={uv}
          indiceLow={1}
          indiceMid={3}
          indiceHigh={7}
        />
      )}
      {cloud !== null && cloud >= 0 && (
        <BoxWeatherInformation
          title="Cloud"
          valueText={`${cloud}%`}
          rawValue={cloud}
          indiceLow={0}
          indiceMid={50}
          indiceHigh={75}
        />
      )}
      {humidity !== null && humidity >= 0 && (
        <BoxWeatherInformation
          title="Humidity"
          valueText={`${humidity}%`}
          rawValue={humidity}
          indiceLow={0}
          indiceMid={50}
          indiceHigh={85}
        />
      )}

      {quality !== null && quality >= 0 && (
        <BoxWeatherInformation
          title="Air"
          valueText={getQualityAir(quality)}
          rawValue={quality}
          indiceLow={1}
          indiceMid={3}
          indiceHigh={5}
        />
      )}
    </div>
  );
};

WeatherExtraInformation.propTypes = {
  uv: PropTypes.number,
  cloud: PropTypes.number,
  humidity: PropTypes.number,
  quality: PropTypes.number,
};

export default WeatherExtraInformation;
