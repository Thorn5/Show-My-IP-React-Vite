// FetchApiData.jsx 
import useAsyncAwait from "../hooks/useAsyncAwait";
import useMockData from "../hooks/useMockData";
import useMockWeatherData from "../hooks/useMockWeatherData";

export default function FetchApiData() {
  // const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useMockData();

  // const ipBaseUrl = import.meta.env.VITE_APP_IPBASEURL;
  const ipBaseUrl = "https://ipapi.co";
  const ipRequestEndpoint = "/json/"; // true location
  // const ipRequestEndpoint = "/183.177.124.136/json/"; // mock location
  const ipUrl = `${ipBaseUrl}${ipRequestEndpoint}`;
  const { loading: ipLoading, error: ipError, apiData: ipApiData, moduleCalled: ipModuleCalled } = useAsyncAwait(ipUrl);

  sessionStorage.clear();
  sessionStorage.setItem("ipData", JSON.stringify(ipApiData));
  sessionStorage.setItem("ipModuleCalled", JSON.stringify(ipModuleCalled));

  // const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useMockWeatherData();

  const weatherBaseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const WeatherRequestEndpoint = `/${ipApiData.city}/today`;
  const weatherRequestParams = "/?unitGroup=metric&elements=conditions&include=current&contentType=json";
  const weatherApiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
  const weatherUrl = `${weatherBaseUrl}${WeatherRequestEndpoint}${weatherRequestParams}${weatherApiKey}`;
  const { loading: weatherLoading, error: weatherError, apiData: weatherApiData, moduleCalled: weatherModuleCalled } = useAsyncAwait(weatherUrl);

  sessionStorage.setItem("weatherData", JSON.stringify(weatherApiData));
  sessionStorage.setItem("weatherModuleCalled", JSON.stringify(weatherModuleCalled));

}
