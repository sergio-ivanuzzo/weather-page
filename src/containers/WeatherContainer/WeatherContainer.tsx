import * as React from 'react';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IWeatherContainerProps } from './WeatherContainerProps';
import { IStoreState } from 'reducers/rootReducer';

import * as WeatherActions from 'actions/weatherActions';
import { awaitify, IPromiseMethod } from "helpers/awaitify";

class WeatherContainer extends React.Component<IWeatherContainerProps> {

    async componentDidMount(): Promise<void> {
        await this.fetchWeather();
    }

    public render(): React.ReactNode {
        return this.props.children(this.props);
    }

    protected fetchWeather = async () => {
        await awaitify((resolve, reject) => this.props.fetchWeather(null, resolve, reject));
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
