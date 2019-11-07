import Axios from 'axios';
import qs from 'qs';

export const client = Axios.create({
    baseURL: process.env.API_URL,
    paramsSerializer: (params) => {
        const serializedParams = qs.stringify(params, {arrayFormat: 'repeat'});
        return `${serializedParams}&APPID=${process.env.API_KEY}`;
    }
});
