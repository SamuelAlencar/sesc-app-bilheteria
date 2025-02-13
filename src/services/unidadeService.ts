import axios from "axios";

// Use o IP da sua máquina na rede local
const api = axios.create({
  baseURL: "http://192.168.1.100:8888", // Substitua pelo IP da sua máquina
  timeout: 10000,
});

const getUnidades = async () => {
    // Mock data for testing
    return [
        {
            "id": 89,
            "nome": "CENTRO DE PESQUISA E FORMAÇÃO",
            "sigla": "CPF"
        },
        {
            "id": 59,
            "nome": "CINESESC",
            "sigla": "CINESESC"
        }
    ];
    
    // Commented out the API call for now
    /*try {
        const response = await api.get("/unidades");
        return response.data;
    } catch (error: any) {
        console.error("Error fetching unidades:", error.message, error.config);
        throw error;
    }*/
};

export default { getUnidades };
