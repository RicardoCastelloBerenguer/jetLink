// stores/counter.js
import { defineStore } from 'pinia'
import axios from "../plugins/axios";
import { jwtDecode } from "jwt-decode";

const $axios = axios().provide.axios;

export const useUserStore = defineStore('user', {
  state: () => ({
    id : '' ,
    email : '',
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async register(user){
      let res = await $axios.post('/auth/register' , {user : user});

      console.log(res);      // this.login(res)
    },
    async login(user){
      let res = await $axios.post('/auth/login' , {user : user});

      if (res.data.ok) {
        // Guarda el token en el almacenamiento local
        localStorage.setItem('token', res.data.token);

        this.getUser(res.data.user);
        }  // this.login(res)
    },
    async logout(){
      try {
        this.$state.email = '';
        this.$state.id = ''
  
        localStorage.removeItem('token');
      }catch(error){
        console.error('Error when signing out:', error);
      }
      
    },
    async getUser (user = null) {
      if(user){
        this.$state.id = user.id;
        this.$state.email = user.email;
      }
      else{
        const token = localStorage.getItem('token');

        if (token) {
          try {
            // Decodificar el token para obtener la información del usuario
            const decodedToken = await jwtDecode(token).user;

            this.$state.email = decodedToken.email;
            this.$state.id = decodedToken.id
            
          } catch (error) {
            console.error('Error al decodificar el token:', error);
            // Manejar el error si es necesario
          }
        }
        else{
          console.error('No hay ningún usuario')
        }
      }
    },
  },
  persist:true
})