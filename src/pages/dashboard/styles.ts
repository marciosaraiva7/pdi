import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 10px 0 10px;
  background-color: ${props => props.theme.background}
`;

export const Title = styled.p`
  margin: 0;
  color: ${props => props.theme.color};
  text-align: left;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 48px;
  font-weight: 800;
`;

export const SubTitle = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  color: #999;
`;

export const ContainerText = styled.div`
  padding: 1rem;
`;

