import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

// Simple About Page for Travel Project — English version
export default function About() {
    return (
        <>
      <Navbar/>
    <Page>
      <Card>
        <Content>
          <Title>About Our Travel Project</Title>

          <Text>
            Our travel project helps users explore destinations, find trip
            details, and book easily. We focus on keeping everything simple,
            fast, and clear.
          </Text>

          <Section>
            <SectionTitle>What We Offer</SectionTitle>
            <List>
              <li>Easy trip browsing</li>
              <li>Clear pricing and details</li>
              <li>Simple and fast booking</li>
            </List>
          </Section>
        </Content>

        <Sidebar>
          <Avatar>TRAVEL</Avatar>
          <Small>Contact Us</Small>
          <Email>support@travel.com</Email>
        </Sidebar>
      </Card>
    </Page>
</>
  );
}

// ======================= Styled Components =======================

const Page = styled.main`
  min-height: 100vh;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f9fc;
  font-family: Inter, sans-serif;
`;

const Card = styled.section`
  max-width: 800px;
  width: 100%;
  background: white;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 1fr 250px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 26px;
  margin: 0 0 16px;
  color: #1f2937;
`;

const Text = styled.p`
  font-size: 15px;
  color: #4b5563;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #1f2937;
`;

const List = styled.ul`
  padding-left: 20px;
  font-size: 15px;
  color: #4b5563;
`;

const Sidebar = styled.aside`
  background: #f1f5fd;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-left: 1px solid #e5e7eb;

  @media (max-width: 760px) {
    border-left: none;
    border-top: 1px solid #e5e7eb;
  }
`;

const Avatar = styled.div`
  width: 110px;
  height: 110px;
  background: #d7e3ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #1e3a8a;
`;

const Small = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
`;

const Email = styled.p`
  margin: 0;
  font-size: 15px;
  color: #1f2937;
  font-weight: 600;
`;
