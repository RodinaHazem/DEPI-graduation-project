import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Nav = styled.nav`
  height: 70px;
  display: flex;
  padding: 0 50px;
  background: transparent;

`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 60px;
  width: auto;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${(p) => (p.primary ? "#370897" : "transparent")};
  color: ${(p) => (p.primary ? "white" : "#370897")};
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  padding: 8px 0;
  transition: color 200ms ease;
  &:hover {
    color: #8c51fe;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 100%;
    background: #8c51fe;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 220ms ease;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &.active {
    color: #8c51fe;
  }
  &.active:after {
    transform: scaleX(1);
  }
`;

export default function Navbar() {
    return (

          <>
    <Nav>
      <Left>
        <LogoImg
          src="/icons/Black_and_White_Elegant_Letter_G_Beauty_Logo-removebg-preview.png"
          alt="logo"
          />
      </Left>

      <Center>
        <NavLinks>
          <li>
            <StyledNavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              >
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              >
              About
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/trips"
              className={({ isActive }) => (isActive ? "active" : "")}
              >
              Trips
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              >
              Contact
            </StyledNavLink>
          </li>
        </NavLinks>
      </Center>

      <Right>
        <Button onClick={() => (window.location.href = "/login")}>Login</Button>
        <Button primary onClick={() => (window.location.href = "/register")}>
          Register
        </Button>
      </Right>
    </Nav>

                </>  
  );
}
