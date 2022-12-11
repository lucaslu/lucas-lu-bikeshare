export const getBikes = (search, bikes) => {
  return bikes.filter((bike) => {
    return (
      bike.name.toLowerCase().includes(search.toLowerCase()) ||
      bike.city.toLowerCase().includes(search.toLowerCase())
    );
  });
};
