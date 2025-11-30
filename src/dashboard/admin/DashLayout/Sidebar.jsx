import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrap = styled.aside`
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #370897;
  color: #fff;
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const NavMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 12px 20px;
  color: #fff;
  text-decoration: none;
  transition: background 200ms ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background: #8c51fe;
    border-left: 4px solid #fff;
    padding-left: 16px;
  }
`;
const Button = styled.button`
  padding: 8px 8px;
  width: 200px;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  margin: 0 auto;
`;

export default function Sidebar() {
  function handleLougout() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <>
    <SidebarWrap>

        <NavMenu>
          <Logo>GOWITHUS Control</Logo>
        <NavItem>
          <StyledNavLink
            to="admin/pages/analytics"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink
            to="admin/pages/Users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Users
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink
            to="admin/pages/Trips"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Trips
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink
            to="admin/pages/Bookings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Bookings
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink
            to="admin/pages/Settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Settings
          </StyledNavLink>
        </NavItem>
      </NavMenu>
      <Button className='btn btn-danger' onClick={handleLougout}>Logout</Button>
    </SidebarWrap>
    </>
  );
}
