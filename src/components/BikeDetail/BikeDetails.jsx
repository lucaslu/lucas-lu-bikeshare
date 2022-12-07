import { useParams } from "react-router-dom";

const BikeDetails = () => {
  const { bikeId } = useParams();

  return <div>BikeDetails - {bikeId}</div>;
};

export default BikeDetails;
