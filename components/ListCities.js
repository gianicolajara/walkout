import PropTypes from "prop-types";
import Link from "next/link";
import { normalizeSearch } from "../utils/string.utils";

const ListCities = ({ cities = [] }) => {
  return (
    <>
      {cities.length > 0 &&
        cities.map((city) => (
          <Link
            href={`${normalizeSearch(
              `${city.name} ${city.region} ${city.country}`
            )}`}
            key={city.name}
            passHref={true}
          >
            <a>
              <article className="p-3 border-2 border-dashed border-slate-300 cursor-pointer hover:border-slate-500 transition-all hover:shadow-md dark:text-slate-400 dark:border-slate-600 dark:hover:border-slate-200">
                {city.name || ""}, {city.region || ""}, {city.country || ""}
              </article>
            </a>
          </Link>
        ))}
    </>
  );
};

ListCities.propTypes = {
  cities: PropTypes.array,
};

export default ListCities;
