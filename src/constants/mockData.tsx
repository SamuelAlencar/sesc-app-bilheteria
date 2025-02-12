import { Bilhete } from '../types/bilhete';

export const MOCK_BILHETES: Bilhete[] = [
  {
    ageRating: "Livre",
    categoryType: "CREDENCIADO",
    clientCpf: "123.456.789-00",
    clientName: "João Silva",
    eventCode: 1234,
    eventName: "Show de Música Clássica",
    message: "Entrada válida",
    placeName: "Sala Principal",
    priceCategory: "Inteira",
    purchaseDate: "2023-10-09",
    purchaseOrigin: "WEB",
    purchaseUnit: "SESC Belenzinho",
    salesOperatorName: "Maria Operadora",
    sessionDate: "2023-10-10 18:00",
    ticketCode: "022032077363",
    ticketStatus: "VALID",
    ticketValidationDate: "2023-10-10",
    unitName: "Teatro Municipal"
  },
  {
    ageRating: "12 anos",
    categoryType: "CREDENCIADO",
    clientCpf: "987.654.321-00",
    clientName: "Maria Oliveira",
    eventCode: 5678,
    eventName: "Peça de Teatro",
    message: "Entrada válida",
    placeName: "Auditório Principal",
    priceCategory: "Meia",
    purchaseDate: "2023-11-14",
    purchaseOrigin: "PRESENCIAL",
    purchaseUnit: "SESC Pinheiros",
    salesOperatorName: "João Operador",
    sessionDate: "2023-11-15 20:00",
    ticketCode: "3517373",
    ticketStatus: "VALID",
    ticketValidationDate: "2023-11-15",
    unitName: "Auditório Central"
  }
];
