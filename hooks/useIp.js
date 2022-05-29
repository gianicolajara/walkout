import { useEffect, useState } from "react";
import { typeLoading } from "../types/appTypes";
import { fetchApi } from "../utils/fetch.utils";

const initialMyIp = null;
const initialError = null;

const useIp = () => {
  const [myIp, setMyIp] = useState(initialMyIp);
  const [loading, setLoading] = useState(typeLoading.LOADING);
  const [error, setError] = useState(initialError);

  const getMyIp = () => {
    fetchApi("https://api.ipify.org?format=json")
      .then((data) => {
        if (data.error) {
          setLoading(typeLoading.ERROR);
          setError(data);
        } else {
          setMyIp(data.data.ip);
          setLoading(typeLoading.SUCCESS);
        }
      })
      .catch((err) => {
        setLoading(typeLoading.ERROR);
        setError(err);
      });
  };

  useEffect(() => {
    getMyIp();
  }, []);

  return [myIp, loading, error];
};

export default useIp;
