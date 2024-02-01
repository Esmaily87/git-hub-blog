import { Header } from "../../components/Header";
import { PublicationsContext } from "../../contexts/PublicationsContext";
import { useContextSelector } from "use-context-selector";


export function Publications() {

  const publicationsdata = useContextSelector(PublicationsContext, (context) => {
    return context.publications || undefined;
    
  });

  

  return (
    <div>
      <Header />
      
      
      <img src={publicationsdata?.avatar_url} />
        
      <h2>{publicationsdata?.name}</h2>
                  
     
    </div>
  );
}
