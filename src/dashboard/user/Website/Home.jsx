import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = styled.header`
  background: linear-gradient(#e8e6eaf9, #8c51fe);
  height: 100vh;
`;
const WebsiteTitle = styled.h1`
  color: black;
  font-size: 80px;
  font-family: Colonna MT, serif;
`;
const Container = styled.div`
  width: 80%;
  margin: 80px auto;
`;
const Img = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Details = styled.details`
  margin-top: 10px;
  summary {
    font-size: 18px;
    font-weight: 50px;
  }
`;

const Button = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${(p) => (p.primary ? "#370897" : "transparent")};
  color: ${(p) => (p.primary ? "white" : "#370897")};
  cursor: pointer;
  margin-top: 10px;
`;

export default function Home() {
  return (
    <>
      <Header>
        <Navbar />
        <Container>
          <div className="w-50">
            <WebsiteTitle>
              Discover a new way of looking at the world
            </WebsiteTitle>
            <Details>
              <summary>Learn More</summary>
              <p>
                “A person susceptible to ‘wanderlust’ is not so much addicted to
                movement as committed to transformation.”
              </p>
            </Details>
            <Button primary>Get Started</Button>
          </div>

          <Img src="/public/images/top-view-woman-with-travel-essentials 1.png"></Img>
        </Container>
      </Header>
    </>
  );
}
