import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";


export default function Trips() {
  const trips = [
    {
      id: 1,
      title: "Beach Escape",
      description:
        "Enjoy a relaxing weekend by the sea with sunshine and clear waters.",
      price: "$120",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/d92eb9a10c2ebf83.jpeg",
    },
    {
      id: 2,
      title: "Mountain Adventure",
      description:
        "Explore hiking trails, waterfalls, and breathtaking mountain views.",
      price: "$180",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/d92eb9a10c2ebf83.jpeg",
    },
    {
      id: 3,
      title: "City Tour",
      description:
        "Discover the best food, culture, and landmarks in the city.",
      price: "$95",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/d92eb9a10c2ebf83.jpeg",
    },
    {
      id: 3,
      title: "City Tour",
      description:
        "Discover the best food, culture, and landmarks in the city.",
      price: "$95",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/d92eb9a10c2ebf83.jpeg",
    },
    {
      id: 3,
      title: "City Tour",
      description:
        "Discover the best food, culture, and landmarks in the city.",
      price: "$95",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/d92eb9a10c2ebf83.jpeg",
    },
    {
      id: 3,
      title: "City Tour",
      description:
        "Discover the best food, culture, and landmarks in the city.",
      price: "$95",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/d92eb9a10c2ebf83.jpeg",
    },
    {
      id: 3,
      title: "City Tour",
      description:
        "Discover the best food, culture, and landmarks in the city.",
      price: "$95",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/d92eb9a10c2ebf83.jpeg",
    },
    {
      id: 3,
      title: "City Tour",
      description:
        "Discover the best food, culture, and landmarks in the city.",
      price: "$95",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/d92eb9a10c2ebf83.jpeg",
    },
    {
      id: 3,
      title: "City Tour",
      description:
        "Discover the best food, culture, and landmarks in the city.",
      price: "$95",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=center,quality=60,width=1440,height=650,dpr=2/tour_img/d92eb9a10c2ebf83.jpeg",
    },
  ];

    return (
      <>
            <Navbar />
    <Page>
      <Title>Available Trips</Title>

      <TripsGrid>
        {trips.map((trip) => (
          <Card key={trip.id}>
            <Image src={trip.image} alt={trip.title} />
            <Content>
              <TripTitle>{trip.title}</TripTitle>
              <Description>{trip.description}</Description>
              <Price>{trip.price}</Price>
              <Button>View Details</Button>
            </Content>
          </Card>
        ))}
      </TripsGrid>
    </Page>
        </>
  );
}



const Page = styled.div`
  min-height: 100vh;
  padding: 32px;
  background: #f8fafc;
  font-family: Inter, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 28px;
  font-size: 28px;
  color: #1e293b;
`;

const TripsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const TripTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #0f172a;
`;

const Description = styled.p`
  font-size: 14px;
  color: #475569;
  margin: 8px 0 12px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #2563eb;
  margin: 0 0 12px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s;

  &:hover {
    background: #1e4ecf;
  }
`;
