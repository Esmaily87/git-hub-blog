// importar as bibliotecas
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface Mydata {
  login: string;
  name: string;
  id: number;
  node_id: string;
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string | null;
  hireable: boolean | null;
  html_url: string;
  location: string | null;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
}

interface PublicationsContextType{ //tipagem do contexto que receberá uma lista de objetos Transaction acima
     publications: Mydata | undefined;
    
    fetchPublications: (query?: string) => Promise<void> /*parâmetro opcional deste contexto no component searchform*/
   }

interface PublicationsProviderProps{ //tipagem do children, componente filho
    children: ReactNode;
}

export const PublicationsContext = createContext({} as PublicationsContextType)

export function PublicationsProvider({children}: PublicationsProviderProps){
   
  // const [publications, setPublications] = useState<Mydata[]>([]); Alterei a tipagem aqui//////////////////////
  const [publications, setPublications] = useState<Mydata>();

    const fetchPublications = useCallback(
      async (query?: string) => {
        try {
          // const response = await api.get<Mydata[]>('Esmaily87', { Alterei a tipagem aqui//////////////////////
          const response = await api.get<Mydata>('Esmaily87', {
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

