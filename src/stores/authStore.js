import {defineStore} from "pinia";
import AuthService from "@/services/authService.js";
import router from "../router/router";

export const useAuthStore = defineStore('auth-store', {
    state: () => ({
        accessToken: localStorage.getItem('accessToken') || null,
    }),

    actions: {
        async login(userName, password) {
            const user = {
                UserName: userName,
                Password: password
            };
            await AuthService._login(user);
            await router.push('/main')
        },

        async logout() {
            this.accessToken = null;
            localStorage.removeItem('accessToken')
            await router.push('/login')
        }
    }
});

