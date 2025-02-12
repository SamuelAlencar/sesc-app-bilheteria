import { Bilhete } from '../types/bilhete';
import { MOCK_BILHETES } from '../constants/mockData';

class BilheteService {
  async buscarBilhete(numero: string): Promise<Bilhete | null> {
    try {
      // Simulate API call
      const bilhete = MOCK_BILHETES.find(b => b.numero === numero);
      return bilhete || null;
    } catch (error) {
      console.error('Error searching bilhete:', error);
      throw error;
    }
  }
}

export default new BilheteService();
