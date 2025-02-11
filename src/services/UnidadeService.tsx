import axios from 'axios';
import { Unidade } from '../types/unidade';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

class UnidadeService {
    async getUnidades(): Promise<Unidade[]> {
        try {
            const response = await api.get<Unidade[]>('/unidades');
            return response.data;
        } catch (error) {
            console.error('Error fetching unidades:', error);
            throw error;
        }
    }
}

export const unidadeService = new UnidadeService();
