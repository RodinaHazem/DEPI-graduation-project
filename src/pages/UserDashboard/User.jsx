
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
  background: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;
`;

const Sidebar = styled.aside`
  background: linear-gradient(180deg, #0f172a, #07102a);
  color: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 20px;
  letter-spacing: 0.4px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavItem = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
  &.active {
    background: rgba(255, 255, 255, 0.06);
  }
`;

const Content = styled.main`
  padding: 28px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`;

const Search = styled.input`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e6e9f2;
  width: 320px;
  background: #fff;
`;

const Cards = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(17, 24, 39, 0.06);
  min-width: 160px;
  flex: 1 1 180px;
`;

const CardTitle = styled.div`
  font-size: 12px;
  color: #69707a;
`;

const CardValue = styled.div`
  font-size: 20px;
  margin-top: 8px;
  font-weight: 600;
`;

const Section = styled.section`
  background: #fff;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(17, 24, 39, 0.04);
`;

const UserRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dashed #efefef;
  &:last-child {
    border-bottom: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6ee7b7, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
`;

const Small = styled.div`
  font-size: 12px;
  color: #53606f;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const Btn = styled.button`
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  background: #eef2ff;
`;

const Empty = styled.div`
  padding: 28px;
  text-align: center;
  color: #7b7f87;
`;

// --- Mock data ---
const MOCK_USERS = [
  {
    id: 1,
    name: "Sara Ahmed",
    email: "sara@example.com",
    role: "Traveler",
    trips: 5,
  },
  {
    id: 2,
    name: "Omar Nabil",
    email: "omar@example.com",
    role: "Host",
    trips: 12,
  },
  {
    id: 3,
    name: "Lina Mostafa",
    email: "lina@example.com",
    role: "Traveler",
    trips: 2,
  },
  {
    id: 4,
    name: "Hassan Ali",
    email: "hassan@example.com",
    role: "Admin",
    trips: 0,
  },
];

export default function UserDashboard() {
  const [users, setUsers] = useState(MOCK_USERS);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("dashboard");

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  const removeUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <Container>
      <Sidebar>
        <Logo>Trips • Admin</Logo>

        <Nav>
          <NavItem
            className={active === "dashboard" ? "active" : ""}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </NavItem>
          <NavItem
            className={active === "users" ? "active" : ""}
            onClick={() => setActive("users")}
          >
            Users
          </NavItem>
          <NavItem
            className={active === "trips" ? "active" : ""}
            onClick={() => setActive("trips")}
          >
            Trips
          </NavItem>
          <NavItem
            className={active === "settings" ? "active" : ""}
            onClick={() => setActive("settings")}
          >
            Settings
          </NavItem>
        </Nav>

        <div style={{ marginTop: "auto", fontSize: 13, opacity: 0.9 }}>
          <Small>Logged in as</Small>
          <div style={{ marginTop: 8, fontWeight: 600 }}>Admin • you</div>
        </div>
      </Sidebar>

      <Content>
        <Header>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <h2 style={{ margin: 0 }}>
              {active === "dashboard"
                ? "Dashboard"
                : active.charAt(0).toUpperCase() + active.slice(1)}
            </h2>

          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Search
              placeholder="Search user or email..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div style={{ display: "flex", gap: 8 }}>
              <Btn>Export</Btn>
              <Btn>New</Btn>
            </div>
          </div>
        </Header>

        {active === "dashboard" && (
          <>
            <Cards>
              <Card>
                <CardTitle>Active Users</CardTitle>
                <CardValue>{users.length}</CardValue>
              </Card>
              <Card>
                <CardTitle>Total Trips</CardTitle>
                <CardValue>{users.reduce((s, u) => s + u.trips, 0)}</CardValue>
              </Card>
              <Card>
                <CardTitle>Admins</CardTitle>
                <CardValue>
                  {users.filter((u) => u.role === "Admin").length}
                </CardValue>
              </Card>
            </Cards>

            <Section>
              <h3 style={{ marginTop: 0 }}>Last users</h3>
              {filtered.length === 0 ? (
                <Empty>No users match your search.</Empty>
              ) : (
                filtered.map((u) => (
                  <UserRow key={u.id}>
                    <UserInfo>
                      <Avatar>
                        {u.name
                          .split(" ")
                          .map((x) => x[0])
                          .slice(0, 2)
                          .join("")}
                      </Avatar>
                      <div>
                        <div style={{ fontWeight: 600 }}>{u.name}</div>
                        <Small>
                          {u.email} • {u.role}
                        </Small>
                      </div>
                    </UserInfo>
                    <Actions>
                      <Small>{u.trips} trips</Small>
                      <Btn onClick={() => alert("View details for " + u.name)}>
                        View
                      </Btn>
                      <Btn onClick={() => removeUser(u.id)}>Remove</Btn>
                    </Actions>
                  </UserRow>
                ))
              )}
            </Section>
          </>
        )}

        {active === "users" && (
          <Section>
            <h3 style={{ marginTop: 0 }}>Users</h3>
            {filtered.length === 0 ? (
              <Empty>No users found.</Empty>
            ) : (
              filtered.map((u) => (
                <UserRow key={u.id}>
                  <UserInfo>
                    <Avatar>
                      {u.name
                        .split(" ")
                        .map((x) => x[0])
                        .slice(0, 2)
                        .join("")}
                    </Avatar>
                    <div>
                      <div style={{ fontWeight: 600 }}>{u.name}</div>
                      <Small>
                        {u.email} • {u.role}
                      </Small>
                    </div>
                  </UserInfo>
                  <Actions>
                    <Btn onClick={() => alert("Edit " + u.name)}>Edit</Btn>
                    <Btn onClick={() => removeUser(u.id)}>Delete</Btn>
                  </Actions>
                </UserRow>
              ))
            )}
          </Section>
        )}

        {active === "trips" && (
          <Section>
            <h3 style={{ marginTop: 0 }}>Trips</h3>
            <Empty>
              Trips list is empty (mock).
              <div style={{ marginTop: 12 }}>
                <Btn onClick={() => alert("Add trip")}>Add Trip</Btn>
              </div>
            </Empty>
          </Section>
        )}

        {active === "settings" && (
          <Section>
            <h3 style={{ marginTop: 0 }}>Settings</h3>
            
          </Section>
        )}
      </Content>
    </Container>
  );
}
