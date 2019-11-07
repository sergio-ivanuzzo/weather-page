import * as React from 'react';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IWeatherContainerChildProps, IWeatherContainerProps } from './WeatherContainerProps';
import { IStoreState } from 'reducers/rootReducer';

import * as WeatherActions from 'actions/weatherActions';
import { awaitify, IPromiseMethod } from 'helpers/awaitify';

class WeatherContainer extends React.Component<IWeatherContainerProps> {
    public render(): React.ReactNode {
        return this.props.children(this.injectedProps);
    }

    protected get injectedProps(): IWeatherContainerChildProps {
        return {
            weatherData: this.props.weatherData,
            fetchWeather: this.fetchWeather
        }
    };

    protected fetchWeather = async (request) => {
        await awaitify((resolve, reject) => this.props.fetchWeather(request, resolve, reject));
    }
}

const mapStateToProps = (state: IStoreState) => ({
    weatherData: state.weatherReducer.weatherData,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    fetchWeather: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(WeatherActions.actionWeatherFetch(request, resolve, reject))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
