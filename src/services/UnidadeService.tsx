import api from './api';

export interface Unidade {
  id: number;
  nome: string;
  codigo: string;
  ativo: boolean;
}

class UnidadeService {
  async getUnidades(): Promise<Unidade[]> {
    try {
      console.log('Fetching unidades from:', api.defaults.baseURL);
      const response = await api.get<Unidade[]>('/unidades');
      return response.data;
    } catch (error) {
      console.error('UnidadeService Error:', {
        error,
        baseURL: api.defaults.baseURL
      });
      throw error;
    }
  }
}

export default new UnidadeService();
