import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1``;

export const ContainerCredentials = styled.div`
  width: 90% form {
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 8px;
  margin-bottom: 30px;

  padding: 5px;

  :first-child {
    margin-bottom: 10px;
  }

  :focus {
    outline: #535bf2 solid 4px;
    transition: all 0.1s ease-in;
  }
`;

export const ButtonLogin = styled.button`
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 12px;
  padding: 5px;
  color: #dadedf;
  font-weight: 600;
  font-family: "Inter";
  font-size: 19px;
  transition: 0.3s ease-in-out 0s;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  background-color: ${props => props.theme.colors.brand.pure};

  :hover:not([disabled]) {
    
    background-color: ${props => props.theme.colors.brand.light};
    color: ${props => props.theme.colors.brand.pure};
    cursor: pointer;
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
  :active:not([disabled]) {
    transform: scale(0.9);
    box-shadow: 0 0 0 black;
  }
  :disabled {
    background-color: #999999;
    color: black;
    cursor: not-allowed;
  }
`;

export const TextFeedback = styled.p``;
