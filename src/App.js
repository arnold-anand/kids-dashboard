import logo from "./logo.svg";
import "./App.css";
import ThreeDots from "./components/ThreeDots";
import TopBar from "./components/TopBar";
import UpcomingEvents from "./components/UpcomingEvents";
import PosterandStats from "./components/PosterandStats";
import WOF from "./components/WOF";

function App() {
  return (
    <div className="m-5 bg-[]">
      <ThreeDots></ThreeDots>
      <TopBar/>
      <div className="flex justify-between">
        <UpcomingEvents/>
        <PosterandStats/>
        <WOF></WOF>
        <div></div>
      </div>
      
    </div>

  );
}

export default App;
