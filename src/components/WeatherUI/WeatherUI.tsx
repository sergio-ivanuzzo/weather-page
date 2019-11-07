import * as React from 'react';
import Container from '@material-ui/core/Container';

import { IForecastData } from 'reducers/weatherReducer';
import { maybe, uniqkey } from 'helpers';

import { WeatherForm } from 'components/WeatherUI/WeatherForm';
import { IWeatherUIProps } from 'components/WeatherUI/WeatherUIProps';
import { WeatherCard } from 'components/WeatherUI/WeatherCard';

export class WeatherUI extends React.Component<IWeatherUIProps> {
    public render(): React.ReactNode {
        return (
            <Container>
                <WeatherForm {...this.props} />
                {this.renderWeatherCards()}
            </Container>
        );
    }

    protected renderWeatherCards = (): Array<React.ReactNode> => {
        if (!maybe(this.props.weatherData, 'list')) {
            return null;
        }

        return this.props.weatherData.list.map((forecastData: IForecastData) => (
            <WeatherCard key={uniqkey()} {...forecastData} />
        ));
    }
}
