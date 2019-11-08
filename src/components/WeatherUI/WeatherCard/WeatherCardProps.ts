import { CSSProperties } from '@material-ui/core/styles/withStyles';

import { IForecastData } from 'reducers/weatherReducer';

export interface IWeatherCardProps extends IForecastData{
    classes: Record<keyof CSSProperties, string>;
}
