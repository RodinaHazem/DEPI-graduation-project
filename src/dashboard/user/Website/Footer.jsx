import React from 'react'
import styled from 'styled-components'



const Img = styled.img`
  width: 100%;
  height: 150px;
  position: absolute;
  bottom: -20px;
  z-index: 20;

  
  `

const Content = styled.div`
  padding: 10px 10px;
  background: #370897;
  text-align: center;
  height: 80px;
  color: white;
  position: relative; 
  z-index: 30;



`;

export default function Footer() {
  return (
    <>
      <Img src="/public/images/wave.png" alt="" />

      <Content>
        <h3>GoWithUs</h3>
        <p>© {new Date().getFullYear()} GoWithUs. All rights reserved.</p>
      </Content>
    </>
  );
}
