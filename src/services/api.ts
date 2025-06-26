import axios from "axios";

const api = axios.create({
    baseURL: "https://api.weatherapi.com/v1/current.json?q=Petr%C3%B3polis&key=2db8965a86184f29ade00800252606"
})

export default api