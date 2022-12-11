export const getBikes = (search, bikes) => {
  return bikes.filter((bike) => {
    return (
      bike.name.toLowerCase().includes(search.toLowerCase()) ||
      bike.city.toLowerCase().includes(search.toLowerCase())
    );
  });
};

export const getRandomBikeImage = () => {
  const BACKEND = "https://lucas-lu-bikeshare-api.herokuapp.com/images/";
  const randomImage = "bike" + (Math.floor(Math.random() * 10) + 1) + ".jpg";
  return BACKEND + randomImage;
};
