import Wrapper from "../../components/Wrapper";
import { useEffect, useState } from "react";
import NavCardWeather from "../../components/NavCardWeather";
import { getItem, setItem } from "../../utils/localstorage.utils";
import ProbabilityRain from "../../components/ProbabilityRain";
import AlertsWeather from "../../components/AlertsWeather";
import ExtraInformationCities from "../../components/ExtraInformationCities";
import ForecastInformationCities from "../../components/ForecastInformationCities";
import WeatherInformationCities from "../../components/WeatherInformationCities";
import { typeOfForecast, typeOfTemp } from "../../types/appTypes";
import Loader from "../../components/Loader";
import PropTypes from "prop-types";
import Head from "next/head";

const SearchCity = ({ weather }) => {
  const [tempType, setTempType] = useState(typeOfTemp.c);
  const [typeForecast, setTypeForecast] = useState(typeOfForecast.TEMPERATURE);
  const [timeZone, setTimeZone] = useState("UTC");

  useEffect(() => {
    const citiesLS = getItem("cities");

    if (weather) {
      setTimeZone(weather.location.tz_id);

      if (citiesLS) {
        const filterCities = citiesLS.filter((item) => {
          return (
            item.name === weather.location.name &&
            item.region === weather.location.region &&
            item.country === weather.location.country
          );
        });

        if (citiesLS.length >= 5 && filterCities.length === 0) {
          citiesLS.pop();
          setItem("cities", citiesLS);
        }

        if (filterCities.length === 0) {
          setItem("cities", [
            {
              name: weather.location.name,
              region: weather.location.region,
              country: weather.location.country,
            },
            ...citiesLS,
          ]);
        }
      } else {
        setItem("cities", [
          {
            name: weather.location.name,
            region: weather.location.region,
            country: weather.location.country,
          },
        ]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeTempType = () => {
    setTempType(tempType === typeOfTemp.c ? typeOfTemp.f : typeOfTemp.c);
  };

  const handleChangeForecast = (type) => {
    setTypeForecast(type);
  };

  const tempTypeSelectedString = tempType === typeOfTemp.c ? "C°" : "F°";
  const tempTypeSelectedStringReverse = tempType === typeOfTemp.c ? "F°" : "C°";

  if (!weather)
    return (
      <>
        <Head>
          <title>There are no matches | 404</title>
        </Head>
        <section>
          <Wrapper>
            <div className="w-full h-full flex flex-col gap-5">
              <NavCardWeather
                handleChange={handleChangeTempType}
                value={tempTypeSelectedStringReverse}
                withButton
              />
              <div className="w-full h-full bg-white shadow-sm p-5">
                There are no matches
              </div>
            </div>
          </Wrapper>
        </section>
      </>
    );

  return (
    <>
      <Head>
        <title>{weather.location.name} | WalkOut</title>
      </Head>
      <section className="mt-5 mb-5">
        <Wrapper>
          {weather ? (
            <div className="w-full h-full flex flex-col gap-5">
              <NavCardWeather
                handleChange={handleChangeTempType}
                value={tempTypeSelectedStringReverse}
                withButton
              />

              {weather.alerts && weather.alerts.alert.length > 0 && (
                <AlertsWeather
                  alert={weather.alerts.alert}
                  timeZone={timeZone}
                />
              )}

              <div className="flex gap-4 flex-col lg:flex-row">
                <WeatherInformationCities
                  weather={weather}
                  tempType={tempType}
                  tempTypeSelectedString={tempTypeSelectedString}
                />
                <ProbabilityRain
                  forecast={weather.forecast}
                  timeZone={timeZone}
                />
              </div>

              <ExtraInformationCities weather={weather} />

              <ForecastInformationCities
                forecast={weather.forecast.forecastday}
                typeForecast={typeForecast}
                tempType={tempType}
                timeZone={timeZone}
                handleChangeForecast={handleChangeForecast}
              />
            </div>
          ) : (
            <Loader />
          )}
        </Wrapper>
      </section>
    </>
  );
};

SearchCity.propTypes = {
  weather: PropTypes.object,
};

export const getServerSideProps = (context) => {
  const { query } = context;

  const URL_API = process.env.NEXT_PUBLIC_URL_API_WEATHER;
  const KEY_API = process.env.NEXT_PUBLIC_KEY_API_WEATHER;

  return fetch(
    `${URL_API}?key=${KEY_API}&q=${query.city}&days=1&aqi=yes&alerts=yes`,
    {
      cache: "default",
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res);
      }
    })
    .then((data) => {
      return {
        props: {
          weather: data,
        },
      };
    })
    .catch((err) => {
      console.error(err);
      return {
        props: {
          weather: null,
        },
      };
    });
};

export default SearchCity;
