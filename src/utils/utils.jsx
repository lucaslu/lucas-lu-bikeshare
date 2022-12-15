import bike1Img from "../assets/images/bike1.jpg";
import bike2Img from "../assets/images/bike2.jpg";
import bike3Img from "../assets/images/bike3.jpg";
import bike4Img from "../assets/images/bike4.jpg";
import bike5Img from "../assets/images/bike5.jpg";
import bike6Img from "../assets/images/bike6.jpg";
import bike7Img from "../assets/images/bike7.jpg";
import bike8Img from "../assets/images/bike8.jpg";
import bike9Img from "../assets/images/bike9.jpg";
import bike10Img from "../assets/images/bike10.jpg";

export const getBikes = (search, bikes) => {
  return bikes.filter((bike) => {
    return (
      bike.name.toLowerCase().includes(search.toLowerCase()) ||
      bike.city.toLowerCase().includes(search.toLowerCase())
    );
  });
};

export const getRandomBikeImage = () => {
  let bikeArray = [
    bike1Img,
    bike2Img,
    bike3Img,
    bike4Img,
    bike5Img,
    bike6Img,
    bike7Img,
    bike8Img,
    bike9Img,
    bike10Img,
  ];

  return bikeArray[Math.floor(Math.random() * 10)];
};
