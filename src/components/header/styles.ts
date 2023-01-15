import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  border-bottom: 2px;
  border-bottom-style: solid;
  width: 100%;
  height: 10vh;
`;



export const ButtonLink = styled(Link)`
  text-decoration: none;
`;
