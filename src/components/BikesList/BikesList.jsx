import { useMemo, useState } from "react";
import { SimpleGrid, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

import BikeCard from "../BikeCard/BikeCard";
import Hero from "../Hero/Hero";

const BikesList = ({ bikes, handleRefClick, searchRef }) => {
  const [search, setSearch] = useState("");

  const filteredBikes = useMemo(() => {
    return bikes.filter((bike) => {
      return (
        bike.name.toLowerCase().includes(search.toLowerCase()) ||
        bike.city.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [bikes, search]);

  return (
    <>
      <Hero handleRefClick={handleRefClick} />
      <TextInput
        ref={searchRef}
        sx={{ maxWidth: "780px", padding: "0 16px", margin: "0 auto" }}
        icon={<IconSearch size={18} stroke={1.5} />}
        placeholder="Start your search by model or City"
        radius="xl"
        size="md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        pb={16}
      />
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "xl", cols: 4 },
          { maxWidth: "lg", cols: 3 },
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
      >
        {filteredBikes?.length > 0
          ? filteredBikes?.map((bike) => <BikeCard key={bike.id} {...bike} />)
          : "No results found."}
      </SimpleGrid>
    </>
  );
};

export default BikesList;
