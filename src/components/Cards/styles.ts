import styled from "styled-components";

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