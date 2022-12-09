import { useState } from "react";
import { SimpleGrid, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

import BikeCard from "../BikeCard/BikeCard";

const BikesList = ({ bikes }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredBikes = bikes.filter(
    (bike) =>
      bike.name.toLowerCase().includes(search.toLowerCase()) ||
      bike.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <TextInput
        icon={<IconSearch size={18} stroke={1.5} />}
        placeholder="Start your search by model or City"
        radius="xl"
        value={search}
        onChange={handleSearch}
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
