export interface Bilhete {
  numero: string;
  dataEvento: string;
  horaEvento: string;
  unidade: string;
  nomeUsuario: string;
  documentoUsuario: string;
}

export type RootStackParamList = {
  Login: undefined;
  Ingressos: undefined;
};
