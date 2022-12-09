import { useState } from "react";
import {
  Button,
  Notification,
  SimpleGrid,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconCheck, IconX, IconFilePlus } from "@tabler/icons";
import axios from "axios";

const AddBike = ({ bikes, onNewBike }) => {
  const [host_name, setHostName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [isError, setIsError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();
  const BACKEND = import.meta.env.VITE_BACKEND;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!host_name || !address || !city || !name || !description || !price) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
      return;
    }

    const bikeObj = {
      host_name,
      address,
      city,
      name,
      description,
      price,
    };

    axios.post(`${BACKEND}/bikes`, bikeObj).then(({ data }) => {
      onNewBike([...bikes, data]);
    });

    setIsSaved(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {isError && (
        <Notification icon={<IconX size={18} />} color="red">
          Please fill all required fields!
        </Notification>
      )}
      {isSaved && (
        <Notification icon={<IconCheck size={18} />} color="teal">
          Bike saved!
        </Notification>
      )}
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
        <TextInput
          placeholder="Your name"
          label="Full Name"
          value={host_name}
          onChange={(e) => setHostName(e.target.value)}
        />
        <TextInput
          placeholder="Your address"
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextInput
          placeholder="Your city"
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextInput
          placeholder="Your bicycle"
          label="Bicycle Brand and Model"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          placeholder="Bicycle description"
          label="Bicycle Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextInput
          placeholder="Price"
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button
          type="submit"
          sx={{ maxWidth: "150px" }}
          leftIcon={<IconFilePlus size={18} />}
        >
          Save
        </Button>
      </SimpleGrid>
    </form>
  );
};

export default AddBike;
