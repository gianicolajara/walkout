import Link from "next/link";
import PropTypes from "prop-types";
import { normalizeSearch } from "../utils/string.utils";

const SearchBar = ({ search }) => {
  return (
    <div className="w-full h-max absolute top-[55px] shadow-md z-50 bg-white flex flex-col mt-1">
      {search.map((item) => (
        <Link
          key={item["_links"]["city:item"].href}
          href={normalizeSearch(item["matching_full_name"])}
          passHref={true}
        >
          <a>
            <div className="p-1 border-b-2 border-b-slate-200 w-full cursor-pointer hover:bg-blue-500/[.06] transition-all">
              {item["matching_full_name"]}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.array,
};

export default SearchBar;
