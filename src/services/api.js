import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-devradar-byabner.herokuapp.com/'
})

export default api
