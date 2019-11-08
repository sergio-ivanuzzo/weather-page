import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from 'store/store';

import WeatherContainer, { IWeatherContainerChildProps } from 'containers/WeatherContainer';
import WeatherUI from 'components/WeatherUI/WeatherUI';


class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                <WeatherContainer>
                    {this.renderWeatherUI}
                </WeatherContainer>
            </Provider>
        );
    }

    protected renderWeatherUI = (props: IWeatherContainerChildProps): React.ReactNode => {
        return (
            <WeatherUI {...props} />
        );
    }
}

export default App;
