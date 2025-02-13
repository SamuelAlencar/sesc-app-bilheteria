import axios from 'axios';

const API_URL = 'http://localhost:8888';

export interface Unidade {
    id: number;
    nome: string;
    // Add other unidade properties as needed
}

export const UnidadeService = {
    getUnidades: async (): Promise<Unidade[]> => {
        try {
            const response = await axios.get<Unidade[]>(`${API_URL}/unidades`);
            console.log('Unidades:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching unidades:', error);
            throw error;
        }
    }
};

export default UnidadeService;