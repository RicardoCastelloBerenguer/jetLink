import axios from 'axios'

export default defineNuxtPlugin((NuxtApp) => {
    //axios.defaults.withCredentials = true
    axios.defaults.baseURL = 'http://localhost:3333/'
    return {
        provide: {
            axios: axios
        }
    }
})