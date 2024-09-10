import { HeaderContainer, HeaderContent, SocialButton, ImageTop, TextH1, TextH3, HeadTitle, HeadSocial, TextP, ContainerImg} from "./styles";
// import * as Dialog from '@radix-ui/react-dialog';
// import {PiggyBank} from "@phosphor-icons/react"

import { PublicationsContext } from "../../contexts/PublicationsContext";
import { useContextSelector } from "use-context-selector";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
//import logoImg from "../../assets/logo.svg";



export function Header() {
    const publicationsdata = useContextSelector(PublicationsContext, (context) => {
        return context.publications || undefined;
    })
  return (
    <HeaderContainer>
      <HeaderContent>

      <ContainerImg>
      <ImageTop src={publicationsdata?.avatar_url} alt={publicationsdata?.login}/>
      <TextP >{publicationsdata?.login}</TextP>
      </ContainerImg>


      
      
     
      
        <HeadTitle>
        <TextH1>{publicationsdata?.name}</TextH1>
        <TextH3>{publicationsdata?.bio}</TextH3>
       
       
        </HeadTitle>

        <HeadSocial>
        <SocialButton><GithubLogo size={32} /><h2>{publicationsdata?.repos_url.length}</h2></SocialButton>
        <SocialButton><LinkedinLogo size={32} /><h2>199</h2></SocialButton>
        <SocialButton><InstagramLogo size={32} /><h2>659</h2></SocialButton>
        </HeadSocial>

        
       
            {/* <NewTransactionModal/> */}
       
    
      </HeaderContent>
    </HeaderContainer>
  );
}