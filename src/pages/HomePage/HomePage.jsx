import { useMemo, useState } from "react";
import { Text } from "@mantine/core";

import BikesList from "../../components/BikesList/BikesList";
import CityCarousel from "../../components/CityCarousel/CityCarousel";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getBikes } from "../../utils/utils";

const HomePage = ({ bikes, handleRefClick, searchRef, user }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => setSearch(e.target.value);

  const filteredBikes = useMemo(() => getBikes(search, bikes), [bikes, search]);

  return (
    <main>
      {user?.email && (
        <Text ta="right" fw={500} pb={16}>
          Welcome {user.email}
        </Text>
      )}
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
