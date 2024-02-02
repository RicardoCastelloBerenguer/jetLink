import axios from 'axios'

export default defineNuxtPlugin((NuxtApp) => {
    //axios.defaults.withCredentials = true
    axios.defaults.baseURL = 'https://apilink.vercel.app/'
    return {
        provide: {
            axios: axios
        }
    }
})