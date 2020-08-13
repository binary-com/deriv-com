import axios from 'axios'

const getBackendUrl = process.env.GATSBY_ENV_RECRUIT_URL || 'http://localhost:3000'
const API = (() => {
    return {
        get: (path, param, options) => axios.get(`${getBackendUrl}${path}`, param, options),
        delete: (path, param, options) => axios.delete(`${getBackendUrl}${path}`, param, options),
        post: (path, param, options) => axios.post(`${getBackendUrl}${path}`, param, options),
        put: (path, param, options) => axios.put(`${getBackendUrl}${path}`, param, options),
    }
})()

export default API
