import { SimpleGrid } from "@mantine/core";
import BikeCard from "../BikeCard/BikeCard";

const BikesList = ({ bikes }) => {
  return (
    <>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {bikes?.map((bike) => (
          <BikeCard key={bike.id} {...bike} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default BikesList;
