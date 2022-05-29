import SubTitle from "./SubTitle";
import { AiFillWarning } from "react-icons/ai";
import { useContext, useState } from "react";
import ModalAlert from "./ModalAlert";
import ListAlertWeather from "./ListAlertWeather";
import PropTypes from "prop-types";
import { ModalContext } from "../contexts/Modal.context";
import Icon from "./Icon";

const initialAlertSelected = null;

const AlertsWeather = ({ alert, timeZone }) => {
  const [alertSelected, setAlertSelected] = useState(initialAlertSelected);

  const { setContent, setIsModalOpen, setKey } = useContext(ModalContext);

  const handleSetAlertSelected = (item) => {
    setAlertSelected(item);
    setContent(<ModalAlert alertSelected={item} />);
    setIsModalOpen(true);
    setKey(item.effective);
  };

  return (
    <>
      <div className="w-full max-w-full p-10 shadow-sm bg-red-100 dark:bg-slate-800 border-8 border-dashed border-red-500 dark:border-white">
        <div className="flex gap-3">
          <SubTitle color="mb-10">Alerts</SubTitle>
          <Icon>
            <AiFillWarning size={30} />
          </Icon>
        </div>
        <ListAlertWeather
          alert={alert}
          handleSetAlertSelected={handleSetAlertSelected}
          timeZone={timeZone}
        />
      </div>
    </>
  );
};

AlertsWeather.propTypes = {
  alert: PropTypes.arrayOf(PropTypes.object).isRequired,
  timeZone: PropTypes.string,
};

export default AlertsWeather;
