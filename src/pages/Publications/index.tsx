import { Header } from "../../components/Header";
import { PublicationsContext } from "../../contexts/PublicationsContext";
import { useContextSelector } from "use-context-selector";


export function Publications() {

  const publicationsdata = useContextSelector(PublicationsContext, (context) => {
    return context.publications || undefined;
    
  });

  console.log(publicationsdata?.avatar_url)

  return (
    <div>
      <Header />
      
      
      {publicationsdata && <img src={publicationsdata.avatar_url} /> }
        
      {publicationsdata && <h2>{publicationsdata.name}</h2>}
                  
     
    </div>
  );
}
