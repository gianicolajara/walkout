import Search from "../components/Search";
import Wrapper from "../components/Wrapper";
import { useRouter } from "next/router";
import { normalizeSearch } from "../utils/string.utils";
import { useEffect, useState } from "react";
import { getItem } from "../utils/localstorage.utils";
import ListCities from "../components/ListCities";
import Brand from "../components/Brand";
import SearchMe from "../components/SearchMe";
import useIp from "../hooks/useIp";
import useLocation from "../hooks/useLocation";
import { typeLoading } from "../types/appTypes";
import Head from "next/head";

const initialCities = [];

export default function Home() {
  const [cities, setCities] = useState(initialCities);
  const [myIp] = useIp();
  const [location, loadingLocation, errorLocation] = useLocation(myIp);

  const router = useRouter();

  const handleSearch = (e, value) => {
    e.preventDefault();
    router.push(normalizeSearch(value));
  };

  useEffect(() => {
    const citiesLS = getItem("cities");
    if (citiesLS !== null && citiesLS.length > 0) {
      setCities(citiesLS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>WalkOut</title>
      </Head>
      <section className="h-full">
        <Wrapper>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-full flex flex-col items-center bg-white gap-5 p-5 rounded-lg shadow-sm dark:bg-slate-800">
              <Brand />
              <Search handleSearch={handleSearch} />
              <SearchMe
                location={location}
                loading={loadingLocation}
                error={errorLocation}
              />
              {cities.length > 0 && (
                <section className="w-full flex flex-col gap-5">
                  <p className="text-slate-400">Recent searches</p>
                  <div className="flex gap-3 flex-wrap w-full justify-center items-center">
                    <ListCities cities={cities} />
                  </div>
                </section>
              )}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
