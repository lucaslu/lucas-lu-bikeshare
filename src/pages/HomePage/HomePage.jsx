import { useMemo, useState } from "react";

import BikesList from "../../components/BikesList/BikesList";
import CityCarousel from "../../components/CityCarousel/CityCarousel";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getBikes } from "../../utils/utils";

const HomePage = ({ bikes, handleRefClick, searchRef }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => setSearch(e.target.value);

  const filteredBikes = useMemo(() => getBikes(search, bikes), [bikes, search]);

  return (
    <main>
      <Hero onRefClick={handleRefClick} />
      <CityCarousel />
      <SearchBar
        search={search}
        onChange={handleOnChange}
        searchRef={searchRef}
      />
      <BikesList bikes={filteredBikes} />
    </main>
  );
};

export default HomePage;
