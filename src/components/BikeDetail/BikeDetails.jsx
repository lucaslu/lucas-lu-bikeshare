import { useParams } from "react-router-dom";
import { Avatar, Button, Divider, Group, Image, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const BikeDetails = ({ bikes }) => {
  const { bikeId } = useParams();

  const bikeDetail = bikes.find((bike) => bike.id === bikeId);
  const { city, description, host_name, name, price } = bikeDetail;

  return (
    <>
      <Carousel
        height="100%"
        mx="auto"
        withIndicators
        dragFree
        slideGap="md"
        align="start"
      >
        <Carousel.Slide>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt={name}
            withPlaceholder
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt={name}
            withPlaceholder
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt={name}
            withPlaceholder
          />
        </Carousel.Slide>
      </Carousel>
      <Text fz="xl" fw={600} mt={16}>
        {name}
      </Text>
      <Divider my="md" />
      <Group position="apart">
        <Text fw={600}>HOSTED BY: {host_name}</Text>
        <Avatar radius="xl" />
      </Group>
      <Button variant="outline">Contact Host</Button>
      <Divider my="md" />
      <Text fw={600}>DESCRIPTION</Text>
      <Text>{description}</Text>
      <Divider my="md" />
      <Text fw={600}>WHERE IS THE BIKE</Text>
      <Text>{city}</Text>
      <Divider my="md" />
      <Group position="apart">
        <Text fw={600}>${price} CAD</Text>
        <Button>Reserve</Button>
      </Group>
    </>
  );
};

export default BikeDetails;
