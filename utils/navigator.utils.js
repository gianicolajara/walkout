export const getMyPosition = () => {
  navigator.geolocation.getCurrentPosition((position) => {});
};
