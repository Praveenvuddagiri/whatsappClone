import axios from 'axios';

const instance = axios.create({
    baseURL: "https://aqueous-springs-29983.herokuapp.com",
})

export default instance;