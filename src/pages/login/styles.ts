import { Link } from "react-router-dom";
import styled from "styled-components";


export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  border-radius: 12px;
  transition: all 0.3s;

  &:hover {
    background-color: #2C6EF21A;
    color: lightblue;
  }
`;
