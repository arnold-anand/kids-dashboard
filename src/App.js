import logo from "./logo.svg";
import "./App.css";
import { supabase } from "./lib/helper/supabaseClient";
import { useEffect, useState } from "react";
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries();
  }, []);
  async function getCountries() {
    const { data } = await supabase.from("statsTable").select();
    setCountries(data);
    console.log(data)
  }
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.stats4}>{country.stats1}</li>
      ))}
    </ul>
  );
}

export default App;
