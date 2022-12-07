import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, MantineProvider } from "@mantine/core";
import axios from "axios";

import { HeaderResponsive as Header } from "./components/Header/HeaderResponsive";
import BikesList from "./components/BikesList/BikesList";
import BikeDetail from "./components/BikeDetail/BikeDetails";

import { links } from "./data/links.json";

const App = () => {
  const [bikes, setBikes] = useState([]);
  const API_URL = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const getBikes = async () => {
      const { data } = await axios.get(`${API_URL}/bikes`);
      setBikes(data);
    };

    getBikes();
  }, []);

  return (
    <BrowserRouter>
      <MantineProvider
        theme={{ primaryColor: "teal" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Container px="xs">
          <Header links={links} />
          <Container>
            <Routes>
              <Route path="/" element={<BikesList bikes={bikes} />} />
              <Route path="bikes/:bikeId" element={<BikeDetail />} />
            </Routes>
          </Container>
        </Container>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
