import * as React from 'react';
import Container from '@material-ui/core/Container';

import { IForecastData } from 'reducers/weatherReducer';
import { maybe } from 'helpers/maybe';

import { WeatherForm } from 'components/WeatherUI/WeatherForm';
import { IWeatherUIProps } from 'components/WeatherUI/WeatherUIProps';
import { IWeatherUIState } from 'components/WeatherUI/WeatherUIState';
import { WeatherCard } from 'components/WeatherUI/WeatherCard';

export class WeatherUI extends React.Component<IWeatherUIProps, IWeatherUIState> {
    public state: IWeatherUIState = {
        weatherData: undefined
    };

    public render(): React.ReactNode {
        return (
            <Container>
                <WeatherForm {...this.props} />
                {this.renderWeatherCards()}
            </Container>
        );
    }

    protected renderWeatherCards = (): Array<React.ReactNode> => {
        if (!maybe(this.state.weatherData, 'list')) {
            return null;
        }

        return this.state.weatherData.list.map((forecastData: IForecastData) => (
            <WeatherCard {...forecastData} />
        ));
    }
}
