import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localHost:4001'
})

export{
    axiosInstance
}
