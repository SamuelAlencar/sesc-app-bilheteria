export interface Bilhete {
  ageRating: string;
  categoryType: string;
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
  ticketStatus: string;
  ticketValidationDate: string;
  unitName: string;
}

export type RootStackParamList = {
  Login: undefined;
  Ingressos: undefined;
};
