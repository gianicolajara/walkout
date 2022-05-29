import PropTypes from "prop-types";
import { timeSecondToHuman } from "../utils/date.utils";
import P from "./P";
import SubTitle from "./SubTitle";

const ModalAlert = ({ alertSelected = null }) => {
  return (
    <>
      <div className="flex flex-col gap-1 p-5">
        <SubTitle className="font-bold text-lg ">
          {alertSelected.event}
        </SubTitle>
        <P className="font-bold">
          <span className="font-bold mr-1 dark:text-slate-200">Severity:</span>
          {alertSelected.severity || "Unspecified"}
        </P>

        <P className="font-bold">
          <span className="font-normal mr-1 dark:text-slate-200">Areas:</span>
          {alertSelected.areas || "Unspecified"}
        </P>

        <P className="font-bold">
          <span className="font-bold mr-1 dark:text-slate-200">Certainty:</span>
          {alertSelected.certainty || "Unspecified"}
        </P>

        <P className="font-bold">
          <span className="font-bold mr-1 dark:text-slate-200">
            Description:
          </span>
          {alertSelected.desc || "Unspecified"}
        </P>

        <P className="font-bold">
          <span className="font-bold mr-1 dark:text-slate-200">
            Instruction:
          </span>
          {alertSelected.instruction || "Unspecified"}
        </P>
      </div>
    </>
  );
};

ModalAlert.propTypes = {
  alertSelected: PropTypes.object,
};

export default ModalAlert;
