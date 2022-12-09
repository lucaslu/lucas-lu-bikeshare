import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, MantineProvider } from "@mantine/core";
import axios from "axios";

import { HeaderResponsive as Header } from "./components/Header/HeaderResponsive";
import AddBike from "./components/AddBike/AddBike";
import BikeDetail from "./components/BikeDetail/BikeDetails";
import BikesList from "./components/BikesList/BikesList";

import { links } from "./data/links.json";

const App = () => {
  const [bikes, setBikes] = useState([]);
  const BACKEND = import.meta.env.VITE_BACKEND;

  const handleNewBike = (newBikes) => {
    setBikes(newBikes);
  };

  useEffect(() => {
    const getBikes = async () => {
      const { data } = await axios.get(`${BACKEND}/bikes`);
      setBikes(data);
    };

    getBikes();
  }, []);

  return (
    <BrowserRouter>
      <MantineProvider
        theme={{ primaryColor: "cyan" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Container>
          <Header links={links} />

          <Routes>
            <Route path="/" element={<BikesList bikes={bikes} />} />
            <Route path="bike/:bikeId" element={<BikeDetail bikes={bikes} />} />
            <Route
              path="bike/add"
              element={<AddBike bikes={bikes} onNewBike={handleNewBike} />}
            />
          </Routes>
        </Container>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
