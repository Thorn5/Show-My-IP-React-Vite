// FetchApiData.jsx 
import useAsyncAwait from "../hooks/useAsyncAwait";
import useMockData from "../hooks/useMockData";
import useMockWeatherData from "../hooks/useMockWeatherData";
// import 'dotenv/config';
// import dotenv from 'dotenv';
// dotenv.config();

export default function FetchApiData() {
  // const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useMockData();

  const ipBaseUrl = import.meta.env.VITE_APP_IPBASEURL; //useAsyncAwait
  // const ipBaseUrl = process.env.REACT_APP_IPBASEURL; //useAsyncAwait
  const ipRequestEndpoint = "/json/"; 
  const ipUrl = `${ipBaseUrl}${ipRequestEndpoint}`;
  const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useAsyncAwait(ipUrl);

  sessionStorage.clear();
  sessionStorage.setItem("ipData", JSON.stringify(ipApiData));
  sessionStorage.setItem("ipModuleCalled", JSON.stringify(ipModuleCalled));


  // const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useMockWeatherData();

  const weatherBaseUrl = import.meta.env.VITE_APP_WEATHER_BASE_URL
  // const weatherBaseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const WeatherRequestEndpoint = `/${ipApiData.city}/today`;
  const weatherRequestParams = import.meta.env.VITE_APP_WEATHER_REQUEST_PARAMS;
  // const weatherRequestParams = '?unitGroup=metric&include=current&key=BH57DG4255XXKUS2GWMRQG2T6&contentType=json';
  const weatherUrl = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams}`;
  const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useAsyncAwait(weatherUrl);

  sessionStorage.setItem("weatherData", JSON.stringify(weatherApiData));
  sessionStorage.setItem("weatherModuleCalled", JSON.stringify(weatherModuleCalled));

}
