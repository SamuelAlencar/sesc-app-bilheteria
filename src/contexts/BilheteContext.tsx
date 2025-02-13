import React, { createContext, useState, useContext } from 'react';
import { IBilhete, searchBilhete } from '../services/bilheteService';

interface BilheteContextData {
  bilhete: IBilhete | null;
  loading: boolean;
  error: string | null;
  searchTicket: (numero: string) => Promise<void>;
  clearBilhete: () => void;
}

const BilheteContext = createContext<BilheteContextData>({} as BilheteContextData);

export const BilheteProvider: React.FC = ({ children }) => {
  const [bilhete, setBilhete] = useState<IBilhete | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchTicket = async (numero: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await searchBilhete(numero);
      setBilhete(response);
    } catch (err) {
      setError('Erro ao buscar bilhete. Verifique o número e tente novamente.');
      setBilhete(null);
    } finally {
      setLoading(false);
    }
  };

  const clearBilhete = () => {
    setBilhete(null);
    setError(null);
  };

  return (
    <BilheteContext.Provider value={{ bilhete, loading, error, searchTicket, clearBilhete }}>
      {children}
    </BilheteContext.Provider>
  );
};

export const useBilhete = () => useContext(BilheteContext);
