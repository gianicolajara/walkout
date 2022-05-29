export const typeSelected = {
  ON_FOCUS: "onFocus",
  ON_BLUR: "onBlur",
  ON_NOTHING: "NOTHING",
};

export const actions = {
  "DAY": "Day",
  "NOW": "Now",
};

export const typeOfForecast = {
  "TEMPERATURE": "temp_c",
  "UV": "uv",
  "RAIN": "chance_of_rain",
  "WILLITRAIN": "will_it_rain",
  "SNOW": "chance_of_snow",
  "WILLITSNOW": "will_it_snow",
};

export const typeOfTemp = {
  "c": "temp_c",
  "f": "temp_f",
};

export const typeOfWarning = {
  "LOW": 0,
  "MID": 1,
  "HIGH": 2,
};

export const colorWarning = {
  0: "border-sky-400",
  1: "border-orange-400",
  2: "border-red-400",
};

export const tempColors = [
  ["text-blue-400", -999],
  ["text-green-400", 10],
  ["text-orange-400", 27],
  ["text-red-400", 30],
];

export const qualityAir = {
  1: "Good",
  2: "Moderate",
  3: "Unhealthy for sensitive group",
  4: "Unhealthy",
  5: "Very Unhealthy",
  6: "Hazardous",
};

export const typeLoading = {
  ERROR: -1,
  LOADING: 0,
  SUCCESS: 1,
  NOTHING: 2,
};

export const typesDarkMode = {
  dark: "dark",
  light: "light",
};
