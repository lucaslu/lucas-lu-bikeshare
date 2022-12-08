import { SimpleGrid, Container } from "@mantine/core";

import BikeCard from "../BikeCard/BikeCard";

const BikesList = ({ bikes }) => {
  return (
    // <Container py="md" px={0}>
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: "xl", cols: 4 },
        { maxWidth: "lg", cols: 3 },
        { maxWidth: "md", cols: 2 },
        { maxWidth: "sm", cols: 1 },
      ]}
    >
      {bikes?.map((bike) => (
        <BikeCard key={bike.id} {...bike} />
      ))}
    </SimpleGrid>
    // </Container>
  );
};

export default BikesList;
