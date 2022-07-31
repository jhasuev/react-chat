import axios from "axios"

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Accept: "application/json",
    Authorization: {
      toString: () => 'Bearer ' + localStorage.token ?? '',
    }
  },
})

api.interceptors.response.use(
  response => {
    // if (response.data?.status === 'error') {

    // }
    return response.data
  },
  error => Promise.reject(error),
)

export default api