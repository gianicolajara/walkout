import { useRouter } from "next/router";
import { normalizeSearch } from "../utils/string.utils";
import Button from "./Button";
import Loader from "./Loader";
import PropTypes from "prop-types";
import { typeLoading } from "../types/appTypes";

const SearchMe = ({ location, loading, error }) => {
  const router = useRouter();

  const handleMe = (value) => [router.push(normalizeSearch(value))];

  if (loading === typeLoading.ERROR) {
    return (
      <small>
        <span className="font-bold mr-1">
          {error.errorData.title || "Error"}:
        </span>
        {error.errorData.message || "Error getting address"}
      </small>
    );
  }

  return (
    <>
      {location && loading === typeLoading.SUCCESS ? (
        <div className="self-start flex items-center gap-3">
          <Button
            onClick={() =>
              handleMe(
                `${location.city} ${location.region} ${location.country}`
              )
            }
          >
            Me
          </Button>
          <div>
            <small className="dark:text-slate-400">
              <span className="font-bold dark:text-white">
                Actual Location:
              </span>
              {location.city}, {location.region}, {location.country}
            </small>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

SearchMe.propTypes = {
  location: PropTypes.object,
};

export default SearchMe;
