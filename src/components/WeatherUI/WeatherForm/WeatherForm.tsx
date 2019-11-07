import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { IWeatherFormProps } from "components/WeatherUI/WeatherForm/WeatherFormProps";
import { IWeatherFormState } from "components/WeatherUI/WeatherForm/WeatherFormState";

export class WeatherForm extends React.Component<IWeatherFormProps, IWeatherFormState> {
    public state: IWeatherFormState = {
        cityName: ""
    };

    public render(): React.ReactNode {
        return (
            <form noValidate autoComplete="off">
                <div>
                    <TextField
                        label="City name"
                        value={this.state.cityName}
                        onChange={this.handleChange('cityName')}
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
        })
    };

    protected sendRequest = async (): Promise<void> => {
        // something
    };
}
