import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, MantineProvider } from "@mantine/core";

import { HeaderResponsive as Header } from "./components/Header/HeaderResponsive";
import BikeCard from "./components/BikeCard/BikeCard";

import { links } from "./data/links.json";

const App = () => {
  // const API_URL = import.meta.env.VITE_BACKEND;

  return (
    <BrowserRouter>
      <MantineProvider
        theme={{ primaryColor: "teal" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Container>
          <Header links={links} />
          <Routes>
            <Route path="/" element={<BikeCard />} />
          </Routes>
        </Container>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
