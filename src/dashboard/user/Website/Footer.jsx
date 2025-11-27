import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.footer`
  color: #fff;
  `;

const Img = styled.img`
  width: 100%;
  position: absolute;
  bottom: -150px;
  z-index: 20;

  
  `

const Content = styled.div`
  background-color: #370897;
  padding: 60px 20px;
  margin: 0 auto;
  text-align: center;
  height: 200px;
  color: white;
  position: relative;
  z-index: 30;


`;

export default function Footer() {
  return (
    <FooterWrap>
      <Img src="/public/images/wave.png" alt="" />

      <Content>
        <h3>GoWithUs</h3>
        <p>© {new Date().getFullYear()} GoWithUs. All rights reserved.</p>
      </Content>
    </FooterWrap>
  );
}
