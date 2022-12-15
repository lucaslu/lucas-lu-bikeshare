import { Link } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
} from "@mantine/core";

import calgaryImg from "../../assets/images/calgary.jpg";
import montrealImg from "../../assets/images/montreal.jpg";
import torontoImg from "../../assets/images/toronto.jpg";
import vancouverImg from "../../assets/images/vancouver.jpg";

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const Card = ({ image, title }) => {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button
        variant="white"
        color="dark"
        component={Link}
        to={`city/${title}`}
      >
        View bikes in {title}
      </Button>
    </Paper>
  );
};

const data = [
  {
    image: `${vancouverImg}`,
    title: "Vancouver",
  },
  {
    image: `${torontoImg}`,
    title: "Toronto",
  },
  {
    image: `${calgaryImg}`,
    title: "Calgary",
  },
  {
    image: `${montrealImg}`,
    title: "Montreal",
  },
];

const CityCarousel = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Text fw={600} fz="lg">
        Browse by city:
      </Text>
      <Carousel
        mt={16}
        mb={32}
        slideSize="50%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </>
  );
};
export default CityCarousel;
