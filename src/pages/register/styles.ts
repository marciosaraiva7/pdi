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
  background: ${(props) => props.theme.background};
  color: ${({ theme }) => theme?.color};
  border: none;
  border-radius: 1rem;
  padding: 0.7rem;

  font-size: 1rem;
  font-weight: 400;

  transition: all 0.3s ease-in-out;
  outline: none;
`;

export const ContainerButtonLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  position: relative;
  color: #007aff;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #007aff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const ButtonRegister = styled.button`
  background: #007aff;
  color: #f1f1f1;
  height: 3rem;
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;

  &:hover:enabled {
    box-shadow: 17px 10px 54px 16px rgba(0, 0, 0, 0.1),
      0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    background-color: lightgray;
    color: #999999;
    cursor: default;
  }
`;
