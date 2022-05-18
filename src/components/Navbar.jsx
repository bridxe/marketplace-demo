import React from "react";
import styled from "styled-components";
import img from "../assets/logo.png";

const Container = styled.div`
  background-color: #2b1e34;
  color: #9d88af;
  width: 100%;
  border-bottom: 0.1px grey solid;
`;

const Wrapper = styled.div`
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 0.9em;

  font-size: 0.8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 78px;
  height: 40px;
  background: url(${img}) 0 100% no-repeat;
  background-size: 100% 100%;
`;

const Nav3 = styled.div``;

const NavLink1 = styled.span`
  padding-right: 2em;
`;
const NavLink2 = styled.span`
  padding-right: 2em;
`;

const NavLink3 = styled.span`
  padding-right: 2em;
`;
const NavLink4 = styled.span`
  padding-right: 2em;
`;
const NavLink5 = styled.span`
  padding-right: 2em;
`;
const NavLink6 = styled.span`
  padding-right: 2em;
`;
const NavLink7 = styled.span`
  padding-right: 2em;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Nav1>
          <NavLink1>ALL PRODUCTS</NavLink1>
          <NavLink2>NEW ARRIVALS</NavLink2>
          <NavLink3>SALES</NavLink3>
        </Nav1>

        <Logo></Logo>

        <Nav3>
          <NavLink4>SEARCH</NavLink4>
          <NavLink5>ACCOUNT</NavLink5>
          <NavLink6>WISHLIST (0)</NavLink6>
          <NavLink7> BAG(0)</NavLink7>
        </Nav3>
      </Wrapper>
    </Container>
  );
}
