import * as React from 'react';

import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { IWeatherFormProps } from "components/WeatherUI/WeatherForm/WeatherFormProps";
import { IWeatherFormState } from "components/WeatherUI/WeatherForm/WeatherFormState";

export class WeatherForm extends React.Component<IWeatherFormProps, IWeatherFormState> {
    public state: IWeatherFormState = {
        cityName: '',
        countryCode: ''
    };

    public render(): React.ReactNode {
        return (
            <Box>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField
                            label="City Name"
                            value={this.state.cityName}
                            onChange={this.handleChange('cityName')}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Country Code"
                            value={this.state.countryCode}
                            onChange={this.handleChange('countryCode')}
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.sendRequest}
                        >
                            Send
                        </Button>
                    </div>
                </form>
            </Box>
        );
    }

    protected handleChange = (
        fieldName: keyof IWeatherFormState
    ): (e: React.ChangeEvent) => void => (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = event.currentTarget.value;
        this.setState({
            [fieldName]: value
        } as Pick<IWeatherFormState, keyof IWeatherFormState>);
    };

    protected sendRequest = async (): Promise<void> => {
        if (this.state.cityName && this.state.countryCode) {
            await this.props.fetchWeather({
                q: `${this.state.cityName},${this.state.countryCode}`
            });
        }
    };
}
