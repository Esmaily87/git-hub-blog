// 9. importar as bibliotecas
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";



interface Mydata {
  // Defina a estrutura das transações conforme a sua API
  login: string;
  name: string;
  id: number;
  node_id: string;
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  // ... outros campos
}
interface PublicationsContextType{ //tipagem do contexto que receberá uma lista de objetos Transaction acima
    publications: Mydata[];
    
    fetchPublications: (query?: string) => Promise<void> /*parâmetro opcional deste contexto no component searchform*/
   }

interface PublicationsProviderProps{ //tipagem do children, componente filho
    children: ReactNode;
}

export const PublicationsContext = createContext({} as PublicationsContextType)

export function PublicationsProvider({children}: PublicationsProviderProps){
   
  const [publications, setPublications] = useState<Mydata[]>([]);

    const fetchPublications = useCallback(
      async (query?: string) => {
        try {
          const response = await api.get<Mydata[]>('Esmaily87', {
            params: {
              q: query,
            }
          });
  
          setPublications(response.data);
        } catch (error) {
          console.error('Erro ao buscar transações:', error);
        }
      },
      []
    );
    

     

 useEffect(() => {
   
     fetchPublications();
 }, [fetchPublications]


 
 )



return(

    <PublicationsContext.Provider


    value={{  
        publications,
        fetchPublications,
        }}
    

    >
          {children}
      </PublicationsContext.Provider>

)
}

