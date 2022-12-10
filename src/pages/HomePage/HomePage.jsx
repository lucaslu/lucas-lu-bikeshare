import { useMemo, useState } from "react";

import BikesList from "../../components/BikesList/BikesList";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = ({ bikes, handleRefClick, searchRef }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => setSearch(e.target.value);

  const filteredBikes = useMemo(() => {
    return bikes.filter((bike) => {
      return (
        bike.name.toLowerCase().includes(search.toLowerCase()) ||
        bike.city.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [bikes, search]);

  return (
    <main>
      <Hero handleRefClick={handleRefClick} />
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
