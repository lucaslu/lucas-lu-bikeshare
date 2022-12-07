import { SimpleGrid, Container } from "@mantine/core";

import BikeCard from "../BikeCard/BikeCard";

const BikesList = ({ bikes }) => {
  console.log(bikes);

  return (
    <Container py="md">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {bikes?.map((bike) => (
          <BikeCard key={bike.id} {...bike} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default BikesList;
