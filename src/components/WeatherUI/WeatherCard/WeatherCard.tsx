import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { StyleRules, withStyles } from '@material-ui/core/styles';

import { IWeatherCardProps } from 'components/WeatherUI/WeatherCard/WeatherCardProps';


const styles = (): StyleRules => ({
    card: {
        height: 300
    }
});

class WeatherCard extends React.Component<IWeatherCardProps> {
    public render(): React.ReactNode {
        return (
            <Card className={this.props.classes.card}>
                <CardContent>
                    <Typography>
                        {this.props.dt_txt}
                    </Typography>
                    <Typography>
                        <img src={this.renderWeatherIcon(this.props.weather[0].icon)} alt="weather icon" />
                    </Typography>
                    {this.renderPrecipitationInfo('rain')}
                    {this.renderPrecipitationInfo('snow')}
                    <Typography>
                        Clouds: {this.props.clouds.all}
                    </Typography>
                    <Typography>
                        Wind: {this.props.wind.speed} / {this.props.wind.deg}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    protected renderWeatherIcon = (icon): string => {
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    };

    protected renderPrecipitationInfo = (precipitationType: string): React.ReactNode => {
        if (this.props[precipitationType]) {
            return (
                <Typography>
                    Precipitation: {this.props[precipitationType]["3h"]}
                </Typography>
            );
        } else {
            return null;
        }
    };
}

export default withStyles(styles, { withTheme: true })(WeatherCard);

