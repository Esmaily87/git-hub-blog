import axios from 'axios';

export const api = axios.create(
    {
        baseURL: 'https://api.github.com/users/',
        // baseURL: 'https://matls-clients.api.stage.cora.com.br/token'

    }
);