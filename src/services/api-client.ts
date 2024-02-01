import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "3db225743b314b0fa79b911e392be2ea"
    }
})