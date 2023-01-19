import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContainerCredentials = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const ContainerTitle = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
  gap: 1rem;
`;
export const Title = styled.h1`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 3rem;
  font-weight: 800;
`;

export const Subtitle = styled.h5`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;

  color: ${({ theme }) => theme?.subtitle};
`;

export const Input = styled.input`
  background: ${({ theme }) => theme?.inputBackground};
  color: ${({ theme }) => theme?.color};
  border: none;
  border-radius: 1rem;
  padding: 0.7rem;

  font-size: 1rem;
  font-weight: 400;

  transition: all 0.3s ease-in-out;


  &:active {
    outline: 2px solid ${({ theme }) => theme.border};
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  border-radius: 12px;
  transition: all 0.3s;

  &:hover {
    background-color: #2c6ef21a;
    color: lightblue;
  }
`;
