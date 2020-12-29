import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance = axios.create({
    baseURL: 'http://f7edf175e7c2.ngrok.io',
});

instance.interceptors.request.use(
    async (config)=>{
        const token = await AsyncStorage.getItem('token');
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
);

export default instance;