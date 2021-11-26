import axios from 'axios';


export const shortenUrl = async (origUrl) => {
    return axios.post(`http://localhost:5000/api/url`, {origUrl: origUrl});
}

export const getUrl = async (shortUrl) => {
    let modUrl = shortUrl.replace('https://', '');
    return axios.get(`http://localhost:5000/api/url/${modUrl}`);
}