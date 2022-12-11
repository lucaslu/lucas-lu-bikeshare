import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import axios from "axios";

import { HeaderResponsive as Header } from "./components/Header/HeaderResponsive";
import AddBike from "./components/AddBike/AddBike";
import BikeDetail from "./components/BikeDetail/BikeDetails";
import BrowseByCity from "./components/BrowseByCity/BrowseByCity";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import UploadImage from "./components/UploadImage/UploadImage";

import { links } from "./data/links.json";

const App = () => {
  const [bikes, setBikes] = useState([]);

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const ref = useRef(null);

  // shortcut ctrl+j to toggle color scheme
  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const BACKEND = import.meta.env.VITE_BACKEND;

  const handleNewBike = (newBikes) => {
    setBikes(newBikes);
  };

  const handleRefClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const getBikes = async () => {
      try {
        const { data } = await axios.get(`${BACKEND}/bikes`);
        setBikes(data);
      } catch (error) {
        console.log(error);
      }
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
          theme={{ colorScheme, primaryColor: "indigo" }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Container>
            <Header links={links} />

            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    bikes={bikes}
                    handleRefClick={handleRefClick}
                    searchRef={ref}
                  />
                }
              />

              <Route
                path="bike/:bikeId"
                element={<BikeDetail bikes={bikes} />}
              />

              <Route
                path="city/:cityId"
                element={<BrowseByCity bikes={bikes} />}
              />

              <Route
                path="bike/add"
                element={<AddBike bikes={bikes} onNewBike={handleNewBike} />}
              />

              <Route path="image" element={<UploadImage />} />
            </Routes>

            <Footer />
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </BrowserRouter>
  );
};

export default App;
