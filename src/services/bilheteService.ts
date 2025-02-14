import axios from 'axios';

// Interface for the ticket response
interface TicketResponse {
    ageRating: string;
    categoryType: 'CREDENCIADO' | string;
    clientCpf: string;
    clientName: string;
    eventCode: number;
    eventName: string;
    message: string;
    placeName: string;
    priceCategory: string;
    purchaseDate: string;
    purchaseOrigin: string;
    purchaseUnit: string;
    salesOperatorName: string;
    sessionDate: string;
    ticketCode: string;
    ticketStatus: 'VALID' | string;
    ticketValidationDate: string;
    unitName: string;
}

/**
 * Gets ticket information by its code
 * @param ticketCode - The code of the ticket to search
 * @returns Promise with ticket information
 * @throws Error with appropriate message based on the error status
 */
export const getTicketByCode = async (ticketCode: string): Promise<TicketResponse> => {
    const API_URL = 'http://localhost:8888';
    return {
        ageRating: 'Livre',
        categoryType: 'CREDENCIADO',
        clientCpf: '12345678900',
        clientName: 'Fulano de Tal',
        eventCode: 1,
        eventName: 'Evento Teste',
        message: 'Ingresso encontrado',
        placeName: 'Teatro Municipal',
        priceCategory: 'Inteira',
        purchaseDate: '2022-01-01',
        purchaseOrigin: 'Internet',
        purchaseUnit: 'Internet',
        salesOperatorName: 'Vendedor',
        sessionDate: '2022-01-01',
        ticketCode: 1,
        ticketStatus: 'VALID',
        ticketValidationDate: '2022-01-01',
        unitName: 'Unidade Teste',
    };
    
    // try {
    //     const response = await axios.get<TicketResponse>(`${API_URL}/ingressos/${ticketCode}`);
    //     return response.data;
    // } catch (error) {
    //     if (axios.isAxiosError(error)) {
    //         switch (error.response?.status) {
    //             case 400:
    //                 throw new Error('Ocorreu um erro ao buscar o ingresso');
    //             case 401:
    //             case 403:
    //                 throw new Error('Não autorizado');
    //             case 404:
    //                 throw new Error('Ingresso não encontrado');
    //             default:
    //                 throw new Error('Erro desconhecido ao buscar o ingresso');
    //         }
    //     }
    //     throw error;
    // }
};