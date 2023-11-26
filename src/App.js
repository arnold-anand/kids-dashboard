import logo from "./logo.svg";
import "./App.css";
import { supabase } from "./lib/helper/supabaseClient";
import { Component, useEffect, useState } from "react";
import ThreeDots from "./components/ThreeDots";
import TopBar from "./components/TopBar";
import UpcomingEvents from "./components/UpcomingEvents";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    // getCountries();
  }, []);
  async function getCountries() {
    const { data } = await supabase.from("statsTable").select();
    setCountries(data);

  }
  return (
    <div className="m-10">
      <ThreeDots></ThreeDots>
      <TopBar/>
      <div>
        <UpcomingEvents/>
      </div>
      
    </div>

  );
}

export default App;
