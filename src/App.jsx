import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, MantineProvider, ColorSchemeProvider } from "@mantine/core";
import axios from "axios";

import { HeaderResponsive as Header } from "./components/Header/HeaderResponsive";
import AddBike from "./components/AddBike/AddBike";
import BikeDetail from "./components/BikeDetail/BikeDetails";
import BikesList from "./components/BikesList/BikesList";
import Footer from "./components/Footer/Footer";

import { links } from "./data/links.json";

const App = () => {
  const [bikes, setBikes] = useState([]);
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme, primaryColor: "cyan" }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Container>
            <Header links={links} />

            <Routes>
              <Route path="/" element={<BikesList bikes={bikes} />} />
              <Route
                path="bike/:bikeId"
                element={<BikeDetail bikes={bikes} />}
              />
              <Route
                path="bike/add"
                element={<AddBike bikes={bikes} onNewBike={handleNewBike} />}
              />
            </Routes>

            <Footer />
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </BrowserRouter>
  );
};

export default App;
