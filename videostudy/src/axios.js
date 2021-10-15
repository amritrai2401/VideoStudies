import axios from "axios";

const instance = axios.create({
    baseURL="https://videostudy-mern-backend.herokuapp.com",
});

export default instance;