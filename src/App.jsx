// App.jsx
import "./App.css";
import FetchApiData from "./components/FetchApiData";
import TestCalls from "./components/TestCalls";
import DisplayLocation from "./components/DisplayLocation";
import DisplayMapLocation from "./components/DisplayMapLocation";
import DisplayTime from "./components/DisplayTime";
import DisplayWeather from "./components/DisplayWeather";

function App() {
  FetchApiData();
  return (<>
    {/* <TestCalls /> */}
    <DisplayLocation />
    <DisplayMapLocation />
    <DisplayTime />
    <DisplayWeather />
  </>)
}

export default App;