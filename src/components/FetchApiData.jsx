// FetchApiData.jsx 
import useAsyncAwait from "../hooks/useAsyncAwait";
import useMockData from "../hooks/useMockData";
import useMockWeatherData from "../hooks/useMockWeatherData";

export default function FetchApiData() {
  // const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useMockData();

  // const ipBaseUrl = import.meta.env.VITE_APP_IPBASEURL; // get .env secret (local repo)
  const ipBaseUrl = VITE_APP_IPBASEURL; // access .env secret (GitHub Pages)
const ipRequestEndpoint = "/json/"; // true location
// const ipRequestEndpoint = "/183.177.124.136/json/"; // mock location
const ipUrl = `${ipBaseUrl}${ipRequestEndpoint}`;
const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useAsyncAwait(ipUrl);

sessionStorage.clear();
sessionStorage.setItem("ipData", JSON.stringify(ipApiData));
sessionStorage.setItem("ipModuleCalled", JSON.stringify(ipModuleCalled));

// const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useMockWeatherData();

// const weatherBaseUrl = import.meta.env.VITE_APP_WEATHER_BASE_URL // get .env secret (local repo)
const weatherBaseUrl = VITE_APP_WEATHER_BASE_URL // access .env secret (GitHub Pages)
const WeatherRequestEndpoint = `/${ipApiData.city}/today`;
// const weatherRequestParams = import.meta.env.VITE_APP_WEATHER_REQUEST_PARAMS; // get .env secret (local repo)
const weatherRequestParams = VITE_APP_WEATHER_REQUEST_PARAMS; // access .env secret (GitHub Pages)
const weatherUrl = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams}`;
const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useAsyncAwait(weatherUrl);

sessionStorage.setItem("weatherData", JSON.stringify(weatherApiData));
sessionStorage.setItem("weatherModuleCalled", JSON.stringify(weatherModuleCalled));

}
