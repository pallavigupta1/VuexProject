import axios from "axios";

export const API = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather"
});
export const key = "d2523fb1bf20a2c7ef5550ce44dbf858";