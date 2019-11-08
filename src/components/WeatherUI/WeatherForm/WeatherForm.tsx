import * as React from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { StyleRules, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { IWeatherFormProps } from 'components/WeatherUI/WeatherForm/WeatherFormProps';
import { IWeatherFormState } from 'components/WeatherUI/WeatherForm/WeatherFormState';
import { TabContent } from 'components/TabContent';

const styles = (): StyleRules => ({
    root: {
        flexGrow: 1,
    },
    form: {
        display: 'flex',
        flexDirection: 'row'
    }
});

class WeatherForm extends React.Component<IWeatherFormProps, IWeatherFormState> {
    public state: IWeatherFormState = {
        cityName: '',
        countryCode: '',
        currentTab: 0,
        lat: 0,
        lon: 0
    };

    public render(): React.ReactNode {
        return (
            <Paper>
                <Tabs
                    value={this.state.currentTab}
                    onChange={this.handleTabChange}
                >
                    <Tab label="Search by City Name" id="city-search-tab" />
                    <Tab label="Search by Coordinates" id="coordinates-search-tab" />
                </Tabs>
                <TabContent currentTab={this.state.currentTab} tabIndex={0}>
                    {this.renderForm()}
                </TabContent>
                <TabContent currentTab={this.state.currentTab} tabIndex={1}>
                    {this.renderForm()}
                </TabContent>
            </Paper>
        );
    }

    protected handleTabChange = (event: React.ChangeEvent, newValue: number): void => {
        this.setState({
            currentTab: newValue,
            lat: 0,
            lon: 0,
            cityName: '',
            countryCode: ''
        });
    };

    protected renderForm = (): React.ReactNode => {
        return (
            <Box boxShadow={2} p={1}>
                <form
                    className={this.props.classes.form}
                    noValidate
                    autoComplete="off"
                    onSubmit={this.submitForm}
                >
                    {this.renderFormControls()}
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Send
                        </Button>
                    </div>
                </form>
            </Box>
        );
    };

    protected renderFormControls = (): React.ReactNode => {
        if (this.state.currentTab === 0) {
            return (
                <>
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
                </>
            );
        } else if (this.state.currentTab === 1) {
            return (
                <>
                    <div>
                        <TextField
                            label="Latitude"
                            type="number"
                            value={this.state.lat}
                            onChange={this.handleChange('lat')}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Longitude"
                            type="number"
                            value={this.state.lon}
                            onChange={this.handleChange('lon')}
                        />
                    </div>
                </>
            );
        } else {
            return null;
        }
    };

    protected handleChange = (
        fieldName: string
    ): (e: React.ChangeEvent) => void => (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value: any = event.currentTarget.value;
        this.setState(() => ({
            [fieldName]: value
        } as IWeatherFormState));
    };

    protected submitForm = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        if (this.state.cityName && this.state.countryCode) {
            await this.props.fetchWeather({
                q: `${this.state.cityName},${this.state.countryCode}`
            });
        } else if (this.state.lat && this.state.lon) {
            await this.props.fetchWeather({
                lat: this.state.lat,
                lon: this.state.lon
            })
        }
    };
}

export default withStyles(styles, { withTheme: true })(WeatherForm);
