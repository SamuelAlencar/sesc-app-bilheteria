import React, { useEffect, useState } from 'react';
import { unidadeService } from '../services/UnidadeService';
import { Unidade } from '../types/unidade';

// ...existing code...

export function LoginScreen() {
  const [unidades, setUnidades] = useState<Unidade[]>([]);
  
  useEffect(() => {
    const fetchUnidades = async () => {
      try {
        const data = await unidadeService.getUnidades();
        setUnidades(data);
      } catch (error) {
        console.error('Error fetching unidades:', error);
        // Handle error appropriately
      }
    };

    fetchUnidades();
  }, []);

  // ...existing code...

  // Replace your existing unidades constant with the state value
  // const unidades = [ ... ] // Remove this line
  // Now use the unidades state variable directly
  
  // ...existing code...
}
