import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { typeLoading } from "../types/appTypes";
import { fetchApi } from "../utils/fetch.utils";

const initialLocation = null;
const initialMessageError = null;

const useLocation = (ip) => {
  const [location, setLocation] = useState(initialLocation);
  const [loading, setLoading] = useState(typeLoading.LOADING);
  const [error, setError] = useState(initialMessageError);
  const token = process.env.NEXT_PUBLIC_KEY_API_IP_LOCATION;

  const getLocation = () => {
    fetchApi(`https://ipinfo.io/${ip || ""}?token=${token}`)
      .then((data) => {
        if (data.error) {
          setLoading(typeLoading.ERROR);
          setError(data);
        } else {
          setLoading(typeLoading.SUCCESS);
          setLocation(data.data);
        }
      })
      .catch((err) => {
        setLoading(typeLoading.ERROR);
        setError(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ip]);

  return [location, loading, error];
};

useLocation.propTypes = {
  ip: PropTypes.string,
};

export default useLocation;
