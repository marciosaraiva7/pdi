import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vh 10px 0 10px;
`;

export const Title = styled.p`
  margin: 0;
  color: ${(props) => props.theme.color};
  text-align: left;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 48px;
  font-weight: 800;
`;

export const SubTitle = styled.p`
  font-family: "Inter";
  font-weight: 400;
  color: #999;
  margin-bottom: 2rem;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 35rem;
  padding: 1rem 1rem 3rem 1rem;
`;
export const Input = styled.textarea`
  min-width: 35rem;
  min-height: 7rem;
  padding: 1rem;
  border-radius: 0.8rem;
  background: #222222;
  color: #dadedf;
`;
