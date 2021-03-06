import { CSSProperties } from '@material-ui/core/styles/withStyles';

export interface IWeatherFormProps {
    fetchWeather: (request) => Promise<void>;
    classes: Record<keyof CSSProperties, string>;
}
