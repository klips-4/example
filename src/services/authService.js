import axios from "axios";
import VueJwtDecode from 'vue-jwt-decode'
import {useAuthStore} from "@/stores/authStore.js";

const API_URL = 'http://localhost:5192/api/auth';
const authApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

class AuthService {
    static async _login(user) {

        const response = await authApi.post('/sign_in', user);
        if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken)
            const authStore = useAuthStore();
            authStore.accessToken = response.data.accessToken;
        }
        return response.data;
    }

    static _decodeToken(token) {
        const decoded = VueJwtDecode.decode(token, {complete: true});
        console.log(decoded)
        return decoded.payload;
    }

    static _authHeader(token) {
        return {'Authorization': `Bearer ${token}`}
    }
}

export default AuthService;