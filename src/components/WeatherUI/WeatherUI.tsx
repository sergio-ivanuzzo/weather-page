import * as React from 'react';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { StyleRules, Theme, withStyles } from '@material-ui/core/styles';

import { IForecastData } from 'reducers/weatherReducer';
import { maybe, uniqkey } from 'helpers';

import WeatherForm from 'components/WeatherUI/WeatherForm';
import { IWeatherUIProps } from 'components/WeatherUI/WeatherUIProps';
import WeatherCard from 'components/WeatherUI/WeatherCard';

const styles = (theme: Theme): StyleRules => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginTop: 10,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    gridListTile: {
        margin: 5
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

class WeatherUI extends React.Component<IWeatherUIProps> {
    public render(): React.ReactNode {
        return (
            <Container>
                <WeatherForm fetchWeather={this.props.fetchWeather} />
                {this.renderWeatherCards()}
            </Container>
        );
    }

    protected renderWeatherCards = (): React.ReactNode => {
        if (!maybe(this.props.weatherData, 'list')) {
            return null;
        }

        const weatherCards = this.props.weatherData.list.map((forecastData: IForecastData) => (
            <GridListTile key={uniqkey()} rows={2} className={this.props.classes.gridListTile}>
                <WeatherCard {...forecastData} />
            </GridListTile>
        ));

        return (
            <Container className={this.props.classes.root}>
                <GridList className={this.props.classes.gridList} cols={3}>
                    {weatherCards}
                </GridList>
            </Container>
        );
    }
}

export default withStyles(styles, { withTheme: true })(WeatherUI);
