import { IWeatherData } from 'reducers/weatherReducer';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export interface IWeatherUIProps {
    weatherData: IWeatherData;
    fetchWeather: (request) => Promise<void>;
    classes: Record<keyof CSSProperties, string>;
}
