import { Link } from "react-router-dom";
import { createStyles, Card, Image, Text, AspectRatio } from "@mantine/core";
import { getRandomBikeImage } from "../../utils/utils";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

const BikeCard = ({ id, name, city, price }) => {
  const { classes } = useStyles();

  return (
    <Card
      key={id}
      p="md"
      radius="lg"
      component={Link}
      to={`/bike/${id}`}
      className={classes.card}
    >
      <AspectRatio ratio={16 / 9}>
        <Image src={getRandomBikeImage()} alt={name} withPlaceholder />
      </AspectRatio>

      <Text className={classes.title} size="lg" mt={5}>
        {name}
      </Text>
      <Text color="dimmed" size="md">
        {city}
      </Text>
      <Text fw={500}>${price} CAD</Text>
    </Card>
  );
};

export default BikeCard;
