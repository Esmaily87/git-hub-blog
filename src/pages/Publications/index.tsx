import { useEffect } from "react";
import { Header } from "../../components/Header";
import { PublicationsContext } from "../../contexts/PublicationsContext";
import { useContextSelector } from "use-context-selector";


export function Publications() {

  const publicationsdata = useContextSelector(PublicationsContext, (context) => {
    return context.publications || []; // Certifique-se de inicializar como uma array vazia
  });

  useEffect(() => {
    // console.log(publicationsdata)
  }, [publicationsdata]);

  return (
    <div>
      <Header />
      <div>
    
            
              <h2>{publicationsdata.name}</h2>
            

    

     
          
      </div>
    </div>
  );
}
