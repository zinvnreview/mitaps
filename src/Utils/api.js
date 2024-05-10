import axios from "axios";

const Api = axios.create({
        baseURL: "https://localhost:9089/api/"
        // babelURL: "https://api.mitapsstudio.vn/api"
    })

export default Api;