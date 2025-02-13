import axios from 'axios';
import { API_URL } from '../config/environment';

class BilheteService {
    public static async getBilheteById(numeroBilhete: string) {
        try {
            const response = await axios.get(`${API_URL}/bilhetes/${numeroBilhete}`);
            console.log('Response:', response.data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default BilheteService;