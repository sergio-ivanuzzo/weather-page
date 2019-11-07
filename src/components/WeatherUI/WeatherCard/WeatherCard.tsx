import * as React from 'react';
import Box from '@material-ui/core/Box';
import { IForecastData } from "reducers/weatherReducer";

export class WeatherCard extends React.Component<IForecastData> {
    public render(): React.ReactNode {
        return (
            <Box>
                <div>
                    {this.props.dt_txt}
                </div>
                <div>
                    <img src={this.renderWeatherIcon(this.props.weather[0].icon)} alt="weather icon" />
                </div>
            </Box>
        );
    }

    protected renderWeatherIcon = (icon): string => {
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }
}

