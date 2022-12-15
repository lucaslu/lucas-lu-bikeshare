import { SimpleGrid } from "@mantine/core";

import BikeCard from "../BikeCard/BikeCard";

const BikesList = ({ bikes }) => {
  return (
    <>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "xl", cols: 4 },
          { maxWidth: "lg", cols: 3 },
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
      >
        {bikes?.length > 0
          ? bikes?.map((bike) => <BikeCard key={bike.id} {...bike} />)
          : "No results found."}
      </SimpleGrid>
    </>
  );
};

export default BikesList;
