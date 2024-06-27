import axios from "axios"

const instance = () => {
    let options = {
        baseURL: 'http://127.0.0.1:8000/',
        headers: {}
    }

    if (localStorage.getItem('token')) {
        options.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }

    return axios.create(options)
}

export default instance;