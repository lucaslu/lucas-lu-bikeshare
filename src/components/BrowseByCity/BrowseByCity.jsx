import { useMemo } from "react";
import { useParams } from "react-router-dom";

import BikesList from "../BikesList/BikesList";

import { getBikes } from "../../utils/utils";

const BrowseByCity = ({ bikes }) => {
  const { cityId } = useParams();

  const filteredBikes = useMemo(() => getBikes(cityId, bikes), [bikes, cityId]);

  return <BikesList bikes={filteredBikes} />;
};

export default BrowseByCity;
