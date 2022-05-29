import { useState } from "react";
import { BiWalk } from "react-icons/bi";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import { typeSelected } from "../types/appTypes";
import ButtonIcon from "./ButtonIcon";

const initialSelected = false;

const initialValue = "";
const initialSearch = [];
let timeOut = null;

const Search = ({ handleSearch = () => {} }) => {
  const [selected, setSelected] = useState(initialSelected);
  const [value, setValue] = useState(initialValue);
  const [search, setSearch] = useState(initialSearch);

  const handleSelected = (e) => {
    if (e._reactName === typeSelected.ON_FOCUS) {
      setSelected(true);
    } else if (e._reactName === typeSelected.ON_BLUR) {
      setSelected(initialSelected);
    }
  };

  const handleChangeInput = (e) => {
    if (timeOut) clearTimeout(timeOut);

    setValue(e.target.value);

    timeOut = setTimeout(() => {
      fetch(
        `https://api.teleport.org/api/cities/?search=${e.target.value}&limit=5`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((json) => setSearch(json._embedded["city:search-results"]))
        .catch((err) => console.error(err));
    }, 500);
  };

  const borderColor = `${
    selected
      ? "border-slate-900 dark:border-slate-200"
      : "border-slate-200 dark:border-slate-700"
  }`;

  return (
    <div className="relative w-full">
      <form
        className={`flex justify-center items-center border-dashed border-4 rounded-full  w-full overflow-hidden transition-all ${borderColor}`}
        onSubmit={(e) => handleSearch(e, value)}
      >
        <input
          type="text"
          className="w-full h-[50px] outline-none px-5 dark:bg-slate-900 dark:text-white"
          placeholder="Where are you..."
          onFocus={handleSelected}
          onBlur={handleSelected}
          onChange={handleChangeInput}
          value={value}
        />
        <ButtonIcon
          type="submit"
          className={`min-w-[50px] border-l-4 border-dashed ${borderColor} flex justify-center items-center transition-all dark:text-white`}
        >
          <BiWalk size={35} />
        </ButtonIcon>
      </form>
      {search.length > 0 && value && <SearchBar search={search} />}
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func,
};

export default Search;
