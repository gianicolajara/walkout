import AlertCard from "./AlertCard";
import PropTypes from "prop-types";

const ListAlertWeather = ({
  alert = [],
  handleSetAlertSelected = () => {},
  timeZone = "",
}) => {
  const alertsWithId = alert.map((alert, index) => {
    return { ...alert, id: index };
  });

  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {alertsWithId.map((item) => (
        <AlertCard
          key={item.id}
          handleSetAlertSelected={handleSetAlertSelected}
          item={item}
          timeZone={timeZone}
        />
      ))}
    </div>
  );
};

ListAlertWeather.propTypes = {
  alert: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSetAlertSelected: PropTypes.func.isRequired,
  timeZone: PropTypes.string.isRequired,
};

export default ListAlertWeather;
