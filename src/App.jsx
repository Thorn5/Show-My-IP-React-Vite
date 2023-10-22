// App.jsx
import "./App.css";
import FetchApiData from "./components/FetchApiData";
import DisplayLocation from "./components/DisplayLocation";
import DisplayMapLocation from "./components/DisplayMapLocation";
import DisplayTime from "./components/DisplayTime";
import DisplayWeather from "./components/DisplayWeather";

function App() {
  FetchApiData();
  return (<>
    {/* <DisplayLocation /> */}
    {/* <DisplayMapLocation /> */}
    {/* <DisplayTime /> */}
    {/* <DisplayWeather /> */}
  </>)
}

export default App;