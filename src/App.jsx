import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const API_URL = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const getBikes = () => {
      axios.get(`${API_URL}/bikes`).then((response) => setData(response.data));
    };

    getBikes();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
