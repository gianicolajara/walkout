import { timeSecondToHuman } from "../utils/date.utils";
import PropTypes from "prop-types";
import SubTitle from "./SubTitle";
import P from "./P";

const AlertCard = ({
  handleSetAlertSelected = () => {},
  item = {},
  timeZone = "",
}) => {
  return (
    <article
      className="p-3 border-4 border-dashed border-red-500 dark:border-white cursor-pointer hover:shadow-lg hover:bg-red-100 transition-all w-full max-w-[100%] lg:max-w-[300px] flex justify-center flex-col dark:hover:bg-slate-600"
      onClick={() => handleSetAlertSelected(item)}
    >
      <SubTitle className="font-bold text-lg ">{item.event}</SubTitle>
      <div>
        <P className="font-bold">
          <span className="font-bold mr-1 dark:text-slate-200">Severity:</span>
          {item.severity || "Unspecified"}
        </P>

        <P className="font-bold">
          <span className="font-normal mr-1 dark:text-slate-200">Areas:</span>
          {item.areas || "Unspecified"}
        </P>

        <P className="font-bold">
          <span className="font-bold mr-1 dark:text-slate-200">Certainty:</span>
          {item.certainty || "Unspecified"}
        </P>

        <P className="font-bold ">
          <span className="font-bold mr-1 dark:text-slate-200">Effective:</span>
          {`${timeSecondToHuman(item.effective, timeZone)} - (${timeZone})` ||
            "Unspecified"}
        </P>

        <P className="font-bold">
          <span className="font-bold mr-1 dark:text-slate-200">Expires:</span>
          {`${timeSecondToHuman(item.expires, timeZone)} - (${timeZone})` ||
            "Unspecified"}
        </P>
      </div>
    </article>
  );
};

AlertCard.propTypes = {
  handleSetAlertSelected: PropTypes.func,
  item: PropTypes.object,
  timeZone: PropTypes.string,
};

export default AlertCard;
