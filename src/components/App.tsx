import * as React from 'react';

import { Provider } from 'react-redux';

import { store } from 'store/store';

import WeatherContainer from 'containers/WeatherContainer';
import { IWeatherData } from 'reducers/weatherReducer';

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                <WeatherContainer>
                    {this.renderTable}
                </WeatherContainer>
            </Provider>
        );
    }

    protected renderTable = (props: IWeatherData): React.ReactNode => {
        return 'test';
    }
}

export default App;
