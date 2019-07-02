import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1503269e4dce7279c23501f12eec05579e3f3b533e7a00852f05633533a07bb6'
    }
});