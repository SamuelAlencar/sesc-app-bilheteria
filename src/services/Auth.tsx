import axios from 'axios';
import { Unidade } from '../types/unidade';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

interface User {
    id: number;
    name: string;
    email: string;
    unidades: Unidade[];
}

class Auth {
    private static TOKEN_KEY = '@sesc-app:token';

    setToken(token: string) {
        localStorage.setItem(Auth.TOKEN_KEY, token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    getToken() {
        return localStorage.getItem(Auth.TOKEN_KEY);
    }

    isAuthenticated() {
        return !!this.getToken();
    }

    async getCurrentUser(): Promise<User> {
        try {
            const response = await api.get<User>('/me');
            return response.data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    logout() {
        localStorage.removeItem(Auth.TOKEN_KEY);
        delete api.defaults.headers.common['Authorization'];
    }
}

export const authService = new Auth();
