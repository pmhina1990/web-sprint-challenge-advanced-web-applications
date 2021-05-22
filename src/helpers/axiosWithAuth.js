//Task List:
//Build and export a function used to send in our authorization token
import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseUrl: 'http://localhost:5000/api',
        headers: { Authorization: token, }
    })
}

export default axiosWithAuth

