import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 1.5rem;
`;

export const ContainerImg = styled.div`
  color: ${props => props.theme["blue"]};
  display: flex;
  flex-direction: column;

  
  align-items: center;
  
  padding: 10px ;
`


export const ImageTop = styled.img`
  border: 2px solid ${props => props.theme["blue"]};
  border-radius: 50%;
  width: 100px;
  display: flex;
  flex-direction: column;
  
  
  align-items: center;
  
`;



export const HeadTitle = styled.div`
  color: ${props => props.theme["blue"]};
  display: flex;
  flex-direction: column;
  
  width: 50vw;
  
  align-items: center;
  
  padding: 10px ;
`

export const TextH1 = styled.h1`
  color: ${props => props.theme["blue"]};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  
  
`

export const TextH3 = styled.h3`
  color: ${props => props.theme["blue"]};
  text-align: center;
  font-weight: 400;
`
export const TextP = styled.p`
  color: ${props => props.theme["blue"]};
  text-align: center;
  font-weight: 400;
`




export const HeadSocial= styled.div`
  color: ${props => props.theme["blue"]};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px ;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px; /* Para adicionar espaçamento ao quebrar a linha */
  }
`


export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialButton = styled.button`
  height: auto;
  border: 0;
  background: ${props => props.theme["green-500"]};
  color: ${props => props.theme["white"]};
  font-weight: bold;
  margin: 3px;
  padding: 0.5rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
  `;


export const RepoCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-around;
  padding: 20px;
`;

export const RepoCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 16px;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const RepoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333;
`;

export const RepoDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 16px;
`;

export const RepoLink = styled.a`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;