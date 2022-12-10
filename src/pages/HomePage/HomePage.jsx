import BikesList from "../../components/BikesList/BikesList";
import Hero from "../../components/Hero/Hero";

const HomePage = ({ bikes, handleRefClick, searchRef }) => {
  return (
    <main>
      <Hero handleRefClick={handleRefClick} />
      <BikesList bikes={bikes} searchRef={searchRef} />
    </main>
  );
};

export default HomePage;
