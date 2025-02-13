import axios from "axios";

// Use o IP da sua máquina na rede local
const api = axios.create({
  baseURL: "http://172.16.64.2:8888", // Substitua pelo IP da sua máquina
  timeout: 10000,
});

const getUnidades = async () => {
  try {
    const response = await api.get("/unidades");
    return response.data;
  } catch (error: any) {
    console.error("Error fetching unidades:", error.message, error.config);
    throw error;
  }
};

export default { getUnidades };
