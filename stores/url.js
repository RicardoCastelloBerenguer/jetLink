// stores/counter.js
import { defineStore } from 'pinia'
import axios from "../plugins/axios";
import { useUserStore } from "~/stores/user";

const $axios = axios().provide.axios;

export const useUrlStore = defineStore('url', {
  state: () => ({
    id : '' ,
    fullUrl : '',
    shortUrl: '',
    clicks : 0,
    urlsUserLogged : []
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async postUrl(originalUrl , userId){
      console.log(userId);
      let res = await $axios.post('/short' , {originalUrl : originalUrl.value , userId : userId});
    },
    async goToUrl(shortLink){
      let res = await $axios.get(`/${shortLink}` , {originalUrl : shortLink.value});
    },
    async getUrlsByUserLogged(){
      const userLogged = useUserStore().id;
      let res = await $axios.get(`/links/${userLogged}`)

      this.$state.urlsUserLogged = res.data.urls;
    },
    async deleteUrl(urlId){      
      let res = await $axios.delete(`/links/${urlId}`)

      this.getUrlsByUserLogged();
    }
  },
  persist:true
})