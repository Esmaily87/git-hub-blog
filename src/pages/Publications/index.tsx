import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PublicationsContext } from "../../contexts/PublicationsContext";
import {  RepoCardsContainer,
  RepoCard,
  RepoTitle,
  RepoDescription,
  RepoLink  } from "./styles"
import { useContextSelector } from "use-context-selector";

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  // Outros campos que você pode precisar
}

export function Publications() {

  const publicationsdata = useContextSelector(PublicationsContext, (context) => {

  
    return context.publications || undefined;

    
    
  });

  const [repos, setRepos] = useState<Repo[]>([]);

  

  useEffect(() => {
    if (publicationsdata?.repos_url) {
      fetch(publicationsdata.repos_url)
        .then((response) => response.json())
        .then((data) => setRepos(data))
        .catch((error) => console.error('Erro ao buscar repositórios:', error));
    }
  }, [publicationsdata?.repos_url]);

  return (
    <div>
      <Header />
      <RepoCardsContainer>
        {repos.map((repo) => (
          <RepoCard key={repo.id}>
            <RepoTitle>{repo.name}</RepoTitle>
            {repo.description && <RepoDescription>{repo.description}</RepoDescription>}
            <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Ver Repositório
            </RepoLink>
          </RepoCard>
        ))}
      </RepoCardsContainer>

      
                  
     
    </div>
  );
}
