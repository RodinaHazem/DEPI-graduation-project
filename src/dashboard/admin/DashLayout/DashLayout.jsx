import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 30px;
  background: #f5f5f5;
`;

export default function DashLayout() {
  return (
    <DashContainer>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </DashContainer>
  )
}
