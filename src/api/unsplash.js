import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID c20b7993b50b4169fed00b6717759c8b83cda65b719c08de67f2bfbd6738f433'
    }
});