import axios from 'axios';

export const shortenUrl = async (origUrl) => {
    return axios.post(`${process.env.REACT_APP_API}/url`, {origUrl: origUrl});
}

export const getUrl = async (shortUrl) => {
    return axios.get(`${process.env.REACT_APP_API}/url`, {shortUrl: shortUrl});
}