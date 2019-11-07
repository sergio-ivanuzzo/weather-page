import { IWeatherData } from "reducers/weatherReducer";

export interface IWeatherUIProps {
    weatherData: IWeatherData;
    fetchWeather: (request) => Promise<void>;
}
