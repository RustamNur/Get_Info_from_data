import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";


export const Link = styled(NavLink)`
  color: aliceblue;
  text-decoration:none;
  font-size: 18px;
  display: flex;
  justify-content:space-between;
  flex-direction:row;
  align-items:center;
  .actived{
    color: yellow;
  }
`;
export const Cont = styled(Container)`
  background-color: black;
  padding: 20px;
  display: flex;
  justify-content:space-between;
  flex-direction:row;
  align-items:center;
`;
