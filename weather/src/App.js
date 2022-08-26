import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./city.jsx";

function App() {
  const key = "d1b2a2066db1ebf76d81f7961acadb12";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <div className="mb-3 pt-3 ">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Placeholder"
            className=" px-3 py-3 w-[250px] placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            //style={{ width: "250px" }}
          />
          <City city={city} />
        </div>
      </div>
    </div>
  );
}

export default App;
